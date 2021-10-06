<template>
  <div class="view-links-bio">
    <center>
      <h1>DESKTOP</h1>
      <v-avatar size="150">
        <v-img src="../assets/avatar.jpeg"></v-img>
      </v-avatar>
      <div class="buttons">
        <strong class="titulo">@Jordan Elizeu</strong>
        <v-btn class="button-style" color="#39e09b" elevation="5" large>
          <v-avatar size="27"
            ><v-img class="iconButton" src="../assets/github.png"
          /></v-avatar>
          <b>GitHub</b>
        </v-btn>
        <v-btn class="button-style" color="#39e09b" elevation="5" large>
          <v-avatar size="27"
            ><v-img class="iconButton" src="../assets/linkedin.png"
          /></v-avatar>
        </v-btn>
        <v-btn
          class="button-style"
          color="#39e09b"
          elevation="5"
          large
        >
          <v-avatar size="27"
            ><v-img class="iconButton" src="../assets/portfolio.png"
          /></v-avatar>
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
</style>
