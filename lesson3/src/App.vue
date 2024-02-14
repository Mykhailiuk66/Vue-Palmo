<template>
  <GreatingsComponent />
  <br><hr><br>

  <TwoMessagesComponent />
  <br><hr><br>

  <ShowIfComparisonComponent />
  <br><hr><br>

  <ProductSelectionComponent />
  <br><hr><br>
  
  <DynamicAttributesComponent />
  <br><hr><br>

</template>

<script>
import DynamicAttributesComponent from './components/DynamicAttributesComponent.vue';
import ProductSelectionComponent from './components/ProductSelectionComponent.vue';
import ShowIfComparisonComponent from './components/ShowIfComparisonComponent.vue';
import TwoMessagesComponent from './components/TwoMessagesComponent.vue';


export default {
  name: 'App',
  components: {
    TwoMessagesComponent,
    ShowIfComparisonComponent,
    ProductSelectionComponent,
    DynamicAttributesComponent
  }
}
</script>

<style></style>
