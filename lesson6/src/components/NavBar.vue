<template>
  <v-tabs color="deep-purple-accent-4" align-tabs="center" v-model="tab">
    <router-link :to="{ name: 'products' }">
      <v-tab>Products</v-tab>
    </router-link>
    <router-link :to="{ name: 'counter' }">
      <v-tab>Counter</v-tab>
    </router-link>
    <router-link :to="{ name: 'profile' }">
      <v-tab>Profile</v-tab>
    </router-link>

    <v-btn variant="outlined" class="auth-btn" @click="isAuthenticated ? logout() : login()">
      {{ isAuthenticated ? 'Logout' : 'Login' }}
    </v-btn>
  </v-tabs>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import { useUserStore } from '@/store/userStore';

export default {
  data: () => ({
    tab: null,
  }),
  methods: {
    ...mapActions(useUserStore, ['login', 'logout']),
  },
  computed: {
    ...mapState(useUserStore, ['isAuthenticated'])
  }
}
</script>


<style scoped>
.auth-btn {
  align-self: center;
}
</style>