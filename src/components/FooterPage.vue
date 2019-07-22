<template>
  <footer class="footer-page">
    <div class="footer-page__container">
      <h1 class="footer-page__main-header">{{pageTexts.mainHeader}}</h1>
      <h6 class="footer-page__second-header">{{pageTexts.secondHeader}}</h6>
      <div class="footer-page__subscription">
        <div class="footer-page__input-field-container">
          <input
            type="email"
            :class="[inputFieldClassString, 'footer-page__input-field']"
            @change="emailFieldOnChange"
            @keydown="emailOnKeyDown"
            :placeholder="pageTexts.inputText"
          >
          <p class="footer-page__input-error-desc">{{errorText}}</p>
        </div>
        <button
          class="footer-page__submit-button"
          @click="emailOnSubmit">
          {{pageTexts.buttonText}}
        </button>
      </div>
      <div class="footer-page__social-container">
        <img class="footer-page__social-icon" src="../../public/img/facebook.png" alt="facebook">
        <img class="footer-page__social-icon" src="../../public/img/twitter.png" alt="twitter">
        <img class="footer-page__social-icon" src="../../public/img/google.png" alt="google">
        <img class="footer-page__social-icon" src="../../public/img/pinterest.png" alt="pinterest">
      </div>
      <div class="footer-page__links links">
        <div class="links__address-container">
          <p
            v-for="(line, lineIndex) in pageTexts.address"
            :key="lineIndex" class="links__address">
            {{line}}
          </p>
        </div>
        <div class="links__links-columns">
          <div
            v-for="(column, columnIndex) in pageTexts.linkColumns"
            :key="columnIndex"
            class="links__link-column"
          >
            <a
              v-for="(link, linkIndex) in column"
              :key="linkIndex" class="links__link"
              href="#">
              {{link}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>

import { mapActions } from 'vuex';

export default {
  name: 'FooterPage',
  props: {
    pageTexts: {},
  },
  data() {
    return {
      emailAddress: '',
      incorrectEmail: false,
    };
  },
  computed: {
    inputFieldClassString() {
      return this.incorrectEmail ? 'footer-page__input-field_with-error' : '';
    },
    errorText() {
      return this.incorrectEmail ? `${this.emailAddress} is not a valid email address` : '';
    },
  },
  methods: {
    ...mapActions(['sendEmail']),
    emailFieldOnChange(event) {
      this.emailAddress = event.target.value;
    },
    emailOnKeyDown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.emailFieldOnChange(event);
        this.emailOnSubmit();
        return;
      }
      this.incorrectEmail = false;
    },
    emailOnSubmit() {
      if (this.checkEmail()) {
        this.sendEmail(this.emailAddress);
        return;
      }
      this.incorrectEmail = true;
    },
    checkEmail() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(String(this.emailAddress).toLowerCase());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-page {
  background-color: #010101;
  max-width: 1924px;
  min-width: 320px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
}

.footer-page__container {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center
}

.footer-page__main-header {
  font-size: 32px;
  font-family: "PT Sans", sans-serif;
  color: rgb(252, 219, 0);
  font-weight: bold;
  text-align: center;
}

.footer-page__second-header {
  padding: 20px 0;
  font-size: 20px;
  font-family: "PT Sans", sans-serif;
  color: rgb(137, 137, 137);
  line-height: 1.2;
  text-align: center;
}

.footer-page__subscription {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
}

.footer-page__input-field {
  border-radius: 5px;
  width: 580px;
  height: 50px;
  margin-bottom: 14px;
  border: 2px solid;
  border-color: black;
  border-radius: 4px;
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  color: rgb(137, 137, 137);
}

.footer-page__input-field_with-error {
  border-color: #ff7878;
  caret-color: #ff7878;
  margin: 0;
}

.footer-page__input-error-desc {
  font-size: 12px;
  color: #ff7878;
  padding: 3px 0;
  word-wrap: wrap;
}

.footer-page__submit-button {
  width: 130px;
  height: 50px;
  margin-left: 21px;
  border-style: none;
  border-radius: 4px;
  background-color: #fcdb00;
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.footer-page__submit-button:hover {
  transition: color 1s;
  color: white;
}

.footer-page__social-container {
  padding: 60px 0;
  display: flex;
}

.footer-page__social-icon {
  padding: 0 16px;
  cursor: pointer;
}

.links {
  padding: 60px 0 130px 0;
  display: flex;
  flex-wrap: wrap;
}

.links__links-columns {
  display: flex;
  flex-wrap: wrap;
}

.links__address-container {
  width: 190px;
  margin: 10px 60px 10px 20px;
}

.links__link-column {
  width: 80px;
  margin: 10px 60px 10px 20px;
  display: flex;
  flex-direction: column;
}

.links__address,
.links__link {
  text-decoration: none;
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  color: white;
  line-height: 1.25;
}

@media screen and (max-width: 850px) {
  .footer-page__input-field-container {
    width: 100%;
    padding: 0 18px;
  }

  .footer-page__input-field {
    width: 100%;
  }

  .footer-page__submit-button {
    margin: 0;
  }
}

</style>
