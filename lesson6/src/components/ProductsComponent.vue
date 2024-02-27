<template>
  <v-container>
    <div class="cards">
      <v-card v-for="product in products" :key="product.id" class="card" max-width="400">
        <v-img class="align-end text-white" height="200" :src="product.thumbnail" :alt="product.title" cover>
          <v-card-title>{{ product.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          {{ product.title }}
        </v-card-subtitle>

        <v-card-text>
          <p>{{ product.description }}</p>

        </v-card-text>
      </v-card>

    </div>
    <div>
      <v-btn variant="outlined" @click="prevPage" :disabled="currentPage === 1">
        Previous
      </v-btn>
      <span class="mx-10">{{ currentPage }}</span>
      <v-btn variant="outlined" @click="nextPage" :disabled="currentPage * limit >= total">
        Previous
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { usePaginationStore } from '../store/paginationStore';
import { useProductStore } from '../store/productStore';

export default {
  data() {
    return {
      newMessage: ''
    };
  },
  created() {
    this.fetchProducts({ limit: this.limit, skip: (this.currentPage - 1) * this.limit });

  },
  methods: {
    ...mapActions(usePaginationStore, ['setPage', 'nextPage', 'prevPage']),
    ...mapActions(useProductStore, ['fetchProducts']),

    updateMessage() {
      this.setMessage(this.newMessage)
      this.newMessage = '';
    },
  },
  computed: {
    ...mapState(usePaginationStore, ['currentPage', 'limit']),
    ...mapState(useProductStore, ['products', 'total']),
  },

};

</script>


<style scoped>
.cards {
  display: inline-flex;
}

.card {
  margin: 1rem;
}
</style>