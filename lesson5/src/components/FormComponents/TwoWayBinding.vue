<template>
  <div>
    <input type="text" v-model="textModel">
    <input type="number" v-model="numberModel">
    <input type="checkbox" v-model="checkboxModel">
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      textModel: '',
      numberModel: 0,
      checkboxModel: false,
    };
  },
  mounted() {
    if (this.twoWayBinding) {
      this.textModel = this.twoWayBinding.textModel;
      this.numberModel = this.twoWayBinding.numberModel;
      this.checkboxModel = this.twoWayBinding.checkboxModel;
    }
  },
  watch: {
    textModel() {
      this.emitValues();
    },
    numberModel() {
      this.emitValues();
    },
    checkboxModel() {
      this.emitValues();
    }
  },
  methods: {
    emitValues() {
      this.$emit('update:modelValue', {
        textModel: this.textModel,
        numberModel: this.numberModel,
        checkboxModel: this.checkboxModel
      });
    }
  }
};
</script>
