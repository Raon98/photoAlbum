<template>
  <v-card
      color="white"
      flat
      height="auto"
      rounded="0"
  >
    <v-toolbar class="toolbar_custom" density="compact" >

      <div class="toolbar_title_custom"> 안녕하세요</div>
      <v-spacer></v-spacer>

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-magnify</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-heart</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-dots-vertical</v-icon>-->
<!--      </v-btn>-->
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "toolbar"
}
</script>

<style scoped>
.toolbar_custom { height: auto; width: 100%; background: white; margin-top:15px; padding-top: 15px; padding-bottom: 15px; color: black;
}
.toolbar_title_custom {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 16px;
  padding-top: 5px;
  font-size: 24px;
}
</style>