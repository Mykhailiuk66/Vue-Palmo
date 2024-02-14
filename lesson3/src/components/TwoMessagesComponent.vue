<template>
    <div>
        <div v-if="isTrue">Повідомлення 1</div>
        <div v-else>Повідомлення 2</div>
        <button @click="toggleMessages">Перемкнути повідомлення</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isTrue : true,
        };
    },
    methods: {
        toggleMessages() {
            this.isTrue  = !this.isTrue ;
        }
    }
};
</script>
  