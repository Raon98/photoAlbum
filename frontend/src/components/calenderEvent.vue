<template>
  <div class="text-center section">
    <h2 class="h2" style="font-family: 'KOTRAHOPE'">기록장</h2>
    <p class="text-lg font-medium text-gray-600 mb-6" style="font-family: 'KOTRAHOPE'; opacity: 40%;">
      Every love story is beautiful but ours is my favorite
    </p>
  </div>
  <button @click="active = true">열기 </button>
  <div class="q-pa-md">
    <div>
      <div class="q-pb-sm q-gutter-sm">
        <q-badge color="teal" style="font-size: 1.5vh; font-family: 'FlowerSalt'">
          <span style="font-size: 2vh" v-if="date">기록일 : {{ date }} </span>
          <span style="font-size: 2vh" v-else> 기록일을 클릭해요!</span>
        </q-badge>
      </div>
      <div class="q-gutter-md">
        <q-date
            minimal
            v-model="date"
            :events="evtList"
            :event-color="(date) => date.slice(-1) % 2 === 0 ? 'teal' : 'orange'"
            :options="evtList"
            class="cel_custom"
            color='orange'
            @click="openPhotobook(date)"
        />
      </div>
    </div>
  </div>
  <dialogEvent v-model:active="active"></dialogEvent>
</template>

<script>
import {ref} from "vue";
import {cheol} from "@/plugins/cheol";
import {groupBy, uniqBy} from "lodash";
import dialogEvent from "@/components/dialogEvent";

export default {
  name: "calenderEvent",
  components : [dialogEvent],
  setup() {
    const {store, router, $api,$utils} = cheol()
    const active = ref(false)
    const date = ref('2022/09/16')
    const evtList = ref([])
    const dayList = ref([])
    $api('remember', {}, (res) => {
      // 날짜값 가져와서 달력에 표시
      let events = uniqBy(res.data, 'p_day')
      for (let key in events) {
        evtList.value.push(events[key].p_day)
      }
      // 날짜 기준으로 데이터 병합
      dayList.value = res.data
    })

    const openPhotobook = (day) => {
      let list = []
      if (!$utils.isEmpty(day)){
        list = dayList.value.filter(value => value.p_day === day)
        console.log(JSON.stringify(list))
        store.commit('PDS/setDetList', JSON.stringify(list))
        store.commit('PDS/setDiaFlag', true)
      }

    }
    return {date, openPhotobook,evtList,active}
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