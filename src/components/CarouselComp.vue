<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="product in randomProducts" :key="product.id">
      <div class="flex-container">
        <img class="flex-item" :src="product.thumbnail" alt="bild" />
        <h3 class="flex-item">{{ product.title }}</h3>
        <p class="flex-item">{{ product.price }}kr</p>
      </div>
    </div>
  </a-carousel>
</template>

<script>
import api from "./api";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  data() {
    return {
      products: [],
      randomProducts: [],
    };
  },
  mounted() {
    this.getRandomProducts();
  },
  methods: {
    async getRandomProducts() {
      this.products = await api.getProducts();
      this.randomProducts = this.products.sort(() => Math.random() - 0.5).slice(0, 3);
    },
  },
});
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.flex-item {
  flex: 1;
  align-self: center;
  color: black;
  padding: 0;
  border: 0;
  align-items: center;
  font-size: 24px;
  color: rgb(255, 255, 255);
  margin: 0;
}

.flex-item:first-child {
  /* flex: 2; */
  margin-left: 2rem;
}

img {
  border-radius: 20px;
  height: 150px;
  height: 150px;
  /* max-width: 150px;
  max-height: 150px; */
  object-fit: cover;
}
</style>
