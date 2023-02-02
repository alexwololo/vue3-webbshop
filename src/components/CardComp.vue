<!-- återanvändbar komp med props, här category props -->

<template>
  <div class="card-container">
    <a-card
      v-for="product in products"
      :key="product.id"
      hoverable
      style="width: 240px; margin-right: 16px"
    >
      <template #cover>
        <img :alt="product.title" :src="product.thumbnail" />
      </template>
      <a-card-meta :title="product.title">
        <template #description>{{ product.price }}</template>
      </a-card-meta>
      <br />
      <a-button type="primary">Lägg i varukorg </a-button>
    </a-card>
  </div>
</template>

<script>
import api from "./api";

export default {
  props: {
    category: {
      type: String,
      default: "laptops",
    },
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    switch (this.category) {
      case "laptops":
        this.products = await api.getLaptops();
        break;
      case "products":
        this.products = await api.getProducts();
        break;
      default:
        this.products = await api.getProducts();
        break;
    }
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
}

img {
  max-height: 150px;
  object-fit: cover;
  width: 100%;
}

.ant-btn-primary {
  background: green;
  border: 0;
}
</style>
