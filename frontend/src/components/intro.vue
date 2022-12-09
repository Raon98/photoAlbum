<template>
  <div class="content">
    <div class="custom_main" >
      <div class="tilte_custom">
        <div style="position: relative; margin-right:40%; font-size: 50px; color: gold">고은부터</div>
        <div style="position: relative; margin-left: 40%; font-size: 50px">성철까지</div>
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
        <button  @click="mainMove()">보러가기</button>
      </div>
    </div>
  </div>
</template>


<script>

import {cheol} from "@/plugins/cheol";

export default {
  name: "intro",
  setup() {
    const {router} = cheol()

    const mainMove = () => {
      router.push('photoSlide')
    }

    return {mainMove
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
  height: 100%;
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
  font-size: 20px;
  left: 75%;
  top: 80VH;
  padding: 5px;
  margin: 5px;
  font-family: 'KOTRAHOPE';
}
@font-face {
  font-family: 'KOTRAHOPE';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.today {
  margin: auto;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-left: 30%;
}

.number {
  letter-spacing: 2px;
  background: bottom;
  padding-left: 10px;
  margin-left: 15px;
  border-radius: 10px;
  font-size: 25px;
  font-family: 'KOTRAHOPE';
  color: whitesmoke;
}


.number-gubn {
  font-size: 20px;
  font-family: 'KOTRAHOPE';
  color: whitesmoke;
}
</style>