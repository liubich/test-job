<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <CarouselPage :pageTexts="pageTexts"/>
    </swiper-slide>
    <swiper-slide>
      <CarouselPage :pageTexts="pageTexts"/>
    </swiper-slide>
    <swiper-slide>
      <CarouselPage :pageTexts="pageTexts"/>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
  </swiper>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import CarouselPage from './CarouselPage.vue';

export default {
  name: 'CarouselLogic',
  props: {
    pageTexts: {},
  },
  components: {
    swiper,
    swiperSlide,
    CarouselPage,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class=${className} swiper-pagination-bullet-custom></span>`;
          },
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 50px;
}

.swiper-pagination-bullets.swiper-pagination-bullet-custom {
  width: 14px;
  height: 14px;
  opacity: 0;
  background: #feed80;
}

.swiper-pagination-bullet-active {
  background: #ffffff;
}
</style>
