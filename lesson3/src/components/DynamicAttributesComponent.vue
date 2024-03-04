<!-- 7.	Використовуючи v-bind, динамічно додавайте або видаляйте атрибути елемента 
(наприклад, disabled, readonly) в залежності від умови. -->

<template>
    <div>
        <button :disabled="isDisabled">Кнопка з динамічним disabled</button>
        <br>
        <input type="text" :value="inputValue" :readonly="isReadonly">
        <br>
        <button @click="toggleAttributes">Змінити атрибути</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isDisabled: false,
            isReadonly: false,
            inputValue: "editable"

        };
    },
    methods: {
        toggleAttributes() {
            this.isDisabled = !this.isDisabled;
            this.isReadonly = !this.isReadonly;

        }
    },
    watch: {
        isReadonly() {
            this.inputValue = this.isReadonly ? "readonly" : "editable";
        }
    }
};
</script>
  