import Vue from 'vue';
import Vuex from 'vuex';
import * as mutationTypes from './mutationTypes';
import * as pagesTexts from './pagesTexts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textsLoaded: false,
    navbarTexts: {},
    carouselPageTexts: {},
    featuresPageTexts: {},
    footerPageTexts: {},
    sendMailData: {
      service_id: 'gmail',
      template_id: 'template_qUw1lDLV',
      user_id: 'user_ctJL5infGUuqJCvhaawOl',
      template_params: {
        to: '',
        madeBy: 'Oleksandr Liubich',
      },
    },
    sendStatus: {
      errorOnSend: false,
      errorDescription: null,
    },
  },
  mutations: {
    [mutationTypes.SAVE_EMAIL](state, emailAddress) {
      state.sendMailData.template_params.to = emailAddress;
    },
    [mutationTypes.SAVE_TEXTS](state, texts) {
      state.navbarTexts = texts.navbarTexts;
      state.carouselPageTexts = texts.carouselPageTexts;
      state.featuresPageTexts = texts.featuresPageTexts;
      state.footerPageTexts = texts.footerPageTexts;
      state.textsLoaded = true;
    },
    [mutationTypes.SAVE_SEND_ERROR](state, errorDescription) {
      state.sendStatus.errorOnSend = true;
      state.sendStatus.errorDescription = errorDescription;
    },
    [mutationTypes.SAVE_SEND_SUCCESS](state) {
      state.sendStatus.errorOnSend = false;
      state.sendStatus.errorDescription = null;
    },
  },
  actions: {
    sendEmail({ state, commit }, emailAddress) {
      commit(mutationTypes.SAVE_EMAIL, emailAddress);
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.sendMailData),
      })
        .then((httpResponse) => {
          if (httpResponse.ok) {
            commit(mutationTypes.SAVE_SEND_SUCCESS);
            return;
          }
          httpResponse.text().then(text => Promise.reject(text));
        })
        .catch((error) => {
          commit(mutationTypes.SAVE_SEND_ERROR, error);
        });
    },
    loadTexts({ commit }) {
      commit(mutationTypes.SAVE_TEXTS, {
        navbarTexts: pagesTexts.navbarTexts,
        carouselPageTexts: pagesTexts.carouselPageTexts,
        featuresPageTexts: pagesTexts.featuresPageTexts,
        footerPageTexts: pagesTexts.footerPageTexts,
      });
    },
  },
});
