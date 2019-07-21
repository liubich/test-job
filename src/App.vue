<template>
  <div id="app">
    <NavBar v-if="textsLoaded" :pageTexts = "navbarTexts"/>
    <CarouselLogic v-if="textsLoaded" :pageTexts = "carouselPageTexts"/>
    <FeaturesPage v-if="textsLoaded" :pageTexts = "featuresPageTexts"/>
    <FooterPage v-if="textsLoaded" :pageTexts = "footerPageTexts"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
  created() {
    this.loadTexts();
  }, 
  computed: {
    ...mapState(['navbarTexts', 'carouselPageTexts', 'featuresPageTexts', 'footerPageTexts', 'textsLoaded']),
  },
  methods: {
    ...mapActions(['loadTexts']),
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
