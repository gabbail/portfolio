<template>
  <v-app-bar floating flat>
    <v-toolbar-title class="name">Gabriel Baillargeon</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/about" text>About</v-btn>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">Projects</v-btn>
      </template>
      <v-list>
        <v-list-item to="/work">
          <v-list-item-title>Work</v-list-item-title>
        </v-list-item>
        <v-list-item to="/projects">
          <v-list-item-title>Personal</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn to="/contact" text>Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
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

.router-link {
  color: red !important; /* Customize the color */
  text-decoration: none; /* Optional: Remove underline */
}
</style>
