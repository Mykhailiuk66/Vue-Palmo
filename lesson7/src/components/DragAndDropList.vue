<template>
  <div class="drop-zone" @dragenter.prevent @dragover.prevent>
    <div v-for="item in items" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)"
      @drop="onDrop($event, item.id)">
      {{ item.title }}
    </div>
  </div>
</template> 

<script>
export default {
  name: "DragAndDrop",
  data() {
    return {
      items: [
        { id: 0, title: "Item A"},
        { id: 1, title: "Item B"},
        { id: 2, title: "Item C"},
      ],
    }
  },
  methods: {
    startDrag(event, item) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemID', item.id);
    },
    onDrop(event, id) {
      const itemID = event.dataTransfer.getData('itemID');
      const itemIndexFrom = this.items.findIndex((item) => item.id == itemID);
      const itemIndexTo = this.items.findIndex((item) => item.id == id);

      [this.items[itemIndexFrom], this.items[itemIndexTo]] = [this.items[itemIndexTo], this.items[itemIndexFrom]];
    }
  }
}
</script>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
