<template>
  <h2>Task 1</h2>

  <ClickTimeTracker @record-click="recordClick" :clickTimes="clickTimes" />
  <hr><br>

  <LoginForm />
  <hr><br>

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
  