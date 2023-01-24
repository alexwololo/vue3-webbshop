<template>
  <a-layout>
    <a-layout-header>
      <a-menu mode="horizontal" theme="dark" :default-selected-keys="['home']">
        <a-menu-item key="home"
          ><router-link to="/" active-class="active-menu-item">Home</router-link>
        </a-menu-item>
        <a-menu-item key="contact">
          <router-link :to="{ name: 'about' }">About</router-link>
        </a-menu-item>
        <a-menu-item>
          <div>
            <a-input placeholder="Sök..." /> <a-button type="secondary">Sök</a-button>
          </div></a-menu-item
        >
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>

<style scoped>
.header {
  background-color: #0055a4;
  color: #fff;
  padding: 10px 0;
}

.header-menu {
  line-height: 64px;
}

.header-menu a {
  color: #fff;
}
.active-menu-item {
  background-color: #0055a4;
}
.router-link-exact-active {
  color: #42b983;
  background: crimson;
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },

  name: "MainHeader",
  data() {
    return {
      searchValue: "test",
    };
  },
};
</script>
