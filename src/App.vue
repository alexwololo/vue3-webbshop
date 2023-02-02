<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import Header from "./views/HeaderView.vue";
import Footer from "./views/FooterView.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
