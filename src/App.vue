<script>
import { RouterLink, RouterView } from 'vue-router'
import puppy from '@/assets/images/puppy.png'

export default {
  name: "App",
  data() {
    return {
      pupsrc: puppy,
      expand: false,
      menuItems: [
          { title: 'Education', path: '/education'},
          { title: 'Projects', path: '/projects'},
          { title: 'Employment', path: '/employment'}
     ]
    }
  },
};

</script>

<template>
  <v-app>
  <v-toolbar color="pink-lighten-4" app>
      <template v-slot:prepend>
        <v-img  @click="expand = !expand" class="mx-auto" :src="pupsrc" width="100"></v-img>
      </template>   
      <v-toolbar-title> 
        <v-btn variant='plain' to='/' size="medium">
          Tina's Online Resume
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-expand-transition>
        <v-card
          v-show="expand"
          class="mx-15"
          height="50"
          color ="pink-lighten-2"
          block
        >
        <v-card-text> Hello and welcome to Tina's personal onine profile!</v-card-text>
      </v-card>
    </v-expand-transition>

    <v-content>
      <router-view></router-view>
    </v-content>


      
    
  </v-app>
</template>


