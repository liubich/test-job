<template>
  <main class="features-page">
    <div class="features-page__container">
      <h1 class="features-page__main-header">{{pageTexts.mainHeader}}</h1>
      <h2 class="features-page__second-header">{{pageTexts.secondHeader}}</h2>
      <div class="features-page__features-container">
        <div
          v-for="(feature, index) in pageTexts.features"
          :key="index"
          class="features-page__feature feature"
        >
          <div class="feature__icon-container">
            <img
              class="feature__image"
              :src="`../../img/${feature.imgName}.png`"
              :alt="feature.imgName"
            >
          </div>
          <dl class="feature__container">
            <dt class="feature__header">{{feature.featureHeader}}</dt>
            <dd class="feature__description">{{feature.featureDescription}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  name: 'FeaturesPage',
  props: {
    pageTexts: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.features-page {
  max-width: 1924px;
  display: flex;
  justify-content: center;
}

.features-page__container {
  width: 100%;
  max-width: 960px;
  min-width: 320px;
  padding: 100px 0 175px 0;
}

.features-page__main-header {
  padding: 20px 0;
  font-size: 32px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  text-align: center;
}

.features-page__second-header {
  font-size: 20px;
  font-family: "PT Sans", sans-serif;
  line-height: 1.2;
  color: rgb(49, 56, 65);
  text-align: center;
}

.features-page__features-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.feature {
  padding-top: 85px;
  display: flex;
  align-items: flex-start;
  width: 320px;
}

.feature__icon-container {
  width: 25%;
}

.feature__image {
  margin: 0 auto;
}

.feature__container {
  width: 75%;
}

.feature__header {
  padding-bottom: 15px;
  font-size: 22px;
  font-family: "PT Sans", sans-serif;
}

.feature__description {
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  color: rgb(137, 137, 137);
  line-height: 1.25;
}

</style>
