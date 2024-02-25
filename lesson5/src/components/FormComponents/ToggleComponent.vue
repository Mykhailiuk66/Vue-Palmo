<template>
  <div>
    <button class="toggler" @click="toggleState">{{ isActive ? 'Вимкнути' : 'Увімкнути' }}</button>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      isActive: this.modelValue || false,
    };
  },
  methods: {
    toggleState() {
      this.isActive = !this.isActive;
      this.$emit('update:modelValue', this.isActive);
    },
  },
};
</script>


<style scoped>
  .toggler{
    display: inline-block;
    border: 1px solid black;
    margin: 5px;
    padding: 3px;
  }
</style>
