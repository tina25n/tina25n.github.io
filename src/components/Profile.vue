<script>
import Pic from '@/assets/images/Profile.jpg'

export default {
    data() {
        return {
            Picsrc: Pic,
            links: [
            {icon: 'mdi-linkedin', text: 'LinkedIn', url: 'http://www.linkedin.com/in/tina-nguyen25/'},
            {icon: 'mdi-github', text: 'GitHub', url: 'https://github.com/tina25n'},
          ],
        };
    },
  }
</script>

<template>
  <v-container>
  <v-card variant="flat" class="pa-auto ma-auto pt-3 mt-n2 mb-n3" block>
    <v-card color="pink-lighten-4" class="pa-3 justify-center align-center mx-auto mb-3" width="320">
      <v-img :src = "Picsrc" width="300" class="justify-center align-center mx-auto" ></v-img>
    </v-card>
    <v-spacer></v-spacer>
    <v-card-title class="text-h3 text-center"> TINA NGUYEN</v-card-title>
    <v-divider  class="pa-auto ma-auto pb-2" :thickness="4" color="pink" :length="500"></v-divider>
    <v-card-subtitle class="text-h6 text-center py-2 mb-n2"> Hello and welcome to my personal online resume. </v-card-subtitle>
    <v-card-text class="text-body-1 text-center"> Feel free to also check out my Github or LinkedIn.
    <v-list-item max-width="300" class = "justify-center align-center mx-auto" v-for="link in links" :href="link.url" target="_blank">
        <template v-slot:prepend>
          <v-icon :icon="link.icon"></v-icon>
        </template>
        <v-list-item-title :to="link.url">{{link.text}}</v-list-item-title>
    </v-list-item>
    </v-card-text>
  </v-card>
</v-container>
</template>