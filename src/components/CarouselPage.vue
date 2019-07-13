<template>
  <header class="carousel-page">
    <div class="carousel-page__container">
      <div class="carousel-page__left-container">
        <div class="carousel-page__texts-container">
          <h1 class="carousel-page__main-header">
            {{pageTexts.mainHeader}}
          </h1>
          <h2 class="carousel-page__secondary-header">
            {{pageTexts.secondHeader}}
          </h2>
          <p class="carousel-page__description">
            {{pageTexts.simpleText}}
          </p>
        </div>
      </div>
      <div class="carousel-page__icons-container">

      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: 'CarouselPage',
  props: {
    pageTexts: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.carousel-page {
  max-width: 1924px;
  height: 625px;
  display: flex;
  justify-content: center;
  background-color: #fcdb00;
}

.carousel-page__container {
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
}

.carousel-page__left-container {
  padding: 0 18px;
  width: 400px;
  display: flex;
  flex-direction: column;
}

.carousel-page__left-container {
  display: flex;
}

.carousel-page__texts-container {
  height: 560px;
  padding: 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-page__main-header {
  font-size: 32px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
}

.carousel-page__secondary-header {
  padding: 22px 0;
  font-size: 20px;
  font-family: "PT Sans", sans-serif;
  color: rgb(49, 56, 65);
}

.carousel-page__description {
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  color: rgb(85, 85, 85);
}

</style>
