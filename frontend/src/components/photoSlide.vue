<template xmlns="http://www.w3.org/1999/html">
  <div class="content-custom">
    <calenderEvent/>
    <q-btn label="Carousel" color="primary" @click="openDialog()"/>
  </div>
  <dialogEvent v-model:active="active">ㅎㅇ</dialogEvent>
  <bottom-nav/>
</template>

<script>
import {ref, watch} from "vue";
import dialogEvent from "@/components/dialogEvent";
import calenderEvent from "@/components/calenderEvent";
import BottomNav from "@/components/bottomNav";

export default {
  name: "photoSlide",
  components: {dialogEvent, calenderEvent,BottomNav},
  setup() {
    const active = ref(false)
    console.log(active.value)
    const colors = ref([
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ])
    const slides = ref([
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ])
    watch(active, value => {
      console.log("ACTIVE 반응")
      console.log(value)
      //  active.value=false
    })

    const openDialog = () => {
      active.value = true
    }
    const viewItem = (item) => {
      console.log(item + "번째 슬라이드 입니다.")
    }


    return {colors, slides, viewItem, active, openDialog}
  }
}
</script>

<style scoped>
body {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.content-custom {
  height: 150%;
}
</style>