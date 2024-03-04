
<!-- 5.	Створіть два елементи, один з v-show, інший з v-if, з однаковими умовами. 
Змініть умову і спостерігайте за відмінностями у DOM. Дослідіть, в яких ситуаціях краще 
використовувати кожну директиву. -->

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
  