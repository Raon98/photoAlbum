<template>
    <v-app style="overflow-y: hidden">
      <!--    <v-navigation-drawer app>-->
      <!--      &lt;!&ndash; &ndash;&gt;-->
      <!--    </v-navigation-drawer>-->

      <toolbar style="position: relative;"></toolbar>

      <!-- Sizes your content based upon application components -->
      <v-main class="main_custom" style="overflow:hidden;">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>

        </v-container>
        <bottom-nav/>
      </v-main>

    </v-app>
</template>

<script>

import BottomNav from "@/components/bottomNav";
import Toolbar from "@/components/toolbar";

export default {
  name: 'App',
  components: {Toolbar, BottomNav},
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
