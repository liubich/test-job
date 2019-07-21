import Vue from 'vue';
import Vuex from 'vuex';
import * as mutationTypes from './mutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbarTexts: {
      navItems: [
        { text: 'Features', font: 'PT Sans, sans-serif' },
        { text: 'Support', font: 'Helvetica Neue, sans-serif' },
        { text: 'Blog', font: 'Helvetica Neue, sans-serif' },
      ],
      menuText: 'Menu',
    },
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
          imgName: 'phone',
        },
        {
          featureHeader: 'Fully Layered PSD',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
          imgName: 'lemon',
        },
        {
          featureHeader: 'Font Awesome Icons',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
          imgName: 'folder',
        },
        {
          featureHeader: 'HTML3 & CSS3 ',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
          imgName: 'tag',
        },
        {
          featureHeader: 'Email Template',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
          imgName: 'mail',
        },
        {
          featureHeader: 'Free to download',
          featureDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
          imgName: 'tie',
        },
      ],
    },
    footerPageTexts: {
      mainHeader: 'Keep in touch with us',
      secondHeader:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.',
      inputText: 'Enter your email to update',
      buttonText: 'SUBMIT',
      address: [
        'HALOVIETNAM LTD 66, Dang Van ngu, Dong Da Hanoi, Vietnam',
        'contact@halovietnam.com',
        '+844 35149182',
      ],
      linkColumns: [
        ['Examples', 'Shop', 'License'],
        ['Contact', 'About', 'Privacy Terms'],
        ['Download', 'Support', 'Documents'],
        ['Media', 'Blog', 'Forums'],
      ],
    },
    sendMailData: {
      service_id: 'mailgun',
      template_id: 'template_qUw1lDLV',
      user_id: 'user_ctJL5infGUuqJCvhaawOl',
      template_params: {
        to: '',
        madeBy: 'Oleksandr Liubich',
      },
    },
  },
  mutations: {
    [mutationTypes.SAVE_EMAIL](state, emailAddress) {
      state.sendMailData.template_params.to = emailAddress;
    },
  },
  actions: {
    sendEmail({ state, commit }, emailAddress) {
      commit('SAVE_EMAIL', emailAddress);
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.sendMailData),
      })
        .then((httpResponse) => {
          if (httpResponse.ok) {
            console.log('Your mail is sent!');
            return;
          }
          httpResponse.text().then(text => Promise.reject(text));
        })
        .catch((error) => {
          console.log(`Oops... ${error}`);
        });
    },
  },
});
