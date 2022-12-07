<template>
  <v-app>
<!--    <v-navigation-drawer app>-->
<!--      &lt;!&ndash; &ndash;&gt;-->
<!--    </v-navigation-drawer>-->

  <toolbar></toolbar>


    <!-- Sizes your content based upon application components -->
    <v-main>
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
