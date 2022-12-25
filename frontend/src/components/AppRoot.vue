<template xmlns="http://www.w3.org/1999/html">
  <div className="content-custom">
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

          />
        </div>
      </div>
    </div>
  </div>
  <dialogEvent v-model:active="active" :detList="detList"></dialogEvent>
  <album-grid v-model:activeAlbum="activeAlbum"></album-grid>
  <bottom-nav></bottom-nav>
</template>

<script>
import {computed, ref, watch} from "vue";
import dialogEvent from "@/components/dialogEvent";
import calenderEvent from "@/components/calenderEvent";
import BottomNav from "@/components/bottomNav";
import albumGrid from "@/components/albumGrid";
import {cheol} from "@/plugins/cheol";
import {uniqBy} from "lodash";

export default {
  name: "AppRoot",
  components: {dialogEvent,calenderEvent, BottomNav, albumGrid},
  setup() {
    const {store, router, $api,$utils} = cheol()
    const active = ref(false)
    const activeAlbum = ref(false)
    const date = ref('2022/09/16')
    const evtList = ref([])
    const dayList = ref([])
    const detList = ref( [])
    $api('remember', {}, (res) => {
      // 날짜값 가져와서 달력에 표시
      let events = uniqBy(res.data, 'p_day')
      for (let key in events) {
        evtList.value.push(events[key].p_day)
      }
      // 날짜 기준으로 데이터 병합
      dayList.value = res.data
    })
    watch(date,value => {
      openPhotobook(value)
    })
    const openPhotobook = (day) => {
      console.log(day)
      let list = []
      if (!$utils.isEmpty(day)){
        list = dayList.value.filter(value => value.p_day === day)
        detList.value = list
        active.value = true
      }
    }

    return {activeAlbum, active, date, openPhotobook,evtList,detList}
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
  height: auto;
}

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