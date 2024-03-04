<!-- 6.	Створіть декілька компонентів і динамічно переключайте між ними за допомогою v-if, 
  в залежності від вибору користувача (наприклад, використовуючи радіокнопки або випадаючий список). -->

<template>
    <div>
        <input type="radio" id="product1" value="product1" v-model="selectedProduct">
        <label for="product1">Продукт 1</label>
        <br>
        <input type="radio" id="product2" value="product2" v-model="selectedProduct">
        <label for="product2">Продукт 2</label>

        <div v-if="selectedProduct === 'product1'">Вибрано продукт 1</div>
        <div v-if="selectedProduct === 'product2'">Вибрано продукт 2</div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedProduct: ''
        };
    }
};
</script>
  