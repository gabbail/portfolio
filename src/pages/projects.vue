<template>
  <div class="background-image"></div>
  <v-container class="pa-4 overlay">
    <v-row>
      <v-col cols="12" md="4">
        <v-card :height="'auto'" class="mb-4">
          <v-carousel height="300">
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-h6">Arch Linux Setup</v-card-title>
          <v-card-subtitle
            >Development Environment with Arch Linux</v-card-subtitle
          >
          <v-card-text>
            <p>
              For this project, I decided to transition from Windows to Arch
              Linux to immerse myself in a more developer-friendly environment
              and improve my overall productivity. The goal was to streamline my
              workflow, optimize my system, and deepen my familiarity with
              Linux-based development.<br /><br />

              I began by installing Arch Linux, a rolling-release distribution
              known for its minimalism and flexibility. The installation process
              itself was an opportunity to learn more about Linux systems and
              the command line. Once the system was up and running, I set up the
              i3 window manager for a dynamic and efficient tiling window setup,
              enabling easy multitasking and improved workspace organization.<br /><br />

              To enhance the user interface, I added and customized Polybar,
              creating a sleek status bar that displays system information and
              allows for quick access to essential applications. One of the core
              changes was configuring VIM as my text editor. I set it up with
              LSPs (Language Server Protocols) using Mason to speed up coding
              tasks with autocompletion and real-time error checking.<br /><br />

              For the terminal, I chose Alacritty for its speed and smooth
              rendering, and customized it with a custom Zsh configuration
              (zshrc) and Starship prompt for a more productive and visually
              appealing shell environment. This project was an excellent
              exercise in system configuration, learning the nuances of Arch
              Linux, and customizing tools to match my workflow and boost my
              development speed.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card :height="'auto'" class="mb-4">
          <v-carousel height="300">
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-h6">IrisInsight</v-card-title>
          <v-card-subtitle
            >A Machine Learning Application Built from Scratch Using
            Python</v-card-subtitle
          >
          <v-card-text>
            <p>
              IrisInsight is a school project and a machine learning application
              for classifying iris flower species using a custom-built K-Nearest
              Neighbors (KNN) algorithm, implemented entirely from scratch
              without any external machine learning libraries. This project
              provides an educational exploration of AI principles and
              demonstrates the fundamentals of KNN through the well-known Iris
              dataset. <br /><br />

              The goal was to gain hands-on experience with algorithm design and
              data classification while understanding the underlying mathematics
              behind KNN. By implementing everything from scratch, I was able to
              gain a deeper understanding of machine learning concepts and gain
              valuable experience working with real-world datasets.
            </p>

            <br /><br />

            <a href="https://github.com/gabbail/irisinsight" target="_blank"
              >View the IrisInsight project here</a
            >
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card :height="'auto'" class="mb-4">
          <v-carousel height="300">
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-h6">PowerPongArena</v-card-title>
          <v-card-subtitle
            >Exciting New Game Modes Developed in Unity</v-card-subtitle
          >
          <v-card-text>
            <p>
              Power Pong Arena is an exciting twist on the classic Pong game,
              developed in Unity. It brings new energy to Pong with two game
              modes, Classic and SpeedRush, offering an engaging experience for
              both solo players and those playing with friends.
            </p>
            <br /><br />

            <p>
              <strong>Features:</strong><br /><br />
              <strong>Game Modes:</strong> Play solo or with friends in Classic
              or SpeedRush.<br /><br />
              <strong>Classic Mode:</strong> Enjoy the timeless classic Pong
              game with the familiar gameplay mechanics.<br /><br />
              <strong>SpeedRush Mode:</strong> In this intense, fast-paced game
              mode, each time a player hits the ball, it accelerates, pushing
              both players to react faster and faster. This mode offers an
              exhilarating challenge for those seeking quick reflexes and a
              competitive edge.
            </p>

            <br /><br />

            <a href="https://github.com/gabbail/powerpongarena" target="_blank"
              >View the PowerPongArena project here</a
            >
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card :height="'auto'" class="mb-4">
          <v-carousel height="300">
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-h6">ShopSync</v-card-title>
          <v-card-subtitle
            >Project for Unit Testing and Port-Adapter
            Architecture</v-card-subtitle
          >
          <v-card-text>
            <p>
              ShopSync is an e-commerce command-line interface (CLI) application
              that allows users to manage a wide range of products. This project
              was created primarily as a way to practice key concepts in Java,
              particularly focusing on unit testing and applying the Port and
              Adapter architecture pattern.
            </p>
            <br /><br />

            <p>
              The application allows users to manage products and inventory
              through a user-friendly CLI interface. The goal of this project
              was to deepen my understanding of writing unit tests, especially
              in the context of clean architecture, and to implement the Port
              and Adapter pattern to ensure maintainable and flexible code.
              Through this, I gained hands-on experience in designing robust,
              scalable software and improving the quality of my code through
              testing.
            </p>

            <br /><br />

            <a href="https://github.com/gabbail/shopsync" target="_blank"
              >View the ShopSync project here</a
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
