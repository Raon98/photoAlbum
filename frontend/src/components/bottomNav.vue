<template>
  <div class="btn-custom">
    <q-btn push color="teal"  round icon="local_florist" size="2.5VH" style="background: white" />
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "bottomNav",
  setup () {
    const valueDt = ref(1)

    return {
      valueDt
    }
  }
}
</script>

<style scoped>
.btn-custom {
  position: relative;
  margin-left: 20VH;
  margin-top: -3VH;
  text-align: right;
  margin-top: 0%;

}
</style>s