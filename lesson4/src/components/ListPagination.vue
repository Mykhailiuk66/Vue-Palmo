<template>
  <div>
    <ul>
      <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>
    
<script>

export default {
  name: 'ListPagination',
  data() {
    return {
      items: [],
      itemsPerPage: 5,
      currentPage: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
  created() {
    this.items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 7' },
      { id: 8, name: 'Item 8' },
      { id: 9, name: 'Item 9' },
      { id: 10, name: 'Item 10' },
      { id: 11, name: 'Item 11' },
      { id: 12, name: 'Item 12' },
      { id: 13, name: 'Item 13' },
      { id: 14, name: 'Item 14' },
      { id: 15, name: 'Item 15' },
      { id: 16, name: 'Item 16' },
    ];
  }
};
</script>
    
<style scoped></style>
    