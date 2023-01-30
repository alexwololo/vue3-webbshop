<template>
  <a-layout>
    <a-header>
      <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">About</router-link>
        </a-menu-item>
      </a-menu>
    </a-header>
    <a-content>
      <router-view />
    </a-content>
  </a-layout>
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
