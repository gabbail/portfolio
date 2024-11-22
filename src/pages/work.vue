<template>
  <div class="background-image"></div>
  <v-container class="pa-4 overlay">
    <v-row>
      <v-col cols="12" md="4">
        <v-card :height="'auto'" class="mb-4">
          <v-carousel height="300">
            <v-carousel-item
              src="../assets/images/pulsar1.png"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/images/pulsar2.png"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/images/pulsar3.png"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-h6">Pulsar</v-card-title>
          <v-card-subtitle
            >Front-End Web Development Internship</v-card-subtitle
          >
          <v-card-text>
            <p>
              I had an internship at Direction Des technologies de l'information
              at ULAVAL and worked in the research sector. I worked there as a
              junior front-end developer during the summer.
            </p>
            <br /><br />
            <p>
              My role focused on using Vue.js to build interactive and
              responsive web components. I worked in an Agile environment
              following Scrum methodology and actively participated in the
              development of the Pulsar site.
            </p>

            <br /><br />

            <a href="https://pulsar.ca/en" target="_blank"
              >View the Pulsar project here</a
            >
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card :height="'auto'" class="mb-4">
          <v-carousel height="300">
            <v-carousel-item
              src="../assets/images/valeria1.png"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/images/valeria2.png"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/images/valeria3.png"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-h6">Valeria</v-card-title>
          <v-card-subtitle
            >Full-Stack Web Development Internship</v-card-subtitle
          >
          <v-card-text>
            <p>
              My second internship was at Direction Des technologies de
              l'information at ULAVAL in the research sector. During this time,
              I worked as a full-stack web developer on the Valeria site.
            </p>
            <br /><br />
            <p>
              My responsibilities included developing both front-end and
              back-end components using technologies such as Vue.js, Google
              Analytics, Java, Keycloak, and Postman. This experience allowed me
              to deepen my expertise in creating robust web applications and
              working with modern development tools.
            </p>
            <br /><br />

            <a href="https://valeria.science/accueil" target="_blank"
              >View the Pulsar project here</a
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.v-card {
  display: flex;
  flex-direction: column;
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
