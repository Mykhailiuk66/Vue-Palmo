<!-- Деталізація Завдання:
Створіть новий Vue компонент, наприклад, CustomSelect.vue.

Оголосіть prop, наприклад options, для передачі масиву опцій у компонент.

Використайте v-for для виведення опцій у випадаючому списку на основі переданого масиву опцій.

Використайте v-model для того, щоб компонент міг взаємодіяти з зовнішніми даними. Ви можете використовувати v-model з computed properties для створення getter і setter методів.

Стилізуйте ваш компонент, використовуючи CSS або будь-який препроцесор на ваш вибір. -->


<template>
  <div>
    <select class="selector" v-model="selectedValue" @change="handleChange">
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selectedValue: this.modelValue
    };
  },
  methods: {
    handleChange() {
      this.$emit('update:modelValue', this.selectedValue);
    }
  }
}
</script>



<style scoped>
select {
  top: 40px;
  left: 0;
  height: fit-content;
  background: rgba(18, 175, 31, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}


.selector {
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  padding: 3px;
}
</style>