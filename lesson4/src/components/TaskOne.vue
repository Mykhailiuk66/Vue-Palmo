<template>
  <h2>Task 1</h2>

  <!-- Створіть компонент, де кожен клік на кнопку зберігає поточний 
  час кліка в масив і виводить цей масив на екран. -->
  <ClickTimeTracker @record-click="recordClick" :clickTimes="clickTimes" />
  <hr><br>

  <!-- Реалізуйте форму, де при submit ви використовуєте модіфікатор .prevent, 
    і дані форми обробляються методом Vue інстанса, який також валідує їх на 
    правильність введення перед відправкою. -->
  <LoginForm />
  <hr><br>

  <!-- Створіть два методи і динамічно змінюйте обробник події кліка між цими 
    методами на основі деякої умови (наприклад, значення змінної). -->
  <DynamicHandler />
</template>
  
<script>
import ClickTimeTracker from './ClickTimeTracker.vue'
import LoginForm from './LoginForm.vue';
import DynamicHandler from './DynamicHandler.vue';

export default {
  name: 'TaskOne',
  components: {
    ClickTimeTracker,
    LoginForm,
    DynamicHandler,
  },
  data() {
    return {
      clickTimes: [],
    }
  },
  methods: {
    recordClick() {
      this.clickTimes.push(new Date().toLocaleString());
    }
  }
}
</script>
  
<style scoped></style>
  