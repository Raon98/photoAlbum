<template>
  <div class="q-pa-md q-gutter-sm" id="layerPopup">
    <q-dialog v-model="active" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="height: 60%; overflow-y: hidden; overflow: hidden"   >
        <q-header class="bg-white text-green-100" style="text-align: right" >
          <q-btn flat v-close-popup round dense icon="close" @click="dialogClose()" />
        </q-header>
        <q-card class="my-card" >
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" height="100%">
            <div class="absolute-bottom text-h6">
              Title
            </div>
          </q-img>
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import vClickOutside from 'v-click-outside'

export default {
  name: "dialog",
  components: {
    clickOutside: vClickOutside
  },
  props: ['active'],
  setup(props, {emit}) {
    const active = computed(() => props.active)
    const carousel = ref(false)
    const slide = ref(1)
    const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!'
    const stars = ref(3)

    const slideVol = ref(39)
    const slideAlarm = ref(56)
    const slideVibration = ref(63)
    const dialogClose = () => {
      active.value = false
      emit("update:active", !active.value)
    }
    // const onClickOutside = () => {
    //   console.log("외부클릭")
    //   emit("update:active", !active.value)
    // }


    onMounted(() => {

    })
    return {
      active,
      carousel,
      slide,
      lorem,
      stars,
      slideVol,
      slideAlarm,
      slideVibration,
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