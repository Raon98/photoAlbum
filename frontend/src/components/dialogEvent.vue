<template>
  <div class="q-pa-md q-gutter-sm" id="layerPopup">
    <q-dialog v-model="active">
      <q-layout view="Lhh lpR fff" container class="bg-white" style="height: 65vh; overflow-y: hidden; overflow: hidden">
        <q-header class="bg-white text-green-100" style="text-align: right">
          <q-btn flat v-close-popup round dense icon="close" @click="dialogClose()"/>
        </q-header>
        <q-card class="my-card">
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
                <q-carousel-slide :name="i" :img-src="item.delstImg"/>
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
            <div class="absolute-bottom text-h6">
              {{ det.tit }}
            </div>
          </q-img>
          <q-card-section>
            {{ det.con }}
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
  props: ['active'],
  setup(props, {emit}) {
    const {store, router} = cheol()
    const active = computed(() => props.active)
    const carousel = ref(false)
    const fullscreen = ref(false)
    const slide = ref(0)
    const det = ref({})
        //computed(() => store.getters['PDS/getDel'])
    const detList = ref([{
      num : '0' ,
      delstImg: require('../assets/images/87154229.png'),
      tit : '음주여행',
      con : '맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙맛있쪙'
    },
      {
        num : '1' ,
        delstImg: 'https://cdn.quasar.dev/img/parallax1.jpg',
        tit : '제빵여행',
        con : '맛있쪙'
      },
      {
        num : '2' ,
        delstImg: 'https://cdn.quasar.dev/img/parallax2.jpg',
        tit : '오뎅여행',
        con : '맛있쪙'
      },
      {
        num : '3' ,
        delstImg: 'https://cdn.quasar.dev/img/quasar.jpg',
        tit : '호떡여행',
        con : '맛있쪙'
      },
    ])
    //초기화
    det.value = detList.value[0]

    watch(slide,value => {
     det.value = detList.value.filter(value => value.num === String(slide.value))[0]
      console.log(slide.value)
      console.log(det.value)
    })

    console.log(JSON.stringify(det.value))
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