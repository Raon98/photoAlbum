<template>
  <div class="btn-custom">
    <q-btn push color="teal"  round icon="local_florist" size="2.5VH" style="background: white"  @click="movePage()"/>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {cheol} from "@/plugins/cheol";

export default {
  name: "bottomNav",
  setup () {
    const valueDt = ref(1)
    const {router} = cheol()
    const movePage = () => {
      router.push('photoSlide')
    }
    return {
      valueDt,movePage
    }
  }
}
</script>

<style scoped>
.btn-custom {
  position: absolute;
  left: 75vW;
  bottom: 22vh;
  margin-top: 0%;

}
</style>s