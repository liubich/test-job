<template>
  <div id="app">
    <NavBar :navItems = "navItems"/>
    <CarouselLogic :pageTexts = "carouselPageTexts"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './components/NavBar.vue';
import CarouselLogic from './components/CarouselLogic.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    CarouselLogic,
  },
  computed: {
    ...mapState(['navItems', 'carouselPageTexts']),
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
