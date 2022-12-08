<template>
  <v-card
      color="white"
      flat
      height="auto"
      rounded="0"
  >
    <v-toolbar class="toolbar_custom" density="compact" >

      <div class="toolbar_title_custom"  >성철고은♡</div>
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

@font-face {
  font-family: 'KOTRAHOPE';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.toolbar_custom { height: auto; width: 100%; background: white; margin-top:15px; padding-top: 15px; padding-bottom: 15px; color: black;

}
.toolbar_title_custom {
  width: 100%;
  height: 100%;
  text-align: right;
  margin: 16px;
  padding-top: 5px;
  font-size: 15px;
  font-family: 'KOTRAHOPE'
}
</style>