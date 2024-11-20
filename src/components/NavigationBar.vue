<template>
  <v-app-bar app color="teal-darken-4">
    <v-toolbar-title>My Portfolio</v-toolbar-title>

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

<style scoped></style>
