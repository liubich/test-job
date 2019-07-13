<template>
<header>
  <h1>
    {{pageTexts.mainHeader}}
  </h1>
  <h2>
    {{pageTexts.secondHeader}}
  </h2>
  <p>
    {{pageTexts.simpleText}}
  </p>
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

</style>
