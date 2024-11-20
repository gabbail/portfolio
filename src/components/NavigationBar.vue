<template>
  <v-app-bar
    floating
    flat
    :style="{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }"
  >
    <v-toolbar-title class="name">Gabriel Baillargeon</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text @click="goToHome">Home</v-btn>
    <v-btn text @click="goToAbout">About</v-btn>
    <v-btn text @click="goToProjects">Projects</v-btn>
    <v-btn text @click="goToContact">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToProjects() {
      this.$router.push({ name: "projects" });
    },
    goToContact() {
      this.$router.push({ name: "contact" });
    },
    goToAbout() {
      this.$router.push({ name: "about" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap");

.name {
  font-family: "Tangerine", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  line-height: 50px;
}
</style>
