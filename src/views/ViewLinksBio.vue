<template>
  <div class="view-links-bio">
    <center>
      <v-avatar size="150">
        <v-img src="../assets/avatar.jpeg"></v-img>
      </v-avatar>
        <h4>@Jordan Elizeu</h4>
        <v-btn class="button-style" block color="#39e09b" elevation="5" large outlined></v-btn>
        <v-btn class="button-style" block color="#39e09b" elevation="5" large outlined></v-btn>
        <v-btn class="button-style" block color="#39e09b" elevation="5" large outlined></v-btn>
    </center>
  </div>
</template>

<script>
export default {
  name: "VieLinksBio",
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.view-links-bio{
    display: flex;
    flex-direction: column;
}
</style>
