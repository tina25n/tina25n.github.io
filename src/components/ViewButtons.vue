<script>
export default {
  data() {
    return {
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
    <v-btn color="pink-lighten-4" block height="190" v-ripple variant='flat'
        class="my-3" rounded
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"> {{ item.title }}</v-btn>

</template>