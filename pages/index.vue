<template>
  <div class="container main__wrapper">
    <div class="row">
      <div class="col-md-10 p-0">
        <VueSlickCarousel :arrows="false" :dots="true" :autoplay="true">
          <div>
            <img src="@/assets/image/home-slide1.png" alt="image-slide" />
          </div>
          <div>
            <img src="@/assets/image/home-slide1.png" alt="image-slide" />
          </div>
          <div>
            <img src="@/assets/image/home-slide1.png" alt="image-slide" />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="col-md-2 p-0">
        <div class="home__list-movies-v scroll-dark">
          <List-movies-v />
        </div>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ListMoviesV from '~/components/List-movies-v.vue'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel, ListMoviesV },
}
</script>

<style lang="scss">
.home {
  &__list-movies-v {
    height: 384px;
    overflow-y: scroll;
  }
}
</style>
