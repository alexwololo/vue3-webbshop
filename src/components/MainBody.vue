<template>
  <div>
    <header>
      <!-- header content -->
    </header>
    <nav>
      <!-- navigation content -->
    </nav>
    <main>
      <a-row gutter="{16}" type="flex" justify="center">
        <a-col :span="6" v-for="product in products" :key="product.id">
          <a-card class="card">
            <img :src="product.thumbnail" alt="product-image" class="card-image" />
            <div class="card-content">
              <h2>{{ product.title }}</h2>
              <p>{{ product.price }}</p>
              <p>{{ product.rating }}</p>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </main>
    <footer>
      <!-- footer content -->
    </footer>
  </div>
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
        const randomProducts = response.data.products.sort(() => 0.5 - Math.random()).slice(0, 10);
        this.products = randomProducts;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 2rem 1rem;
}

.card-image {
  width: 50%;
}

.card-content {
  text-align: center;
}

@media (max-width: 768px) {
  .card {
    width: 80%;
  }
}
</style>
