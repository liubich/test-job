import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navItems: [
      { text: 'Features', font: 'PT Sans' },
      { text: 'Support', font: 'Helvetica Neue' },
      { text: 'Blog', font: 'Helvetica Neue' },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
