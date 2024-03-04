<script setup>
import Name from '@/components/Name.vue';
</script>

<template>
  <Name></Name>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>

      <v-responsive width="100%"></v-responsive>
    </v-row>
  </v-container>
</template>
