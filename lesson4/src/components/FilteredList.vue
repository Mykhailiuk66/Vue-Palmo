<template>
  <div>
    <h2>List</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <h2>Filtered list</h2>
    <ul>
      <template v-for="item in filteredItems" :key="item.id">
        <li v-if="item.isVisible">
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilteredList',
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', isVisible: true },
        { id: 2, name: 'Item 2', isVisible: false },
        { id: 3, name: 'Item 3', isVisible: true },
        { id: 4, name: 'Item 4', isVisible: false },
        { id: 5, name: 'Item 5', isVisible: true }
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.isVisible);
    }
  }
};
</script>
