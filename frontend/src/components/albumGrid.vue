<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
    >
      <q-card class="bg-white text-black">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" @click="closeAlbum">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {cheol} from "@/plugins/cheol";
import {computed, ref} from "vue";

export default {
  name: "albumGrid",
  props: ["activeAlbum"],
  setup() {
    const { router , store} =  cheol()
    const dialog = computed(()=> store.getters['PDS/getAlbumFlag'])
    const maximizedToggle = ref(true)

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

    const closeAlbum = () => {
      dialog.value = false
      store.commit('PDS/setAlbumFlag', false)
    }

    return {
      detList,maximizedToggle,dialog,closeAlbum
    }
  }
}
</script>

<style scoped>

</style>