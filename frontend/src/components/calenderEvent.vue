<template>
  <div class="text-center section">
    <h2 class="h2" style="font-family: 'KOTRAHOPE'">기록장</h2>
    <p class="text-lg font-medium text-gray-600 mb-6" style="font-family: 'KOTRAHOPE'; opacity: 40%;">
      Every love story is beautiful but ours is my favorite
    </p>
    <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden ">
          <span class="day-label text-m text-gray-900" style="height: 6VH;">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
                v-for="attr in attributes"
                :key="attr.key"
                class=" leading-tight rounded-sm p-1 mt-0 mb-1"
                :class="attr.customData.class"
                style="position: absolute;width: 90%; height: 90%; padding: 5px; text-align: center ; font-size: 1VW;"
                @click="detailPhoto(attr)"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
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
      {text: 'Day', value: 'day'},
      {text: 'Week', value: 'week'},
      {text: 'Month', value: 'month'},
    ])

    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const masks = ref({weekdays: 'WWW'})
    const attributes = ref([
      {
        key: 1,
        customData: {
          title: 'Lunch with mom.',
          class: 'bg-red-600 text-black',
        },
        dates: new Date(year, month, 1),
      },
      {
        key: 2,
        customData: {
          title: 'Take Noah to basketball practice',
          class: 'bg-blue-500 text-black',
        },
        dates: new Date(year, month, 2),
      },
    ])
    const detailPhoto = (item) => {
      console.log(item)
    }
    return {dateOpen, start, type, typeOptions, masks, attributes,detailPhoto}
  }
}
</script>

<style scoped>
.scrollbar {
  width: 0px;
}

.scrollbar-track {
  display: none;
}


.custom-calendar.vc-container .vc-weekday {
  background-color: #f8fafc;border-bottom: 1px solid #eaeaea;border-top: 1px solid #eaeaea;padding: 5px 0;
}

.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;text-align: left;min-height: 90px;min-width: 90px;overflow: auto;background-color: black;
}

.custom-calendar.vc-container .vc-day.weekday-1,
.custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}

.custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: 1px solid #b8c2cc;
}

.custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1 {
  border-bottom: 1px solid #b8c2cc;
}

.custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: 1px solid #b8c2cc;
}

.custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}

@font-face {
  font-family: 'KOTRAHOPE';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
.vc-day {
  min-height: 35VH !important;
}
</style>