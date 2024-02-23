<template>
  <button @click="condition ? method1() : method2()">Click me</button>
</template>
      
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      condition: true
    };
  },
  methods: {
    method1() {
      alert("Method 1 is called")
      this.condition = !this.condition
    },
    method2() {
      alert("Method 2 is called")
      this.condition = !this.condition
    },

  }
}
</script>
      
<style scoped></style>
      