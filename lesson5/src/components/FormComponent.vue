<template>
  <div class="form">

    <div>
      <CustomInput v-model="form.customInputValue" />
      <ValidationInput v-model="form.validationInputValue"></ValidationInput>
      <TwoWayBinding v-model="form.twoWayBinding"></TwoWayBinding>
      <CounterComponent v-model="form.counterValue"></CounterComponent>
      <ToggleComponent v-model="form.toggleValue"></ToggleComponent>
      <DynamicClassBinding v-model="form.dynamicClassBinding"></DynamicClassBinding>
      <SelectComponent v-model="form.selectValue"></SelectComponent>
      <CustomSelect v-model="form.customSelectValue" :options="selectOptions"></CustomSelect>

    </div>
    <div>
      {{ form }}
    </div>
  </div>
</template>

<script>
import CustomInput from './FormComponents/CustomInput.vue';
import ValidationInput from './FormComponents/ValidationInput.vue';
import TwoWayBinding from './FormComponents/TwoWayBinding.vue';
import CounterComponent from './FormComponents/CounterComponent.vue';
import ToggleComponent from './FormComponents/ToggleComponent.vue';
import DynamicClassBinding from './FormComponents/DynamicClassBinding.vue';
import SelectComponent from './FormComponents/SelectComponent.vue';
import CustomSelect from './FormComponents/CustomSelect.vue';


export default {
  components: {
    CustomInput,
    ValidationInput,
    TwoWayBinding,
    CounterComponent,
    ToggleComponent,
    DynamicClassBinding,
    SelectComponent,
    CustomSelect
  },
  data() {
    return {
      form: {
        customInputValue: '',
        validationInputValue: '',
        twoWayBinding: {
          textModel: '',
          numberModel: 0,
          checkboxModel: false,
        },
        counterValue: 0,
        toggleValue: false,
        dynamicClassBinding: true,
        selectValue: null,
        customSelectValue: null,
      },
      selectOptions: [
        { label: 'Custom Option 1', value: 'custom_option1' },
        { label: 'Custom Option 2', value: 'custom_option2' },
        { label: 'Custom Option 3', value: 'custom_option3' }
      ]


    };
  }
};
</script>


<style>
input {
  border: 1px solid black;
  margin: 5px;
}


.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
}
</style>