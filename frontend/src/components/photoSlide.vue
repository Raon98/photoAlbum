<template xmlns="http://www.w3.org/1999/html">
<!--  <v-carousel-->
<!--      cycle-->
<!--      height="400"-->
<!--      hide-delimiter-background-->
<!--      show-arrows="hover"-->
<!--  >-->
<!--    <v-carousel-item-->
<!--        v-for="(slide, i) in slides"-->
<!--        :key="i"-->
<!--    >-->
<!--      <v-sheet-->
<!--          :color="colors[i]"-->
<!--          height="100%"-->
<!--      >-->
<!--        <div class="d-flex fill-height justify-center align-center">-->
<!--          <div class="text-h2" @click="viewItem(i)">-->
<!--            {{ slide }} Slide-->

<!--          </div>-->

<!--        </div>-->
<!--      </v-sheet>-->
<!--    </v-carousel-item>-->

<!--  </v-carousel>-->
  <calenderEvent/>
  <q-btn label="Carousel" color="primary" @click="openDialog()" />
  <dialogEvent v-model:active="active">ㅎㅇ</dialogEvent>

</template>

<script>
import {ref, watch} from "vue";
import dialogEvent from "@/components/dialogEvent";
import calenderEvent from "@/components/calenderEvent";
export default {
  name: "photoSlide",
  components: {dialogEvent,calenderEvent},
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
    watch(active,value=>{
      console.log("ACTIVE 반응")
      console.log(value)
    //  active.value=false
    })

    const openDialog = () => {
      active.value = true
    }
    const viewItem = (item) => {
      console.log(item+"번째 슬라이드 입니다.")
    }



    return {colors,slides,viewItem,active,openDialog}
  }
}
</script>

<style scoped>

</style>