<template>
  <span>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, dolor? Harum corrupti
      nemo delectus omnis fugit optio magnam. Voluptates fugiat quod laboriosam laborum ipsum odit
      dolor nisi doloribus vitae quaerat.
    </p>
  </span>
</template>

<script>
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

export default {
  name: "App",
  components: {
    HomeView,
    AboutView,
  },
  data() {
    return {
      current: "home",
    };
  },
  router: {
    routes: [
      { path: "/", component: HomeView },
      { path: "/about", component: AboutView },
    ],
  },
};
</script>
