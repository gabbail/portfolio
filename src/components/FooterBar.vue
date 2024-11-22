<template>
  <v-footer color="primary" app class="text-center d-flex flex-column">
    <div>
      <v-btn
        href="https://www.linkedin.com/in/gabriel-baillargeon-0b31ab22a/"
        target="_blank"
        icon="mdi-linkedin"
        class="mx-4"
        variant="text"
      ></v-btn>
      <v-btn
        href="https://github.com/gabbail"
        target="_blan"
        icon="mdi-github"
        class="mx-4"
        variant="text"
      ></v-btn>
      <v-btn
        href="https://leetcode.com/u/gabbail"
        target="blank"
        icon="mdi-xml"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">© 2024 Gabriel Baillargeon. All rights reserved.</div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>

<script>
export default {};
</script>
