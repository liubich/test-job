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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
