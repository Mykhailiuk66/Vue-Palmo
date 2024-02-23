<template>
  <div v-for="(item, index) in items" :key="index"
    :style="{ backgroundColor: randomColor(), fontSize: randomFontSize() + 'px' }" class="item">
    {{ item }}
  </div>
  <button @click="addItem">Add element</button>
</template>
    
<script>

export default {
  name: 'DynamicList',
  components: {
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]

    }
  },
  methods: {
    randomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },
    randomFontSize() {
      return Math.floor(Math.random() * 20) + 10;
    },
    addItem() {
      let randNum = Math.floor(Math.random() * 100)
      this.items.push(randNum)
    }

  },

}
</script>
    
<style scoped></style>
    