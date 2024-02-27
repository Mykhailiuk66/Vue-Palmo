import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    total: 0,
  }),

  actions: {
    async fetchProducts({ limit, skip }) {
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        this.products = data.products;
        this.total = data.total;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
});
