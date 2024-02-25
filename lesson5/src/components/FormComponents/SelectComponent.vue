<template>
  <div>
    <select class="selector" v-model="selectedValue" @change="handleChange">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      selectedValue: this.modelValue
    };
  },
  methods: {
    handleChange() {
      this.$emit('update:modelValue', this.selectedValue);
    }
  }
}
</script>


<style scoped>
.selector {
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  padding: 3px;
}
</style>