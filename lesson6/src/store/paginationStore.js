import { defineStore } from 'pinia';
import { useProductStore } from './productStore';

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    currentPage: 1,
    limit: 3,
  }),

  actions: {
    setPage(page) {
      this.currentPage = page;
    },

    async nextPage() {
      const product = useProductStore()

      if (this.currentPage * this.limit < product.total) {
        this.currentPage++;
        await product.fetchProducts({ limit: this.limit, skip: (this.currentPage - 1) * this.limit });
      }
    },

    async prevPage() {
      const product = useProductStore()

      if (this.currentPage > 1) {
        this.currentPage--;
        await product.fetchProducts({ limit: this.limit, skip: (this.currentPage - 1) * this.limit });
      }
    },
  },
});
