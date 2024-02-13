
<script setup>
</script>

<template>
  <main>
    <h1>1-3</h1>
    <ReactiveComponent />
    <br>
    <hr>

    <h1>4</h1>
    <ArrayFilterComponent />
    <br>
    <hr>

    <h1>5</h1>
    <button @click="switchShow">Переключити видимість</button>
    <Task5Component :show="show" />
    <br>
    <hr>

    <h1>6-7</h1>
    <FormComponent />
    <br>
    <hr>


    <h1>8</h1>
    <ObjectFilterComponent />
    <br>
    <hr>

    <h1>9-12</h1>
    <Task9_12Component />
    <br>
    <hr>

    <h1>13-16</h1>
    <Task13_16Component />
    <br>
    <hr>


  </main>
</template>


<script>
import ReactiveComponent from './components/ReactiveComponent.vue';
import ArrayFilterComponent from './components/ArrayFilterComponent.vue';
import Task5Component from './components/Task5Component.vue';
import FormComponent from './components/FormComponent.vue';
import ObjectFilterComponent from './components/ObjectFilterComponent.vue'
import Task9_12Component from './components/Task9_12Component.vue'
import Task13_16Component from './components/Task13_16Component.vue'

export default {
  name: "App",
  data() {
    return {
      show: false
    }

  },
  components: {
    ReactiveComponent,
    ArrayFilterComponent,
    Task5Component,
    FormComponent,
    ObjectFilterComponent,
    Task9_12Component,
    Task13_16Component
  },
  methods: {
    switchShow() {
      this.show = !this.show;
    },
  }
}
</script>

<style scoped></style>
