export const LogMixin = {
  
  created() {
    console.log(`Component ${this.$options.name} created`);
  },
  unmounted () {
    console.log(`Component ${this.$options.name} unmounted`);
  }
};