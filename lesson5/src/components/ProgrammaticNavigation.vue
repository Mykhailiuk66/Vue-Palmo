<template>
  <v-btn variant="outlined" @click="redirectToHome">
    Go Home
  </v-btn>
</template>


<script>
export default {
  name: "ProgrammaticNavigation",
  methods: {
    redirectToHome() {
      this.$router.replace({
        name: 'home',
      });
    }
  }
}
</script>