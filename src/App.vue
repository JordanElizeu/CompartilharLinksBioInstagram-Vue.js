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
  }
}
</script>
