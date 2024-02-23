<template>
    <form @submit.prevent="handleSubmit">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required><br>
        <span v-if="!isUsernameValid">Please enter a username</span>
        <br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required><br>
        <span v-if="!isEmailValid">Please enter a valid email address</span>
        
        <br>
        <button type="submit">Submit</button>
    </form>
</template>
      
<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            email: '',
            isUsernameValid: true,
            isEmailValid: true
        };
    },
    methods: {
        validateForm() {
            this.isUsernameValid = !!this.username;
            this.isEmailValid = this.validateEmail(this.email);
            return this.isUsernameValid && this.isEmailValid;
        },
        validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        handleSubmit() {
            if (this.validateForm()) {
                alert("Form submitted successfully") 
            }
        }
    }
}
</script>
      
<style scoped></style>
      