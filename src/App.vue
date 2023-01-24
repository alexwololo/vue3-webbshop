<template>
  <div>
    <app-header />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/MainHeader.vue";
import Footer from "./components/MainFooter.vue";

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
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #42b983;
  background: crimson;
}
</style>
