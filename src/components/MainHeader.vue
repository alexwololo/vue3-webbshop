<template>
  <a-layout>
    <a-layout-header>
      <a-menu mode="horizontal" theme="dark" :default-selected-keys="['home']">
        <a-menu-item key="home">
          <a-link to="/">Hem</a-link>
        </a-menu-item>
        <a-menu-item key="contact">
          <a-link to="/contact">Kontakt</a-link>
        </a-menu-item>
        <div>
          <a-input placeholder="Sök..." style="margin-right: 10px" v-model="searchValue" />
        </div>
        <a-button type="primary">Sök</a-button>
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
</style>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      searchValue: "test",
    };
  },
};
</script>
