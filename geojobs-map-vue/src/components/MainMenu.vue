<template>
  <div>
    <v-navigation-drawer app v-model="drawer" fixed>
      <v-list dense>
        <v-list-item class="router-menu" v-for="(item, i) in menuItems" :key="i" :to="item.route">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Geo Jobs</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true
      };
    },
    props: {
      source: String
    },
    computed: {
      menuItems() {
        return [{
          title: "Map",
          icon: "map",
          route: "/home"
        }, {
          title: "Settings",
          icon: "settings_applications",
          route: "/phonebook"

        }, {
          title: "About",
          icon: "info",
          route: "/about"
        }]
      }
    }
  }
</script>

<style>
  .router-menu a {
    text-decoration: none;
  }
</style>
