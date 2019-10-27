<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="center" :zoom="zoom"/>
</template>

<script>
  import Mapbox from "mapbox-gl";
  import "../../node_modules/mapbox-gl/dist/mapbox-gl.css"
  import { MglMap } from "vue-mapbox";

  export default {
    name: "Map",
    components: {
      MglMap
    },
    data() {
      return {
        // accessToken: "pk.eyJ1IjoibG9iZW5pY2hvdSIsImEiOiJjajdrb2czcDQwcHR5MnFycmhuZmo4eWwyIn0.nUf9dWGNVRnMApuhQ44VSw", // your access token. Needed if you using Mapbox maps
        accessToken: "pk.eyJ1Ijoia29uc3RhbnRpbmJpcml1a292IiwiYSI6ImNrMWsxYjc1bjBrdjQzZHBiNTlhbjBqdmwifQ.vAlGhe7KTCajh5VvGfMJow",
        mapStyle: "mapbox://styles/lobenichou/cjto9zfpj00jq1fs7gajbuaas?fresh=true", // your map style
        zoom: 3,
        center: [-90.1878, 38.6260]
      };
    },

    created() {
      // We need to set mapbox-gl library here in order to use it in template
      this.mapbox = Mapbox;
    }
  };
</script>

