<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Пошук">
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ObjectFilterComponent",
    data() {
      return {
        items: [
          { id: 1, name: 'Елемент 1' },
          { id: 2, name: 'Елемент 2' },
          { id: 3, name: 'Елемент 3' },
          { id: 4, name: 'Інший елемент' }
        ],
        searchQuery: ''
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter(item => {
          return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }
    }
  };
  </script>
  