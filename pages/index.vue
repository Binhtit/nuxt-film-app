<template>
  <div class="container main__wrapper">
    <div class="row">
      <div class="col-md-9 p-0">
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
      <div class="col-md-3 p-0">
        <div class="home__list-movies-latest ml-2 scroll-dark">
          <List-movies-latest />
        </div>
      </div>
    </div>
    <div class="row bg-component">
      <section class="col-md-9 p-0 p-2">
        <list-card-movies :movies-arr="moviesArr" />
      </section>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ListMoviesLatest from '~/components/List-movies-latest.vue'
import ListCardMovies from '~/components/List-card-movies.vue'
export default {
  name: 'Home',
  components: { VueSlickCarousel, ListMoviesLatest, ListCardMovies },
  data() {
    return {
      moviesArr: [
        {
          id: 1,
          name: 'Vệt nắng cuối trời',
          auth: 'N/A',
          country: 'Nhật Bản',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 2,
          name: 'Ngày mai trời lại sáng',
          auth: 'N/A',
          country: 'Mỷ',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/doc-bo-tieu-dao-f3199.jpg',
        },
        {
          id: 3,
          name: 'Vệt nắng cuối trời',
          auth: 'N/A',
          country: 'Nhật Bản',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 4,
          name: 'Ngày mai trời lại sáng',
          auth: 'N/A',
          country: 'Mỷ',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/doc-bo-tieu-dao-f3199.jpg',
        },
        {
          id: 5,
          name: 'Vệt nắng cuối trời',
          auth: 'N/A',
          country: 'Nhật Bản',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 6,
          name: 'Ngày mai trời lại sáng',
          auth: 'N/A',
          country: 'Mỷ',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 7,
          name: 'Vệt nắng cuối trời',
          auth: 'N/A',
          country: 'Nhật Bản',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 8,
          name: 'Ngày mai trời lại sáng',
          auth: 'N/A',
          country: 'Mỷ',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 9,
          name: 'Vệt nắng cuối trời',
          auth: 'N/A',
          country: 'Nhật Bản',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 10,
          name: 'Ngày mai trời lại sáng',
          auth: 'N/A',
          country: 'Mỷ',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 11,
          name: 'Vệt nắng cuối trời',
          auth: 'N/A',
          country: 'Nhật Bản',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
        {
          id: 12,
          name: 'Ngày mai trời lại sáng',
          auth: 'N/A',
          country: 'Mỷ',
          episodes: 25,
          description:
            'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
          star: '4',
          date: '2021',
          image:
            'https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.home {
  &__list-movies-latest {
    height: 384px;
    background: var(--componentbackground);
    overflow-y: scroll;
  }
}
</style>
