<template>
  <v-tabs color="deep-purple-accent-4" align-tabs="center" v-model="tab">
    <router-link :to="{ name: 'modal-toggler' }">
      <v-tab>Modal Toggler</v-tab>
    </router-link>

    <router-link :to="{ name: 'form' }">
      <v-tab>Form</v-tab>
    </router-link>

    <router-link :to="{ name: 'directives' }">
      <v-tab>Directives</v-tab>
    </router-link>
  </v-tabs>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    tab: null,
  })
}
</script>

