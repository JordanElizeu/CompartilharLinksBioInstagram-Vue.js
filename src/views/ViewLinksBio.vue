<template>
  <div class="view-links-bio">
      <div v-if="typeUser.is_mobile === true">
          <ComponentMob/>
      </div>
      <div v-else>
          <ComponentDesktop/>
      </div>
  </div>
</template>

<script>
import ComponentMob from "../components/ComponentMob.vue";
import ComponentDesktop from "../components/ComponentDesktop.vue";

export default {
  name: "VieLinksBio",
  data() {
    return {
        typeUser:[]
    };
  },
  created(){
      fetch('http://wurfl.io/wurfl.js')
      .then((resultado) => resultado.json())
      .then((json) =>  {
          this.typeUser = json;
      })
  },
  components: {
     ComponentMob,
     ComponentDesktop
  },
};
</script>
