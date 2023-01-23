<template>
  <!-- <a-row>
    <a-col
      :span="24"
      :xs="{ span: 24 }"
      :sm="{ span: 12 }"
      :md="{ span: 8 }"
      :lg="{ span: 6 }"
      :xl="{ span: 4 }"
      >Kategori 1</a-col
    >
    <a-col
      :span="24"
      :xs="{ span: 24 }"
      :sm="{ span: 12 }"
      :md="{ span: 8 }"
      :lg="{ span: 6 }"
      :xl="{ span: 4 }"
      >Kategori 2</a-col
    >
    <a-col
      :span="24"
      :xs="{ span: 24 }"
      :sm="{ span: 12 }"
      :md="{ span: 8 }"
      :lg="{ span: 6 }"
      :xl="{ span: 4 }"
      >Kategori 3</a-col
    >
    <a-col
      :span="24"
      :xs="{ span: 24 }"
      :sm="{ span: 12 }"
      :md="{ span: 8 }"
      :lg="{ span: 6 }"
      :xl="{ span: 4 }"
      >Kategori 4</a-col
    >
    <a-col
      :span="24"
      :xs="{ span: 24 }"
      :sm="{ span: 12 }"
      :md="{ span: 8 }"
      :lg="{ span: 6 }"
      :xl="{ span: 4 }"
      >Kategori 5</a-col
    >
    <a-col
      :span="24"
      :xs="{ span: 24 }"
      :sm="{ span: 12 }"
      :md="{ span: 8 }"
      :lg="{ span: 6 }"
      :xl="{ span: 4 }"
      >Kategori 6</a-col
    >
  </a-row> -->

  <div>
    <a-row gutter="{16}">
      <a-col :span="6" v-for="product in products" :key="product.id">
        <a-card>
          <template v-slot:default>
            <div><img :src="product.thumbnail" alt="product-image" style="width: 100%" /></div>
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.rating }}</p>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <!-- <div>
    <a-row gutter="{16}">
      <a-col :span="6" v-for="product in products" :key="product.id">
        <a-card :title="product.title" :description="product.description">
          <template v-slot:actions>
            <p>{{ product.price }}</p>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "MainBody",
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const randomProducts = response.data.products.sort(() => 0.5 - Math.random()).slice(0, 8);
        this.products = randomProducts;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
main {
  padding: 20px;
  text-align: center;
}
</style>
