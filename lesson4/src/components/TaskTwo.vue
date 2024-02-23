<template>
  <h2>Task 2</h2>

  <DynamicList />
  <hr><br>

  <DynamicElement />
  <hr><br>

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
    