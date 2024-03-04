<!-- 5.	Використайте метод для обробки події кліку, який змінює стан інших компонентів. -->
<template>
    <div>
        <p v-if="show">Task5Component</p>
    </div>
</template>

<script>
export default {
    name: "Task5Component",
    props: ['show'],
}
</script>

<style scoped></style>
<!--  -->