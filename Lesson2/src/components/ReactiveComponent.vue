<!-- 
1.	Створіть реактивний об'єкт і виведіть його властивості в шаблон. Змініть властивість об'єкта і спостерігайте за змінами в DOM.
2.	Створіть метод, який буде викликатися при кліку на кнопку і змінювати деякі дані в інстансі
3.	Створіть метод, який приймає подію і використовує ії для зміни даних інстанса. 
-->


<template>
    <div>
        <p>Зміна властивості об'єкта: <input :value="obj.property" @input="updateProperty($event)"></p>
        <p>Властивість об'єкта: {{ obj.property }}</p>
        <button @click="clearData">Очистити</button>
    </div>
</template>
  

<script>
export default {
    name: "ReactiveComponent",
    data() {
        return {
            obj: {
                property: 'Початкове значення',
            }
        }
    },
    methods: {
        clearData() {
            this.obj.property = '';
        },
        updateProperty(event) {
            this.obj.property = event.target.value;
        }
    }
}
</script>


<style scoped></style>

<!--  -->