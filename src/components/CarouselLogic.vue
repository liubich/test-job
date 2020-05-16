<template>
  <Swiper :options="swiperOption">
    <SwiperSlide>
      <CarouselPage :pageTexts="pageTexts"/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselPage :pageTexts="pageTexts"/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselPage :pageTexts="pageTexts"/>
    </SwiperSlide>
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
  </Swiper>
</template>


<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import CarouselPage from './CarouselPage.vue';

export default {
  name: 'CarouselLogic',
  props: {
    pageTexts: {},
  },
  components: {
    Swiper,
    SwiperSlide,
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
