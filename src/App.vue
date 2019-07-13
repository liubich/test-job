<template>
  <div id="app">
    <NavBar :navItems = "navItems"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
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
