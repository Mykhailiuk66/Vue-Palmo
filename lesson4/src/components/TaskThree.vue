<template>
  <h2>Task 3</h2>

  <!-- За допомогою v-for, створіть таблицю, де кількість рядків і 
    стовпців задається динамічно через інпут або інший елемент керування. -->
  <DynamicTable />
  <hr><br>
  
  <!-- Реалізуйте компонент, що виводить список об'єктів, де кожен об'єкт має 
    вкладений список. Використовуйте вкладені v-for для виведення елементів вкладеного списку. -->
  <NestedList />
  <hr><br>

  <!-- Виведіть довгий список елементів з пагінацією, використовуючи v-for, і динамічно 
    змінюйте відображені елементи при кліку на кнопки пагінації. -->
  <ListPagination />
  <hr><br>

  <!-- Виведіть список елементів, використовуючи v-for, і додайте умову v-if для фільтрації елементів. -->
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
    