<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'Education', path: '/education' },
        { title: 'Personal Projects', path: '/projects' },
        { title: 'Employment and Volunteer Work', path: '/employment' }
      ]
    }
  },
};
</script>

<template>
  <v-btn color="pink-lighten-4" block height="160" v-ripple variant='flat' class="my-3 mr-10" v-for="item in menuItems"
    :key="item.title" :to="item.path"> {{ item.title }}</v-btn>

</template>