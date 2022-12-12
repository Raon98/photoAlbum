import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import {PDS} from "@/store/modules/PDS";


export default createStore({
    modules: {PDS},
    plugins: [
        createPersistedState({
            paths: ["PDS.cls"],
            storage: window.localStorage
        })
    ]
})


