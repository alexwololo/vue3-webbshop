<template>
  <div>
    <a-footer class="footer">
      <a-row type="flex" justify="center">
        <a-col xs="{24}">
          <p>Copyright © {{ currentYear }} webbshop.se</p>
        </a-col>
      </a-row>
    </a-footer>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

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

.body {
  padding: 20px 0;
}

.footer {
  background-color: #0055a4;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}
</style>
