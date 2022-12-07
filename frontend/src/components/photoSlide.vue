<template>
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
      <v-sheet
          :color="colors[i]"
          height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2" @click="viewItem(i)">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import {ref} from "vue";

export default {
  name: "photoSlide",
  setup() {
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

    const viewItem = (item) => {
      console.log(item+"번째 슬라이드 입니다.")
    }
    return {colors,slides,viewItem}
  }
}
</script>

<style scoped>

</style>