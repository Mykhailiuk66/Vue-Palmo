<template>
    <div>
        <div v-show="isVisible">Показується за допомогою v-show</div>
        <div v-if="isVisible">Показується за допомогою v-if</div>
        <button @click="toggleVisibility">Перемкнути видимість</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isVisible: true
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
};
</script>
  