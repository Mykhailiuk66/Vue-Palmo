<!-- 
13.	Використовуйте watcher для відправлення API запитів при зміні реактивних даних.

14.	Створіть watcher, який реагує на зміни в computed property.

15.	Використовуйте deep опцію для відстеження властивостей внутрішніх об’єктів.

16.	Використовуйте опцію immediate для виклику watcher при ініціалізації компонента. -->


<template>
    <div>
        <input v-model.number="productId" type="number">

        <h1>Product Details</h1>
        <p>Name: {{ product.title }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
    </div>
</template>
  
<script>

import axiosInstance from '../../services/axios';

export default {
    name: "Task13_16Component",
    data() {
        return {
            productId: 1,
            product: {}
        };
    },
    computed: {
        computedProperty() {
            return this.product;
        }
    },
    watch: {
        productId: {
            handler(newValue, oldValue) {
                this.fetchProduct(newValue);
            },
            immediate: true
        },
        computedProperty: {
            handler(newValue, oldValue) {
                console.log('Computed property змінена');
            },
            deep: true,
        }
    },
    methods: {
        fetchProduct(productId) {
            axiosInstance.get(`/products/${productId}`)
                .then(response => {
                    this.product = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
};
</script>
  
<!--  -->