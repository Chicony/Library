<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
@import "~bulma/css/bulma.css";

#app
{
  min-height: 100vh;
  background: linear-gradient(#4CA1AF, #2C3E50);
}
</style>
