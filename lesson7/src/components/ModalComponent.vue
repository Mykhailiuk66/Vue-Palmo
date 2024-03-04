<!-- Слоти
Базовий Слот:
Створіть компонент з одним слотом та використайте його, передаючи різний контент у слот з різних компонентів.

Іменовані Слоти:
Розробіть компонент з декількома іменованими слотами та передайте у них різний контент.

Слоти з Фолбек Контентом:
Створіть компонент з слотами, які мають фолбек контент, що відображається, якщо немає переданого контенту.

Scoped Slots:
Реалізуйте компонент, який передає дані назад у батьківський компонент через scoped slot.
Стовріть слот для модального вікна за допомогою которого можно будет встановлювати контент для хедера, футера та  -->


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
