<template>
  <div id="app">
    <TinyOne :navItems = "navItems"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TinyOne from './components/TinyOne.vue';

export default {
  name: 'app',
  components: {
    TinyOne,
  },
  computed: {
    ...mapState(['navItems']),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
