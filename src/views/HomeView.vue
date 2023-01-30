<template>
  <a-layout>
    <a-layout>
      <a-layout-sider width="180" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ minHeight: '80px', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                Teknik
              </span>
            </template>
            <a-menu-item key="3"><router-link to="/">Laptop</router-link></a-menu-item>
            <a-menu-item key="2">Mobiler</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                Mode
                <router-link to="/about">About</router-link>
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '200px' }"
        >
          <a-divider orientation="left"><h2>Kampanjer</h2></a-divider>
          <!-- <VanillaCarouselComp /> -->
          <CarouselView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import CarouselView from "../components/CarouselComp.vue";
import VanillaCarouselComp from "../components/VanillaCarouselComp.vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    CarouselView,
    VanillaCarouselComp,
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>

<style scoped>
.layout-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
a-sub-menu {
  max-height: 20px; /* Justerar höjden här */
  overflow: hidden;
}
</style>
