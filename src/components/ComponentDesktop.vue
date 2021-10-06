<template>
  <div class="view-links-bio">
    <center>
      <v-avatar size="150">
        <v-img src="../assets/avatar.jpeg"></v-img>
      </v-avatar>
      <div class="buttons">
        <p class="titulo">@Jordan Elizeu</p>

        <a href="https://github.com/JordanElizeu" target="_blank">
          <v-btn class="button-style" color="#39e09b" elevation="5" large>
            <div>
              <v-avatar class="iconButton" size="27"
                ><v-img src="../assets/github.png"
              /></v-avatar>
              <b class="link">GitHub</b>
            </div>
          </v-btn>
        </a>
        <a href="https://www.linkedin.com/in/jordanelizeu/" target="_blank">
          <v-btn class="button-style" color="#39e09b" elevation="5" large>
            <v-avatar class="iconButton" size="27"
              ><v-img src="../assets/linkedin.png"
            /></v-avatar>
            <b class="link">Linkedin</b>
          </v-btn>
        </a>
        <a target="_blank">
          <v-btn class="button-style" color="#39e09b" elevation="5" large>
            <v-avatar class="iconButton" size="27"
              ><v-img src="../assets/portfolio.png"
            /></v-avatar>
            <b class="link">Portfolio</b>
          </v-btn>
        </a>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "ComponentDesktop",
  data() {
    return {};
  },
};
</script>

<style scoped>
.view-links-bio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.button-style {
  width: 100%;
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.titulo {
  margin-top: 10px;
  font: Sans-serif;
}
.link {
  margin-top: 5px;
  margin-left: 10px;
  font: Sans-serif;
}
.view-links-bio a {
  text-decoration: none;
  width: 100v;
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
