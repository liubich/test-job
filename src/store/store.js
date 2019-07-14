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
    featuresPageTexts: {
      mainHeader: 'Tinyone features',
      secondHeader:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.',
      features: [
        {
          featureHeader: 'Fully Responsive',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
        },
        {
          featureHeader: 'Fully Layered PSD',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
        },
        {
          featureHeader: 'Font Awesome Icons',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
        },
        {
          featureHeader: 'HTML3 & CSS3 ',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
        },
        {
          featureHeader: 'Email Template',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
        },
        {
          featureHeader: 'Free to download',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
        },
      ],
    },
  },
  mutations: {},
  actions: {},
});
