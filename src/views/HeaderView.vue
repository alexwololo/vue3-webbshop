<template>
  <div :style="{ color: 'red', backgroundColor: 'aqua' }">hellooo</div>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />

      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item
          ><img alt="Vue logo" src="../assets/logo.png" class="small-logo"
        /></a-menu-item>
        <a-menu-item class="testU" :style="{ color: 'grey' }" key="100"
          ><CheckOutlined /> Fri frakt</a-menu-item
        >
        <a-menu-item :style="{ color: 'grey' }" key="101"
          ><CheckOutlined /> 30 dagars öppet köp</a-menu-item
        >
        <!-- <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item>
        <a-menu-item></a-menu-item> -->
        <a-menu-item :style="{ color: 'white' }" key="1"><UserOutlined /> Min sida</a-menu-item>
        <a-menu-item :style="{ color: 'white' }" key="2"
          ><ShoppingCartOutlined /> Kundvagn
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>

<script>
import { CheckOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons-vue";
export default {
  name: "HeaderView",
  components: {
    CheckOutlined,
    UserOutlined,
    ShoppingCartOutlined,
  },
};
</script>

<style>
.testU .a-menu-item {
  color: red;
  background-color: aqua;
}
.small-logo {
  max-width: 40px;
  max-height: 40px;
}
</style>
