<template>
  <v-carousel class="carousel-container" height="100hv" cycle hide-delimiters>
    <v-carousel-item v-for="(img, i) in imgs" :key="i">
      <v-img cover :src="img"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import code1 from "@/assets/images/code1.jpg";
import code2 from "@/assets/images/code2.jpg";
import code3 from "@/assets/images/code3.jpg";
import code4 from "@/assets/images/code4.jpg";
export default {
  data() {
    return {
      imgs: [code1, code2, code3, code4],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style scoped>
.carousel-container {
  height: 100vh; /* Ensures the container takes up the full viewport height */
  overflow: hidden; /* Prevents scrolling */
}
</style>
