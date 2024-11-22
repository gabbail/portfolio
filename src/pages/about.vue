<template>
  <div class="background-image"></div>
  <v-container class="d-flex flex-column align-center py-10" fluid>
    <v-card elevation="3" max-width="800" class="pa-4 mb-8 text-center overlay">
      <v-avatar size="120" class="mx-auto">
        <v-img alt="John" src="../assets/images/Me.jfif"></v-img>
      </v-avatar>
      <v-card-title class="text-h4 mt-4">Gabriel Baillargeon</v-card-title>
      <v-card-subtitle
        >Web Developer | Game Enthusiast | AI Explorer</v-card-subtitle
      >
      <v-card-text>
        Hi, I'm Gabriel Baillargeon, a recent university graduate (May 2024)
        with a passion for creating engaging games in my free time.
        Professionally, I work as a web developer, crafting modern and
        user-friendly web applications. I'm currently seeking new opportunities
        to grow and make an impact in the tech industry!
      </v-card-text>
    </v-card>

    <v-card elevation="3" max-width="800" class="pa-4 overlay">
      <v-card-title class="text-h5">Skills & Interests</v-card-title>
      <v-divider></v-divider>
      <v-row class="mt-4">
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-code-tags</v-icon>
          <div class="text-h6 mt-2">Web Development</div>
          <p>Experienced in Vue.js, Java, and modern web technologies.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-gamepad</v-icon>
          <div class="text-h6 mt-2">Game Development</div>
          <p>Skilled in Unity with C# for creating interactive games.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-brain</v-icon>
          <div class="text-h6 mt-2">AI</div>
          <p>
            Familiar with AI algorithms like KNN and Bayesian classification for
            data analysis, implemented in Python.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-database</v-icon>
          <div class="text-h6 mt-2">Databases</div>
          <p>Experienced with SQL and NoSQL (MongoDB) for data management.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-robot</v-icon>
          <div class="text-h6 mt-2">Data Structures</div>
          <p>
            Familiar with C++ data structures like linked lists, stacks, and
            queues.
          </p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-check-circle</v-icon>
          <div class="text-h6 mt-2">Testing</div>
          <p>
            Experienced in unit testing and integration testing for robust
            software.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-puzzle</v-icon>
          <div class="text-h6 mt-2">Design Patterns</div>
          <p>Familiar with patterns like Strategy, Observer, and more.</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.v-avatar {
  border: 2px solid #1976d2;
}

.text-center p {
  color: #555;
  font-size: 14px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/images/code1.jpg") no-repeat center center;
  background-size: cover;
  z-index: 1;
}

.overlay {
  position: relative;
  z-index: 2;
}
</style>
