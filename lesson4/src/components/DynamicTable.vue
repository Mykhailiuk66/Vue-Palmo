<template>
  <div>
    <label for="rows">Rows:</label>
    <input type="number" v-model="rowCount" id="rows">
    <label for="cols">Columns:</label>
    <input type="number" v-model="colCount" id="cols">

    <table>
      <tr v-for="row in rowCount" :key="row">
        <td v-for="col in colCount" :key="col">{{ row }}{{ col }}</td>
      </tr>
    </table>
  </div>
</template>
    
<script>
export default {
  name: 'DynamicTable',
  data() {
    return {
      rowCount: 3,
      colCount: 3
    }
  }
}
</script>
    
<style scoped></style>
    