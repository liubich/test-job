<template>
  <main class="features-page">
    <div class="features-page__container">
      <h1 class="features-page__main-header">{{pageTexts.mainHeader}}</h1>
      <h2 class="features-page__second-header">{{pageTexts.secondHeader}}</h2>
      <div class="features-page__features-container">
        <div v-for="(feature, index) in pageTexts.features" :key="index" class="features-page__feature feature">
          <img class="feature__image" :src="`../../img/${feature.imgName}.png`" :alt="feature.imgName">
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

.features-page__container {
  width: 100%;
  max-width: 960px;
  padding: 100px 0;
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
  color: rgb(49, 56, 65);
  text-align: center;
}

</style>
