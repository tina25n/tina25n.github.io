<script setup>
import TechWork from '@/components/TechWork.vue';
import NonTech from '@/components/Non-Tech.vue';
import Volunteer from '@/components/Volunteer.vue';

</script>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<template>
  <v-window></v-window>
  <v-card class="ma-10">
    <v-tabs v-model="tab" bg-color="pink-lighten-2" align-tabs="center" stacked>
      <v-tab value="W1"> <v-icon icon="mdi-laptop"></v-icon> Technical Roles</v-tab>
      <v-tab value="W2"> <v-icon icon="mdi-face-agent"></v-icon> Non-Technical Positions</v-tab>
      <v-tab value="W3"> <v-icon icon="mdi-handshake"></v-icon> Volunteer Work</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="W1">
          <TechWork></TechWork>
        </v-window-item>

        <v-window-item value="W2">
          <NonTech></NonTech>
        </v-window-item>

        <v-window-item value="W3">
          <Volunteer></Volunteer>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>