<template>
  <v-card
      color="white"
      flat
      height="20%"
      rounded="0"
  >
    <v-toolbar class="toolbar_custom" density="compact">

      <v-toolbar-title>PhotoBook</v-toolbar-title>

      <v-spacer></v-spacer>

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-magnify</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-heart</v-icon>-->
<!--      </v-btn>-->

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "toolbar"
}
</script>

<style scoped>
.toolbar_custom { height: 30%; background: white; padding-top: 15px; padding-left: 15px ; color: black;
}
</style>