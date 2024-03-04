<!-- 3. Доступ до Store:
Виведіть дані зі свого store у компоненті Vue. -->


<template>
  <div class="content">
    <p>Count: {{ count }}</p>
    <p>Square Count: {{ squareCount }}</p>
    <p>Message: {{ message }}</p>
    <button @click="increment">Increment Count</button>
    <button @click="decrement">Decrement Count</button>
    <button @click="fetchData">Fetch Random Word</button>
    <input type="text" v-model="newMessage" placeholder="Type new message">
    <button @click="updateMessage">Set Message</button>
  </div>
</template>

<script>
import { useCounterStore } from '../store/counterStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      newMessage: ''
    };
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement', 'setMessage', 'fetchData']),

    updateMessage() {
      this.setMessage(this.newMessage)
      this.newMessage = '';
    },
  },
  computed: {
    ...mapState(useCounterStore, ['count', 'message', 'squareCount',]),
  },
};
</script>


<style scoped>
button,
input {
  border: 1px solid black;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content>* {
  margin: 5px;
}
</style>