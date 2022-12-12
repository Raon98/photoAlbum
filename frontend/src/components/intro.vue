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
          </div>
        </div>
        <div class="button-custom">
          <a href="javascript:void(0)" @click="clsTest">
            <v-img
                :src="clickImg"
                height="7vh"
                width="7vh"

            ></v-img>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>

import {cheol} from "@/plugins/cheol";
import {computed} from "vue";

export default {
  name: "intro",
  setup() {
    const clickImg = require('../assets/images/logoPage.png')
    const {store} = cheol()
    store.commit('PDS/setCls', {test : '123'},)

    const cls = computed(() => store.getters['PDS/getCls'])

    const clsTest = () => {
      console.log(cls.value)
    }
    return {
      clickImg,clsTest
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

.sign-custom {
  background: whitesmoke;
  padding: 10px;
  width: 80% !important;
  height: 30% !important;
  position: center;
  border-radius: 10px;
}

.sign-custom_main {
  text-align: center;
}

.custom_main {
}

.number-custom-main {
  position: relative;
  width: 100%;
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
  position: absolute;
  font-size: 3vh;
  top: 63vh;
  padding: 5px;
  margin: 5px 5px 5px 30vh;
  font-family: 'FlowerSalt';
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

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}
</style>