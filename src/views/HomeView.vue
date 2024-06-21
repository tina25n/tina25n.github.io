<script setup>
import Profile from '@/components/Profile.vue';
import ViewButtons from '@/components/ViewButtons.vue';

</script>

<template>
  <v-container color="pink" fill-height fluid>
    <v-row no-gutters color="blue">
      <v-col>
        <v-flex>
        <v-sheet class="pa-auto ma-auto justify-center align-center">
            <Profile></Profile>
        </v-sheet>
        </v-flex>
      </v-col>

      <v-col>
        <v-sheet>
          <ViewButtons></ViewButtons>
        </v-sheet>
      </v-col>

      <v-responsive width="100%"></v-responsive>
    </v-row>
  </v-container>
</template>
