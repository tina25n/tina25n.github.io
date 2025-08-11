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
        <v-sheet class="pr-5 pt-3">
          <ViewButtons></ViewButtons>
        </v-sheet>
      </v-col>

      <v-responsive width="100%"></v-responsive>
    </v-row>
    <p class="text-body-1 text-center bg-pink-lighten-2">You can click on the Dog in the top right corner to download
      the PDF of my resume and reach out to me via email.</p>

  </v-container>



</template>
