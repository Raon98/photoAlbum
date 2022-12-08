<template>
  <div class="btn-custom">
    <q-btn push color="primary" round icon="card_giftcard"  size="20px"/>
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
  margin-right: 20px;
  margin-left: 80%;
  text-align: right;
  margin-bottom: 15px;

}
</style>s