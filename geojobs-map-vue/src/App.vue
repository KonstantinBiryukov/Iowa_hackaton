<template>
  <v-app id="app">
    <Main-menu/>
    <!--<v-app-bar app>-->
      <!--<v-toolbar-title class="headline text-uppercase">-->
        <!--<span class="font-weight-light">Geo Jobs</span>-->
      <!--</v-toolbar-title>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn-->
        <!--text-->
        <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
        <!--target="_blank"-->
      <!--&gt;-->
        <!--<span class="mr-2">Latest Release</span>-->
      <!--</v-btn>-->
    <!--</v-app-bar>-->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!--<v-content>-->
      <Map/>
    <!--</v-content>-->
  </v-app>
</template>

<script>
  import MainMenu from './components/MainMenu.vue';
  import Map from './components/Map.vue'

  export default {
    name: "app",
    components: {
      MainMenu,
      Map
    }
  }
</script>

<style>
  #app {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>
