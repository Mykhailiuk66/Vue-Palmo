<template>
  <h2>Task 3</h2>

  <DynamicTable />
  <hr><br>

  <NestedList />
  <hr><br>

  <ListPagination />
  <hr><br>

  <FilteredList />
</template>
    
<script>
import DynamicTable from './DynamicTable.vue';
import NestedList from './NestedList.vue'
import ListPagination from './ListPagination.vue'
import FilteredList from './FilteredList.vue'


export default {

  name: 'TaskThree',
  components: {
    DynamicTable,
    NestedList,
    ListPagination,
    FilteredList
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
    
<style scoped></style>
    