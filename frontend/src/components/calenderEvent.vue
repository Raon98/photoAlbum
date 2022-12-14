<template>
  <div class="text-center section">
    <h2 class="h2" style="font-family: 'KOTRAHOPE'">기록장</h2>
    <p class="text-lg font-medium text-gray-600 mb-6" style="font-family: 'KOTRAHOPE'; opacity: 40%;">
      Every love story is beautiful but ours is my favorite
    </p>
  </div>
  <div class="q-pa-md">
    <div>
      <div class="q-pb-sm q-gutter-sm">
        <q-badge color="teal" style="font-size: 1.5vh; font-family: 'FlowerSalt'">
          <span style="font-size: 2vh">기록일 : </span>{{ date }}
        </q-badge>
      </div>
      <div class="q-gutter-md">
        <q-date
            minimal
            v-model="date"
            :events="events"
            :event-color="(date) => date.slice(-1) % 2 === 0 ? 'teal' : 'orange'"
            :options="events"
            class="cel_custom"
            color='orange'
            @click="test(date)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "calenderEvent",
  setup() {
    const dateOpen = ref(false)
    const start = ref('')
    const type = ref('month')
    const typeOptions = ref([

    ])
    const date = ref('2022/09/17')
    const events = ['2022/09/17', '2022/09/18', '2022/09/21']

    const detailPhoto = (item) => {
      console.log(item)
    }
    const test = (item) => {
      console.log(item)
    }
    return {dateOpen, start, type, detailPhoto, date, events,test}
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

.cel_custom {
  width: 95Vw !important;
  height: 40VH;
  margin-left: 2vw !important;
  margin-right: 2vw !important;
  font-family: 'KOTRAHOPE';

}

</style>