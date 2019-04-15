<template>
  <div id="app">
      <v-toolbar app color="brown darken-4" dark>
          <v-btn flat >Home</v-btn>
          <v-btn :to="'/input'">Input</v-btn>
          <v-btn :to="'/output'">Output</v-btn>
          <v-btn :to="'/results'"> Results </v-btn>
      </v-toolbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { store } from './store/store'
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
