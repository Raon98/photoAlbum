<template>
  <div class="text-center section">
    <h2 class="h2">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p>
    <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
                v-for="attr in attributes"
                :key="attr.key"
                class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                :class="attr.customData.class"
                style="position: absolute;width: 90%; height: 90%; padding: 5px;
"
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

    return {dateOpen, start, type, typeOptions, masks, attributes}
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

.custom-calendar.vc-container {
  border-radius: 0;
  width: 100%;
}

.custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}

.custom-calendar.vc-container .vc-weeks {
  padding: 0;
}

.custom-calendar.vc-container .vc-weekday {
  background-color: #f8fafc;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  padding: 5px 0;
}

.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  min-height: 90px;
  min-width: 90px;
  overflow: auto;
  background-color: white;
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
</style>