<template>
  <div id="app">
    <NavBar :pageTexts = "navbarTexts"/>
    <CarouselLogic :pageTexts = "carouselPageTexts"/>
    <FeaturesPage :pageTexts = "featuresPageTexts"/>
    <FooterPage :pageTexts = "footerPageTexts"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './components/NavBar.vue';
import CarouselLogic from './components/CarouselLogic.vue';
import FeaturesPage from './components/FeaturesPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    CarouselLogic,
    FeaturesPage,
    FooterPage,
  },
  computed: {
    ...mapState(['navbarTexts', 'carouselPageTexts', 'featuresPageTexts', 'footerPageTexts']),
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
