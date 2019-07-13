import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navItems: [
      { text: 'Features', font: 'PT Sans, sans-serif' },
      { text: 'Support', font: 'Helvetica Neue, sans-serif' },
      { text: 'Blog', font: 'Helvetica Neue, sans-serif' },
    ],
    carouselPageTexts: {
      mainHeader: 'Inspire your inspiration',
      secondHeader: 'Simple to use for your app, products showcase and your inspiration',
      simpleText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit ',
    },
  },
  mutations: {},
  actions: {},
});
