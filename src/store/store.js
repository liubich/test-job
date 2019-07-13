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
  },
  mutations: {

  },
  actions: {

  },
});
