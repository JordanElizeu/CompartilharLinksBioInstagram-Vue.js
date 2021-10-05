<template>
  <div class="view-links-bio">
    <center>
        <h1>DESKTOP</h1>
      <v-avatar size="150">
        <v-img src="../assets/avatar.jpeg"></v-img>
      </v-avatar>
        <h4>@Jordan Elizeu</h4>
        <div class="buttons">
        <v-btn class="button-style" color="#39e09b" elevation="5" large outlined></v-btn>
        <v-btn class="button-style" color="#39e09b" elevation="5"></v-btn>
        <v-btn class="button-style" color="#39e09b" elevation="5"></v-btn>
        </div>
    </center>
  </div>
</template>

<style scoped>

.view-links-bio{
    display: flex;
    flex-direction: column;
}
.button-style{
    width: 100v;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
}
.buttons{
    display: flex;
    flex-direction: column;
}
</style>