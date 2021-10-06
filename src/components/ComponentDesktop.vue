<template>
  <div class="view-links-bio">
    <center>
      <v-avatar size="120">
        <v-img src="../assets/avatar.jpeg"></v-img>
      </v-avatar>
      <div class="buttons">
        <strong class="titulo">@Jordan Elizeu</strong>

        <v-btn class="button-style" color="#39e09b" elevation="5" large>
          <a href="https://github.com/JordanElizeu" target="_blank">
            <div>
              <v-avatar size="27"
                ><v-img class="iconButton" src="../assets/github.png"
              /></v-avatar>
              <b class="link">GitHub</b>
            </div>
          </a>
        </v-btn>
        <v-btn class="button-style" color="#39e09b" elevation="5" large>
          <v-avatar size="27"
            ><v-img class="iconButton" src="../assets/linkedin.png"
          /></v-avatar>
          <b class="link">Linkedin</b>
        </v-btn>
        <v-btn class="button-style" color="#39e09b" elevation="5" large>
          <v-avatar size="27"
            ><v-img class="iconButton" src="../assets/portfolio.png"
          /></v-avatar>
          <b class="link">Portfolio</b>
        </v-btn>
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
  width: 100v;
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
}
.link {
  margin-top: 5px;
  margin-left: 10px;
}
.view-links-bio a {
  text-decoration: none;
  text-decoration-color: black;
}
</style>
