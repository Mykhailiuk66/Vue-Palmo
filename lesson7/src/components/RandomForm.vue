<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email:</label>
        <v-text-field type="text" id="email" v-model="formData.email"></v-text-field>
        <div v-if="errors.email" class="error">{{ errors.email }}</div>
      </div>
      <div>
        <label for="password">Password:</label>
        <v-text-field type="password" id="password" v-model="formData.password"></v-text-field>
        <div v-if="errors.password" class="error">{{ errors.password }}</div>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <v-text-field type="password" id="confirmPassword" v-model="formData.confirmPassword"></v-text-field>
        <div v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</div>
      </div>
      <div>
        <label for="age">Age:</label>
        <v-text-field type="number" id="age" v-model.number="formData.age"></v-text-field>
        <div v-if="errors.age" class="error">{{ errors.age }}</div>
      </div>
      <br>
      <v-btn type="submit">Submit</v-btn>
    </form>
  </div>
</template>

<script>
import validationMixin from '../mixins/validationMixin.js';

export default {
  name: "RandomForm",
  mixins: [validationMixin],
  data() {
    return {
      formData: {
        email: '',
        password: '',
        confirmPassword: '',
        age: null,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.validateForm()) {
        alert('Form submitted successfully')
        this.$router.go()
      } else {
        alert('Form validation failed')
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
  margin-bottom: 20px;
}
</style>
