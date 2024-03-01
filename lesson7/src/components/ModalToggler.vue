<template>
  <div>
    <ModalComponent>
      <template v-slot:header>
        <h2>Custom Header</h2>
      </template>

      <template v-slot:default>
        <p>Custom Body Content</p>
      </template>

      <template v-slot:footer="{ close }">
        <button @click="close">Custom Close</button>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from './ModalComponent.vue';

export default {
  name: "ModalToggler",
  components: {
    ModalComponent
  },
}

</script>

<style scoped>
button {
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
}
</style>
