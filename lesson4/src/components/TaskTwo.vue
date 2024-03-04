<template>
  <h2>Task 2</h2>

  <!-- Створіть динамічний список елементів, де кожен елемент має випадковий 
    колір фону та розмір шрифту, згенеровані методом при створенні компоненту. -->
  <DynamicList />
  <hr><br>

  <!-- Реалізуйте динамічне змінення стилів елемента (наприклад, зміна позиції, 
    коліру, розміру) за допомогою CSS Transitions або Animations при натисканні кнопки. -->
  <DynamicElement />
  <hr><br>

  <!-- Створіть переключатель тем, який динамічно змінює стилі всього додатку між темною та світлою темами. -->
  <ThemeSwitcher />
</template>
    
<script>
import DynamicList from './DynamicList.vue'
import DynamicElement from './DynamicElement.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {

  name: 'TaskTwo',
  components: {
    DynamicList,
    DynamicElement,
    ThemeSwitcher,
  },
}
</script>
    
<style scoped></style>
    