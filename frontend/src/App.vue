<template>
  <v-app style="overflow-y: hidden; background: #bcaaa4">
    <!--    <v-navigation-drawer app>-->
    <!--      &lt;!&ndash; &ndash;&gt;-->
    <!--    </v-navigation-drawer>-->

    <v-app-bar style="background: beige; height: 7VH;" >
      <!--        <toolbar style="position: relative;"></toolbar>-->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="main_custom" style="overflow:hidden; width: 100%; height: 87VH;">
      <div class="custom_top">
      </div>
      <!-- Provides the application the proper gutter -->
      <v-container fluid style="width: 100%;height: 75VH;">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer style="background: teal"></v-footer>
  </v-app>

</template>

<script>

import BottomNav from "@/components/bottomNav";
import Toolbar from "@/components/toolbar";
import Intro from "@/components/intro";

export default {
  name: 'App',
  components: {Intro, Toolbar, BottomNav},
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
.custom_top {
  position: relative;
  margin-bottom: 5VH;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%
}

html {
  height: 100%;
}

.main_custom {
  padding-bottom: 0px !important;
}


</style>
