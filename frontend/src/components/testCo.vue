<template>
  테스트
  <div>테스트페이지입니다.</div>
  <button @click="openImg">이미지 오픈테스트</button>
  <a href="javascript:void(0)" v-if="openTF"><img src = "@/assets/test.jpg" /></a>
</template>

<script>
import {ref} from "vue";

export default {
  name: "testCo",
  setup () {
    const openTF = ref(false)
    const openImg = (e) => {
      openTF.value = true
      console.log("클릭이벤트 확인" + e)
    }
    return {openImg , openTF}
  }
}
</script>

<style scoped>

</style>