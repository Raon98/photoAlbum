import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import api from "@/plugins/api";
import store from './store'
import axios from "axios";
import mitts from "mitt";
import utils from "@/plugins/utils";
import Vuetify from '@/plugins/vuetify'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import VueNumber from "vue-number-animation";
const app = createApp(App).use(Quasar, quasarUserOptions)
app.config.productionTip =false

import '@/assets/css/base.css'

const emitter = mitts();
app.config.globalProperties.emitter = emitter;
app.provide('emitter', emitter);


app.use(router).use(store).use(Vuetify).use(VCalendar,{}).use(VueNumber)

app.use(api,{store,router})
app.use(utils,{store})
app.config.globalProperties.$axios = axios;
app.mount('#app')