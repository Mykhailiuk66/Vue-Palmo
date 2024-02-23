<template>
  <div>
    <button @click="toggleStyle">Change style</button>
    <div :style="dynamicStyles" class="element">Element</div>
  </div>
</template>

<script>
export default {
  name: 'DynamicElement',
  data() {
    return {
      isToggled: false
    };
  },
  computed: {
    dynamicStyles() {
      return {
        backgroundColor: this.isToggled ? 'blue' : 'green',
        transform: this.isToggled ? 'scale(1.5)' : 'scale(1)',
        transition: 'all 0.5s ease-in-out' 
      };
    }
  },
  methods: {
    toggleStyle() {
      this.isToggled = !this.isToggled;
    }
  }
};
</script>

<style>
.element {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: all 0.5s ease-in-out;
}
</style>
