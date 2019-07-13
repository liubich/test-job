<template>
  <div id="app">
    <NavBar :navItems = "navItems"/>
    <CarouselPage :pageTexts = "carouselPageTexts"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './components/NavBar.vue';
import CarouselPage from './components/CarouselPage.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    CarouselPage,
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
