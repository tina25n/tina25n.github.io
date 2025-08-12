<script>
import { RouterLink, RouterView } from 'vue-router'
import puppy from '@/assets/images/daschund.png'
import TN_Resume from '@/assets/images/TN_Resume_2023_Public.pdf'

export default {
  name: "App",
  data() {
    return {
      pupsrc: puppy,
      expand: false,
      resume: TN_Resume,
      menuItems: [
          { title: 'Education', path: '/education'},
          { title: 'Employment', path: '/employment'},
          { title: 'Projects', path: '/projects'},
          { title: 'Test', path: '/test'}
      ],
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
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
          <v-btn variant='plain' to='/' size="medium" v-if="width >= 1100"> 
          Tina's Personal Website
          </v-btn>
          <v-btn variant='plain' to='/' size="medium" v-else-if="width < 1100 "> 
          Tina
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
          color ="pink-lighten-2"
          block
        >
        <v-card-text class="text-body-2 text-left"> <v-icon icon="mdi-email-heart-outline"></v-icon>
          The best way to contact me is by sending an email to nguyen.tina25@yahoo.com. Until then, you can save and review my resume here.
          <a :href ="resume" download ="Tina_N_Resume.pdf">
          <v-btn style="float: right" size="small" class = "mb-2 mt=1" > Download Resume </v-btn> </a>
        </v-card-text>
      </v-card>
    </v-expand-transition>

    

    <v-content>
      <router-view></router-view>
    </v-content>


      
    
  </v-app>
</template>


