<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h2>{{ product.title }}</h2>
                <p>{{ product.description }}</p>
            </li>
        </ul>
        <hr>

        <label for="prod-in-stock">Продуктів на складі: </label>
        <input id="prod-in-stock" placeholder="Продуктів на складі" type="number" v-model="inStock">

        <p>Кількість продукції онлайн: {{ products.length }}</p>
        <p>Кількість продукції на складі: {{ inStock }}</p>


        <p>Загальна кількість продуктів: {{ combinedData }}</p>
        <p>Необхідна кількість продукції: {{ computedPropertyDependent }}</p>
        <p>Watcher: {{ watcherMessage }}</p>
        <p>Property watcher: {{ propertyWatcherMessage }}</p>
    </div>
</template>

<script>

import axiosInstance from '../../services/axios';

export default {
    name: "Task9_12Component",
    data() {
        return {
            products: [],
            inStock: '0',
            stock: {
                total: 0
            },
            watcherMessage: '',
            propertyWatcherMessage: ''
        };
    },
    computed: {
        combinedData() {
            return this.products.length + parseInt(this.inStock);
        },
        computedPropertyDependent() {
            return this.combinedData * 2;
        }
    },
    watch: {
        inStock(newValue, oldValue) {
            this.watcherMessage = `Кількість товарів на складі змінено!\nПопереднє значення: ${oldValue}\nНове значення ${newValue}`
            this.updateStockTotal();
        },
        'stock.total'(newValue, oldValue) {
            this.propertyWatcherMessage = `Загальна кількість товарів на складі змінено!\nПопереднє значення: ${oldValue}\nНове значення ${newValue}`;
        }
    },
    methods: {
        updateStockTotal() {
            this.stock.total = this.combinedData;
        }
    },
    mounted() {
        axiosInstance.get('/products')
            .then(response => {
                this.products = response.data.products;
                this.updateStockTotal();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
};
</script>
