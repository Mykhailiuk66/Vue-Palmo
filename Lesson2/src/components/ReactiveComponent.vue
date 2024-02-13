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
                property2: 'Qwerty',
                property3: 'Qwerty 2',

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
