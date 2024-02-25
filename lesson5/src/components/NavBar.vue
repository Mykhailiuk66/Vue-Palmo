<template>
  <v-tabs color="deep-purple-accent-4" align-tabs="center" v-model="tab">
    <router-link :to="{ name: 'home' }">
      <v-tab>Home</v-tab>
    </router-link>
    <router-link :to="{ name: 'child' }">
      <v-tab>Nested routes</v-tab>
    </router-link>
    <router-link :to="{ name: 'user-id', params: { id: 'da28ffc5-f7c7-4afe-823d-fbe99555945d' } }">
      <v-tab>User ID</v-tab>
    </router-link>
    <router-link :to="{ name: 'programmatic-navigation' }">
      <v-tab>Programmatic Navigation</v-tab>
    </router-link>
    <router-link :to="{ name: 'profile' }">
      <v-tab>Profile</v-tab>
    </router-link>

    <router-link :to="{ name: 'admin-page' }">
      <v-tab>Admin Page</v-tab>
    </router-link>
    <router-link :to="{ name: 'authenticated-page' }">
      <v-tab>Authenticated Page</v-tab>
    </router-link>

    <router-link :to="{ name: 'form' }">
      <v-tab>Form</v-tab>
    </router-link>
    
    <!-- 
    <router-link :to="{ name: 'about' }">
      <v-tab :value="2">About</v-tab>
    </router-link>


    <router-link :to="{ name: 'home' }">
      <v-tab :value="3">Home</v-tab>
    </router-link> -->
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>