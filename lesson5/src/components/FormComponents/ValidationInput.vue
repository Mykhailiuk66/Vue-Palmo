<template>
  <div>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :class="{ 'error': !isValid }">
    <span v-if="!isValid">Помилка валідації!</span>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    isValid() {
      return this.modelValue.length > 0;
    },
  },
};
</script>
