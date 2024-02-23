<template>
  <button @click="handleClick">Click me</button>
  <ul>
    <li v-for="(clickTime, index) in clickTimes" :key="index">{{ clickTime }}</li>
  </ul>
</template>
    
<script>
export default {
  name: 'ClickTimeTracker',
  props: ['clickTimes'],
  emits: ["record-click"],
  methods: {
    handleClick() {
      this.$emit('record-click')
    }
  }
}
</script>
    
<style scoped></style>
    