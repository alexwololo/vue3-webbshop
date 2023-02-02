<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />

      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item :style="{ background: '#001529' }">
          <img alt="Vue logo" src="../assets/logo.png" class="small-logo" /><router-link
            to="/"
          ></router-link>
        </a-menu-item>
        <a-menu-item class="testU" :style="{ color: 'grey', background: '#001529' }" key="100"
          ><CheckOutlined /> Fri frakt</a-menu-item
        >
        <a-menu-item :style="{ color: 'grey', background: '#001529' }" key="101"
          ><CheckOutlined /> 30 dagars öppet köp</a-menu-item
        >

        <a-menu-item :style="{ color: 'white' }" key="1" @click="showModal"
          ><UserOutlined /> Min sida</a-menu-item
        >
        <a-menu-item :style="{ color: 'white' }" key="2"
          ><ShoppingCartOutlined /> Kundvagn
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <ModalComp ref="modal" />
  </a-layout>
</template>

<script>
import { CheckOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons-vue";
import ModalComp from "../components/ModalComp.vue";
export default {
  name: "HeaderView",
  components: {
    CheckOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    ModalComp,
  },
  methods: {
    showModal() {
      this.$refs.modal.showModal();
    },
  },
};
</script>

<style>
.testU .a-menu-item {
  color: red;
  background-color: aqua;
}
.testU:hover {
  pointer-events: none;
}
.small-logo {
  max-width: 40px;
  max-height: 40px;
}
</style>
