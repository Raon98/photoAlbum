<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Carousel" color="primary" @click="carousel = true"/>
    <q-btn label="Card" color="primary" @click="card = true"/>
    <q-btn label="Sliders" color="primary" @click="sliders = true"/>

    <q-dialog v-model="active">
      <q-layout view="Lhh lpR fff" container class="bg-white" style="height: 50%">
        <q-header class="bg-black text-white" style="text-align: right">
          <q-btn flat v-close-popup round dense icon="close" @click="dialogClose()"/>
        </q-header>

        <q-page-container>
          <q-carousel
              transition-prev="slide-right"
              transition-next="slide-left"
              swipeable
              animated
              v-model="slide"
              control-color="primary"
              navigation-icon="radio_button_unchecked"
              navigation
              padding
              height="400px"
              class="bg-white shadow-1 rounded-borders"
          >

            <q-carousel-slide :name="1" class="column no-wrap flex-center">
              <q-icon name="style" color="primary" size="56px"/>
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap flex-center">
              <q-icon name="live_tv" color="primary" size="56px"/>
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap flex-center">
              <q-icon name="layers" color="primary" size="56px"/>
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap flex-center">
              <q-icon name="terrain" color="primary" size="56px"/>
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-page-container>
      </q-layout>
    </q-dialog>


    <!--    <q-dialog v-model="card">-->
    <!--      <q-card class="my-card">-->
    <!--        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />-->

    <!--        <q-card-section>-->
    <!--          <q-btn-->
    <!--              fab-->
    <!--              color="primary"-->
    <!--              icon="place"-->
    <!--              class="absolute"-->
    <!--              style="top: 0; right: 12px; transform: translateY(-50%);"-->
    <!--          />-->

    <!--          <div class="row no-wrap items-center">-->
    <!--            <div class="col text-h6 ellipsis">-->
    <!--              Cafe Basilico-->
    <!--            </div>-->
    <!--            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">-->
    <!--              <q-icon name="place" />-->
    <!--              250 ft-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <q-rating v-model="stars" :max="5" size="32px" />-->
    <!--        </q-card-section>-->

    <!--        <q-card-section class="q-pt-none">-->
    <!--          <div class="text-subtitle1">-->
    <!--            $・Italian, Cafe-->
    <!--          </div>-->
    <!--          <div class="text-caption text-grey">-->
    <!--            Small plates, salads & sandwiches in an intimate setting.-->
    <!--          </div>-->
    <!--        </q-card-section>-->

    <!--        <q-separator />-->

    <!--        <q-card-actions align="right">-->
    <!--          <q-btn v-close-popup flat color="primary" label="Reserve" />-->
    <!--          <q-btn v-close-popup flat color="primary" round icon="event" />-->
    <!--        </q-card-actions>-->
    <!--      </q-card>-->
    <!--    </q-dialog>-->

  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "dialog",
  props: ['active'],
  setup(props,{emit}) {
    const active = computed(() => props.active)
    const dialogClose = () => {
      console.log(active.value +"CLICK 확인")
      active.value = false
      emit("update:active", !active.value)
    }
    return {
      active,dialogClose,
      carousel: ref(false),
      slide: ref(1),
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
      stars: ref(3),

      slideVol: ref(39),
      slideAlarm: ref(56),
      slideVibration: ref(63)
    }
  }
}
</script>

<style scoped>

</style>