<script>
export default {
  data() {
    return {
      menuItems: [
          { title: 'Capstone Project', desc: 'My team developed a wearable system for health status monitoring' },
          { title: 'd', desc: 'ew'},
          { title: 'ed', desc: 'wew' },
          { title: 'ww', desc: 's' },
          { title: 'Souvenir Travel Journal', desc: 'a' }
     ]
    }
  },
};
</script>

<template>
   <v-container> 
    <v-btn color="pink-lighten-4" block height="100" v-ripple variant='flat'
        class="my-3" rounded
        v-for="item in menuItems"
        :key="item.title"> 
        {{ item.title }}
      </v-btn>

    </v-container>
</template>