<template>
  <v-app class="form_custom">
    <!--    <v-navigation-drawer app>-->
    <!--      &lt;!&ndash; &ndash;&gt;-->
    <!--    </v-navigation-drawer>-->

    <toolbar></toolbar>


    <!-- Sizes your content based upon application components -->
    <v-main style="overflow:hidden;">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>

      </v-container>

    </v-main>

    <v-footer app>
      <bottom-nav/>
    </v-footer>

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
  overflow: hidden !important;
  touch-action: none;
}
form_custom .div .scroll {
  overflow: hidden !important;
  touch-action: none;
}
body {
  overflow: hidden;
  touch-action: none;
}
</style>
