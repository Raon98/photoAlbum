<template>
  <v-bottom-navigation
    :value="valueDt"
    color="teal"
    grow
>
<!--    <v-btn>-->
<!--      <span>Recents</span>-->

<!--      <v-icon>mdi-history</v-icon>-->
<!--    </v-btn>-->

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

<!--    <v-btn>-->
<!--      <span>Nearby</span>-->

<!--      <v-icon>mdi-map-marker</v-icon>-->
<!--    </v-btn>-->
  </v-bottom-navigation>
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

</style>