<template>
  <div class="form">

    <div>
      <!-- Custom v-model:
      Реалізуйте компонент, який використовує v-model для налаштування власного 
      введення даних. -->
      <CustomInput v-model="form.customInputValue" />

      <!-- Validation with v-model:
      Реалізуйте розширену валідацію форми, використовуючи v-model для управління 
      станом форми і виведенням повідомлень про помилки. -->
      <ValidationInput v-model="form.validationInputValue"></ValidationInput>

      <!-- Двонаправлений Data Binding:
      Створіть форму з різними типами полів вводу (текст, число, чекбокс) і 
      використайте v-model для двонаправленого зв'язування даних. Змініть 
      значення моделі в коді і перевірте, чи змінилось значення в полі вводу, і навпаки. -->
      <TwoWayBinding v-model="form.twoWayBinding"></TwoWayBinding>

      <!-- Компонент Counter:
      Реалізуйте компонент лічильника, який використовує v-model для управління 
      його значенням. Компонент повинен мати кнопки для збільшення та зменшення 
      значення лічильника. -->
      <CounterComponent v-model="form.counterValue"></CounterComponent>

      <!-- Toggle Component:
      Створіть компонент перемикача (toggle), який використовує v-model. 
      Компонент повинен міняти свій стан та виводити різні значення в залежності 
      від свого стану. -->
      <ToggleComponent v-model="form.toggleValue"></ToggleComponent>

      <!-- Динамічна зміна класів:
      Використовуйте v-model для динамічної зміни класів елемента на основі 
      даних, введених користувачем. -->
      <DynamicClassBinding v-model="form.dynamicClassBinding"></DynamicClassBinding>

      <!-- Select Component:
      Завдання: Створити компонент "Select Component" з використанням v-model -->
      <SelectComponent v-model="form.selectValue"></SelectComponent>

      <!-- Створіть компонент:
      Розробіть новий компонент, який буде представляти собою випадаючий 
      список (select box).

      Динамічні Опції:
      Компонент повинен приймати масив опцій як prop, щоб користувач міг динамічно 
      визначати доступні опції.

      v-model:
      Інтегруйте v-model, щоб забезпечити зв'язування значення компоненту з 
      зовнішньою змінною, так щоб при зміні вибраної опції, змінювалося значення 
      зовнішньої змінної, і навпаки. 
    
      Стилізація та Верстка:
      Стилізуйте компонент так, щоб він був візуально привабливим та відповідав 
      стандартам верстки.
      -->
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