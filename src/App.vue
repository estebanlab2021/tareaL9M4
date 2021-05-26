<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <cabecera />
  <padre />
  <hijo />
  <pie />
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Hijo from './components/Hijo.vue'
import Padre from './components/Padre.vue'
import Pie from './components/Pie.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Padre,
    Pie,
    Hijo
  }
}
</script>

<style>

</style>
