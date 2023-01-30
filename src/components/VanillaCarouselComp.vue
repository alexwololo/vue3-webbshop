<template>
  <div class="carousel">
    <div class="carousel-items-container">
      <div v-for="product in randomProducts" :key="product.id" class="carousel-item">
        <img :src="product.thumbnail" alt="bild" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }} sek</p>
      </div>
    </div>
    <div class="arrow-container">
      <button @click="prev" class="prev-arrow">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button @click="next" class="next-arrow">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>
<style>
.carousel {
  width: 100%;
  position: relative;
}

.carousel-items-container {
  display: flex;
  overflow: hidden;
}

.carousel-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4rem;
  max-height: 100px;
  max-width: 100px;
}

.carousel-item img {
  width: 100px;
  height: 100px;
}

.arrow-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.prev-arrow,
.next-arrow {
  background: transparent;
  border: none;
  font-size: 36px;
  color: #fff;
  cursor: pointer;
}
</style>
<script>
import api from "./api";

export default {
  data() {
    return {
      products: [],
      randomProducts: [],
      currentIndex: 0,
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
    prev() {
      this.currentIndex--;
      this.slide();
    },
    next() {
      this.currentIndex++;
      this.slide();
    },
    slide() {
      const carouselItems = document.querySelector(".carousel-items-container");
      carouselItems.style.transform = `translateX(${-100 * this.currentIndex}%)`;
    },
  },
};
</script>
