import axios from "axios";

export default {
  async getProducts() {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      return data.products;
    } catch (error) {
      console.error(error);
    }
  },
};
