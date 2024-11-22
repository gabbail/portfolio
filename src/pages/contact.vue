<template>
  <div class="background-image"></div>
  <v-container class="d-flex align-center justify-center content" fluid>
    <v-card elevation="3" max-width="600" class="pa-4 overlay">
      <v-card-title class="text-h5 text-center"
        >Contact Information</v-card-title
      >
      <v-divider></v-divider>
      <v-card-text class="text-center">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="primary">mdi-phone</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle>819-290-9794</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="primary">mdi-email</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle
                >gabrielbaillargeonsd@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="primary">mdi-map-marker</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>Quebec, Canada</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
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

.content {
  height: 100%;
  position: relative;
}
</style>
