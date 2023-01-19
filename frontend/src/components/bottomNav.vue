<template>
  <div class="btn-custom" v-if="mainFlag">
    <q-btn push color="teal"  round icon="cloud_upload" size="2.5VH" style="background: white"  @click="photoLibraryOpen()"/>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {cheol} from "@/plugins/cheol";

export default {
  name: "bottomNav",
  setup (props, {emit}) {
    const {router,store,$utils,$api} = cheol()
    const valueDt = ref(1)
    const mainFlag = computed(()=>store.getters["PDS/getViewFlag"])

    const photoLibraryOpen= () => {
      //store.commit('PDS/setAlbumFlag', true)
    }
    return {
      valueDt,photoLibraryOpen,mainFlag,$utils
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