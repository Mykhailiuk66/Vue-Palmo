<template>
  <button @click="toggleTheme">Switch theme</button>
</template>
      
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      darkTheme: false
    };
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      if (this.darkTheme) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      }
    }


  }
}
</script>
      
<style scoped></style>
      