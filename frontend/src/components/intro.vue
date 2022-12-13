<template>
  <transition name="slide-fade">
    <div class="content">
      <div class="custom_main">
        <div class="tilte_custom">
          <div style="position: relative; margin-right:40%; font-size: 7vh; color: gold">고은부터</div>
          <div style="position: relative; margin-left: 40%; font-size: 7vh">성철까지</div>
          <div class="number-custom-main">
            <div class="today" style="position: relative">
              <div>
                <number class="number" :from="0" :to="2022" :duration="2"/>
                <span class="number-gubn">년</span>
                <number class="number" :from="0" :to="12" :duration="2"/>
                <span class="number-gubn">월</span>
                <number class="number" :from="0" :to="26" :duration="2"/>
                <span class="number-gubn">일</span>
              </div>
            </div>
            <div class="button-custom">
              <q-btn :loading="loading" @click="simulateProgress(3)" class="btn-loading-custom">
                <div style="font-size: 1.5rem">보러가기</div>
                <template v-slot:loading >
                  <q-spinner-hourglass class="on-left" size="8vh" style="margin-left: 3vw"/>
                  <div style="font-size: 1rem; margin-left: 10px" >Loading...</div>
                </template>
              </q-btn>
            </div>
          </div>
        </div>

        <!--        <div class="characterImg-custom">-->
        <!--          <v-img-->
        <!--              :src="characterImg"-->
        <!--              height="15vh"-->
        <!--              width="15vh"-->
        <!--          ></v-img>-->
        <!--        </div>-->
      </div>

    </div>
  </transition>
</template>


<script>

import {cheol} from "@/plugins/cheol";
import {computed, ref} from "vue";

export default {
  name: "intro",
  setup() {
    const clickImg = require('../assets/images/logoPage1.png')
    const characterImg = require('../assets/images/logoPage2.png')
    const {store} = cheol()

    const loading = ref(
        false
    )
    const progress = ref(false)

    function simulateProgress() {
      // we set loading state
      loading.value = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value = false
      }, 3000)
    }

    store.commit('PDS/setCls', {test: '123'},)

    const cls = computed(() => store.getters['PDS/getCls'])

    const clsTest = () => {
      console.log(cls.value)
    }
    return {
      clickImg, clsTest, characterImg, progress, simulateProgress, loading
    }
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

.content {
  height: 60vh;
}

.btn-loading-custom {
  width: 15vh;
  font-size: 3vh;
}


.number-custom-main {
  position: relative;
}

.custom_main .tilte_custom {
  position: relative;
  width: 100%;
  height: 15rem;
  margin-top: 10%;
  font-size: 100%;
  font-family: 'KOTRAHOPE';
  text-align: center;
  color: saddlebrown;
}

.button-custom {
  margin-top: 10vh;
  font-family: 'FlowerSalt';
  color: whitesmoke;
}

.today {
  margin: auto;
  width: 100%;
  text-align: center;
  padding-top: 7VH;
}

.number {
  letter-spacing: 2px;
  background: bottom;
  padding-left: 10px;
  margin-left: 15px;
  border-radius: 10px;
  font-size: 3.5VH;
  font-family: 'KOTRAHOPE';
  color: whitesmoke;
}


.number-gubn {
  font-size: 3VH;
  font-family: 'KOTRAHOPE';
  color: whitesmoke;
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
</style>