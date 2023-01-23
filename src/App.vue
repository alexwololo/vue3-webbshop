<template>
  <div>
    <app-header />
    <app-body />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/MainHeader.vue";
import Body from "./components/MainBody.vue";
import Footer from "./components/MainFooter.vue";

export default {
  components: {
    "app-header": Header,
    "app-body": Body,
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
</style>
