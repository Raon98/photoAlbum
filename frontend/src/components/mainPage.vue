<template>
  <div>mainpage입니다.</div>
  <button @click="movePage('testCo')">클릭</button>
</template>

<script>
import {cheol} from "@/plugins/cheol";

export default {
  name: "mainPage",
  setup() {
    const {router} = cheol()

    const movePage = (name) => {
        router.push(name)
      console.log("name확인및 로그 확인" + name)
    }
    return {movePage}
  }
}
</script>

<style scoped>

</style>