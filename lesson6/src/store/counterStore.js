// 2. Створення Store:
// Створіть свій перший store з базовим станом і декількома діями або мутаціями.
// 5. Дії:
// Створіть дії для виклику мутацій та обробки асинхронних операцій.
// 7. Селектори (Getters):
// Створіть селектори для вирахування похідних даних на основі стану.

import { defineStore } from 'pinia';

export const useCounterStore = defineStore("counter",
  {
    state: () => ({
      count: 0,
      message: '',
    }),
    actions: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      setMessage(message) {
        this.message = message
      },
      async fetchData() {
        try {
          const response = await fetch('https://random-word-api.herokuapp.com/word')
          const data = await response.json();
          const word = data[0]

          this.setMessage(word)

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
    getters: {
      squareCount: (state) => state.count ** 2,
    },
  }
);
