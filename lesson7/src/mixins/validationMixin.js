// Міксін для Валідації:
// Розробіть міксін, який додає валідацію для форми в компоненті.

export default {
  data() {
    return {
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      const fields = Object.keys(this.formData);

      fields.forEach(field => {
        const fieldValue = this.formData[field];
        const errorMessage = this.validateField(field, fieldValue);
        if (errorMessage) {
          this.errors[field] = errorMessage;
        }
      });

      return Object.keys(this.errors).length === 0;
    },
    validateField(field, value) {
      if (!value) {
        return `${field} is required`;
      }
      if (field === 'email') {
        const emailRegex = /^\S+@\S+\.\S+$/

        if (!emailRegex.test(value)) {
          return 'Invalid email format';
        }
      }
      if (field === 'age') {
        if (!value || value < 18) {
          return 'You must be at least 18 years old';
        }
      }
      if (field === 'confirmPassword') {
        if (value !== this.formData.password) {
          return 'Passwords do not match';
        }
      }

      return null;
    },
  },
};
