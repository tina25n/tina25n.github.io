<script>
    export default {
    data: () => ({
      tab: null,
      length: 3,
      onboarding: 0,
    }),
  }

</script>

<template>
  <v-card class="ma-10">
    <v-tabs
      v-model="tab"
      bg-color="pink-lighten-2"
      align-tabs="center"
    >
      <v-tab value="P1">Capstone</v-tab>
      <v-tab value="P2">BeLoved</v-tab>
      <v-tab value="P3">Furry Friends</v-tab>
      <v-tab value="P4">Wasteless</v-tab>
      <v-tab value="P5">Souvenir</v-tab>

    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="P1">
          
          
        </v-window-item>

        <v-window-item value="P2">
          
        </v-window-item>

        <v-window-item value="P3">
          
        </v-window-item>

        <v-window-item value="P4">
          
        </v-window-item>

        <v-window-item value="P5">
          
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>