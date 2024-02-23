<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
          {{ subItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedList',
  data() {
    return {
      items: [
        {
          title: 'Group 1',
          subItems: [
            'Item 1.1',
            'Item 1.2',
            'Item 1.3',
          ]
        },
        {
          title: 'Group 2',
          subItems: [
            'Item 2.1',
            'Item 2.2',
            'Item 2.3',
          ]
        },
        {
          title: 'Group 3',
          subItems: [
            'Item 3.1',
            'Item 3.2',
            'Item 3.3',
          ]
        }
      ]
    };
  }
};
</script>
