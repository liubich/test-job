<template>
  <footer class="footer-page">
    <div class="footer-page__container">
      <h1 class="footer-page__main-header">{{pageTexts.mainHeader}}</h1>
      <h6 class="footer-page__second-header">{{pageTexts.secondHeader}}</h6>
      <div class="footer-page__subscription">
        <input type="text" class="footer-page__input-field" :placeholder="pageTexts.inputText">
        <button class="footer-page__submit-button">{{pageTexts.buttonText}}</button>
      </div>
      <div class="footer-page__social-container">
        <img class="footer-page__social-icon" src="../../public/img/facebook.png" alt="facebook">
        <img class="footer-page__social-icon" src="../../public/img/twitter.png" alt="twitter">
        <img class="footer-page__social-icon" src="../../public/img/google.png" alt="google">
        <img class="footer-page__social-icon" src="../../public/img/pinterest.png" alt="pinterest">
      </div>
      <div class="footer-page__links links">
        <div class="links__address-container">
          <p class="links__address">{{pageTexts.address}}</p>
        </div>
        <div v-for="(column, columnIndex) in pageTexts.linkColumns" :key="columnIndex" class="links__link-column">
          <a v-for="(link, linkIndex) in column" :key="linkIndex" class="links__link" href="#">{{link}}</a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterPage',
  props: {
    pageTexts: {},
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
  padding: 20px 0;
}

.footer-page__input-field {
  border-radius: 5px;
  width: 580px;
  height: 50px;
  border-style: none;
  border-radius: 4px;
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  color: rgb(137, 137, 137);
}

.footer-page__submit-button {
  width: 130px;
  height: 54px;
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
  padding: 70px 0 140px 0;
  display: flex;
}

.links__address-container {
  width: 190px;
  margin: 0 60px 0 20px;
}

.links__link-column {
  width: 80px;
  margin: 0 60px 0 20px;
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

</style>
