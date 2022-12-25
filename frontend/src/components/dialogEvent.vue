<template>
  <div class="q-pa-md q-gutter-sm" id="layerPopup">
    <q-dialog v-model="active">
      <q-layout view="Lhh lpR fff" container class="bg-white" style="height: 65vh; overflow-y: hidden; overflow: hidden">
        <q-header class="bg-white text-green-100" style="text-align: right">
          <q-btn flat v-close-popup round dense icon="close" @click="dialogClose()"/>
        </q-header>
        <q-card class="my-card" style="font-family: 'KOTRAHOPE'">
          <div class="q-pa-md" style="margin-right: 0.5vh;">
            <q-carousel
                animated
                v-model="slide"
                v-model:fullscreen="fullscreen"
                arrows
                navigation
                infinite
            >
              <template v-for="(item,i) in detList"  :key="i" style="width: 50px">
                <q-carousel-slide :name="i" :img-src="require(`../assets/images/${item.p_photo}.jpg`)"/>
              </template>
                <template v-slot:control>
                  <q-carousel-control
                      position="bottom-right"
                      :offset="[18, 18]"
                  >
                    <q-btn
                        push round dense color="white" text-color="black"
                        :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                        @click="fullscreen = !fullscreen"
                    />
                  </q-carousel-control>
              </template>
            </q-carousel>
          </div>
          <q-img  height="8vh">
            <div class="absolute-bottom" style="font-size:3.5vh; background: #bcaaa4; font-family: 'KOTRAHOPE'">
              {{ det.p_tit }}
            </div>
          </q-img>
          <q-card-section style="font-size: 2.5vh; background: #fff3e0; color: darkslategrey">
            {{ det.p_con }}
          </q-card-section>
        </q-card>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import vClickOutside from 'v-click-outside'
import {cheol} from "@/plugins/cheol";

export default {
  name: "dialog",
  components: {
    clickOutside: vClickOutside
  },
  props: ['active','detList'],
  setup(props, {emit}) {
    const {store, router} = cheol()
    const active = computed(() => props.active)
    const carousel = ref(false)
    const fullscreen = ref(false)
    const slide = ref(0)
    const det = ref({})
        //computed(() => store.getters['PDS/getDel'])

    const detList = computed(() => props.detList)
    watch(detList,value => {
      slide.value = 0
      det.value = detList.value[0]
    })



    watch(slide,value => {
      //console.log(JSON.stringify(detList.value))
     det.value = detList.value.filter(value => value.p_num === String(slide.value))[0]
      // console.log(slide.value)
      // console.log(det.value)
    })

    const dialogClose = () => {
      emit("update:active", !active.value)
    }


    onMounted(() => {

    })
    return {
      active,
      carousel,
      det,
      detList,
      slide,
      fullscreen,
      dialogClose
    }
  }
}
</script>

<style scoped>


@font-face {
  font-family: 'KOTRAHOPE';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'FlowerSalt';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/FlowerSalt.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.div .scroll {
  overflow: hidden !important;
}

.div.scroll {
  overflow: hidden !important;
}

.scroll {
  overflow: hidden !important;
}

body {
  overflow: hidden !important;
}

.q-pa-md q-gutter-sm {
  overflow: hidden !important;
}
</style>