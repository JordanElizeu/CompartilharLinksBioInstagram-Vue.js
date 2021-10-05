<template>
  <main id="app">
    <ActionBar/>
    <router-view/>
  </main>
</template>

<script>
import ActionBar from './components/ActionBar.vue'

export default {
  name: 'App',
  components:{
    ActionBar
  },
  methods: {
    detectarmob() {
      if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        return true;
      } else {
        return false;
      }
    },
  },
}
</script>
