<template>
  <div id="app">
    <Barrage></Barrage>
    <router-view />
  </div>
</template>

<script>
import Barrage from '@/components/Barrage.vue';
export default {
  name: 'App',
  components: {
    Barrage,
  },
};
</script>
