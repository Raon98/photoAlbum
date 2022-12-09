<template>
  <v-app style="overflow-y: hidden; background: #bcaaa4">
    <!--    <v-navigation-drawer app>-->
    <!--      &lt;!&ndash; &ndash;&gt;-->
    <!--    </v-navigation-drawer>-->

    <v-app-bar style="background: beige">
      <!--        <toolbar style="position: relative;"></toolbar>-->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="main_custom" style="overflow:hidden;">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <photoSlide/>
      </v-container>
      <bottom-nav/>
    </v-main>
    <v-footer style="height: 10px; background: teal" ></v-footer>
  </v-app>
</template>

<script>

import BottomNav from "@/components/bottomNav";
import Toolbar from "@/components/toolbar";
import photoSlide from "@/components/photoSlide";
export default {
  name: 'appRoot',
  components: {Toolbar, BottomNav,photoSlide},
  data: () => ({
    //
  }),
}
</script>
<style>
.form_custom {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%
}

form_custom .div .scroll {
  overflow: hidden !important;
  touch-action: none;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%
}
html{
  height: 100%;
}
.main_custom{
  padding-bottom : 0px !important;
}


</style>
