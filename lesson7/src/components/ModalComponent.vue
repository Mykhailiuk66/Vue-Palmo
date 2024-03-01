<template>
  <div class="text-center pa-4">
    <slot name="open-modal" :open="open">
      <v-btn @click="open">
        Open Dialog
      </v-btn>
    </slot>

    <v-dialog v-model="isOpen" width="auto">
      <v-card prepend-icon="mdi-update" max-width="400">
        <v-card-title>
          <slot name="header">
            TITLE
          </slot>
        </v-card-title>
        <v-card-text>
          <slot>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </slot>
        </v-card-text>
        <v-card-subtitle>
          <slot name="footer" :close="close">
            <v-btn class="ms-auto" text="Ok" @click="close"></v-btn>
          </slot>
        </v-card-subtitle>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  }
}
</script>
