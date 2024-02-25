<template>
  <div class="counter">
    <v-btn variant="tonal" @click="decrement">-</v-btn>
    <span>{{ modelValue }}</span>
    <v-btn variant="tonal" @click="increment">+</v-btn>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      counter: this.modelValue || 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
      this.$emit('update:modelValue', this.counter);
    },
    decrement() {
      this.counter--;
      this.$emit('update:modelValue', this.counter);
    },
  },
};
</script>


<style scoped>
.counter {
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  padding: 3px;
}
</style>