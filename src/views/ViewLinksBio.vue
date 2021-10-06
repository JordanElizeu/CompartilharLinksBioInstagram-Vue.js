<template>
  <div class="view-links-bio">
    <div v-if="Detectar_Mobile()">
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
      typeUser: [],
    };
  },
  methods: {
    Detectar_Mobile() {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    ComponentMob,
    ComponentDesktop,
  },
};
</script>
