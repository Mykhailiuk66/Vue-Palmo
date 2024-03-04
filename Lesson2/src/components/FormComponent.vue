<!-- 6.	Створіть метод, який буде перевіряти введені дані у формі на відповідність деяким правилам.
7.	Створіть обчислювальну властивість для виведення даних, обчислених на основі інших реактивних даних. -->

<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="inputData" placeholder="Enter data">
      <button type="submit">Submit</button>
    </form>
    <p v-if="isDataValid">Good</p>
    <p v-if="showValidationMessage">{{ validationMessage }}</p>

    <p>Результат винання computedResult: {{ computedResult }}</p>

  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      inputData: '',
      showValidationMessage: false,
      validationMessage: '',

    };
  },
  computed: {
    isDataValid() {
      return this.inputData.length > 3;
    },
    computedResult() {
      return this.inputData.toUpperCase();
    },
  },
  methods: {
    submitForm() {
      if (!this.isDataValid) {
        this.showValidationMessage = true;
        this.validationMessage = 'Речення повинно містити мінімум 3 символа.';
      } else {
        this.showValidationMessage = false;
        this.validationMessage = '';
        console.log('Form submitted!');
      }
    },
  }
};
</script>
<!--  -->