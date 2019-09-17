<template>
  <div id='app'>
    <router-link to="/">
    <vs-button>Hello World</vs-button>
    </router-link>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
export default {
  name: 'App'
}
</script>

<style>
#app {
}
</style>
