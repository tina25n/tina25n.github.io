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
          { title: 'Interests', path: '/interests'},
          { title: 'Education/Projects', path: '/education'},
          { title: 'Employment/Volunteer', path: '/employment'}
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
        <v-btn variant='plain' to='/' size="large">
          Tina's Personal Online Resume
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
        ></v-card>
    </v-expand-transition>

    <v-content>
      <router-view></router-view>
    </v-content>


      
    
  </v-app>
</template>


