<template>
  <div class="dynamic-box" :class="{ 'red': modelValue }">
    <input :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" type="checkbox"> Make it red
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.dynamic-box {
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  padding: 3px;
}

.red {
  color: red;
}
</style>
