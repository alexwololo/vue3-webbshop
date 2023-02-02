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
                <laptop-outlined />
                Teknik
              </span>
            </template>
            <a-menu-item key="1"><router-link to="/">Laptop</router-link></a-menu-item>
            <a-menu-item key="2">Mobiler</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <user-outlined />
                Mode
              </span>
            </template>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '200px' }"
        >
          <a-divider orientation="left"><h2>Kommande</h2></a-divider>
          <CarouselComp />

          <br />
          <br />

          <a-space direction="vertical">
            <a-typography-title :level="2">Om våra produkter</a-typography-title>
            <a-typography-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde quae possimus
              nulla expedita vel porro quam libero labore obcaecati dolores fuga sapiente
              voluptatibus cum ipsam neque asperiores dolorum magnam nam, debitis reprehenderit.
              Adipisci, suscipit quam mollitia beatae expedita voluptates maiores fugiat consequatur
              minus debitis fuga molestiae, accusamus illum architecto!</a-typography-text
            >
          </a-space>

          <br />
          <br />
          <br />

          <!-- visa olika komponenter beroende på vilken <a-menu-item> som väljs med hjälp av en växel  -->
          <template v-if="selectedKeys2[0] === '1'">
            <CardComp category="laptops" />
          </template>
          <template v-else-if="selectedKeys2[0] === '2'">
            <CardComp category="smartphones" />
          </template>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import CarouselComp from "../components/CarouselComp.vue";
import CardComp from "../components/CardComp.vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    CarouselComp,
    CardComp,
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  setup() {
    const activeCategory = ref("laptops");
    return {
      activeCategory,
      handleMenuClick(key) {
        activeCategory.value = key;
      },
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>

<style scoped>
a-space {
  margin: 1rem;
}
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
