<!-- 4.	Створіть метод для фільтрації масиву об'єктів за деяким критерієм. -->

<template>
    <div>
        <p>Масив об'єктів:</p>
        <ul>
            <li v-for="item in filteredArray" :key="item">{{ item }}</li>
        </ul>
        <input type="number" v-model="filterCriterion">
    </div>
</template>

<script>
export default {
    name: "ArrayFilterComponent",
    data() {
        return {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            filterCriterion: 0,
        };
    },
    computed: {
        filteredArray() {
            return this.array.filter((item) => item > this.filterCriterion);
        },
    },
};
</script>

<!--  -->