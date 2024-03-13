<script>
export default {
  data() {
    return {
      menuItems: [
          { title: 'Interests', path: '/interests'},
          { title: 'Education and Projects', path: '/education'},
          { title: 'Employment and Volunteer Work', path: '/employment'}
     ]
    }
  },
};
</script>

<template>
    <v-btn color="pink-lighten-4" block height="175" v-ripple variant='flat'
        class="my-3" rounded
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"> {{ item.title }}</v-btn>

</template>