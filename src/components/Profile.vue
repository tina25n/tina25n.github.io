<script>
import Pic from '@/assets/images/Profile.jpg'

export default {
    data() {
        return {
            Picsrc: Pic,
        };
    },
  }
</script>

<template>
  <v-card variant="flat" class="pa-auto ma-auto py-10" block>
    <v-card color="pink-lighten-4" class="pa-3 justify-center align-center mx-auto mb-3" width="320">
      <v-img :src = "Picsrc" width="300" class="justify-center align-center mx-auto" ></v-img>
    </v-card>
    <v-spacer></v-spacer>
    <v-card-title class="text-h2 text-center py-5"> Tina Nguyen</v-card-title>
    <v-divider :thickness="3" color="pink"></v-divider>
    <v-card-subtitle class="text-h5 text-center py-5"> Hello and welcome to my personal online resume. </v-card-subtitle>
    <v-card-text></v-card-text>
  </v-card>
</template>