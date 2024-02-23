<template>
  <h1>Lesson 4</h1>

  <TaskOne />
  <hr><br>

  <TaskTwo />
  <hr><br>

  <TaskThree />
</template>

<script>
import TaskOne from './components/TaskOne.vue';
import TaskTwo from './components/TaskTwo.vue';
import TaskThree from './components/TaskThree.vue';


export default {
  name: 'App',
  components: {
    TaskOne,
    TaskTwo,
    TaskThree,
  }
}
</script>

<style>
/* Стилі для темної теми */
body.dark {
  background-color: #333;
  color: #fff;
}

/* Стилі для світлої теми */
body.light {
  background-color: #fff;
  color: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
