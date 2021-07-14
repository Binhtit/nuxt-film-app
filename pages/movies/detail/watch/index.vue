<template>
  <div class="container detail-movie">
    <div class="row">
      <div class="col-md-9 p-0">
        <div class="_banner-wrap">
          <div class="_banner-bg">
            <img
              class="_banner-bg__img"
              :src="movie.film.banner"
              alt="banner-movie"
            />
            <div class="_banner-bg__blur"></div>
          </div>
          <div class="row _content-wrap">
            <div class="col-md-3 p-0 _avatar">
              <img
                class="_img-thumbnail"
                :src="movie.film.image"
                alt="thumbnail"
              />
            </div>
            <div class="col-md-9 _content">
              <h2 class="_content__title">{{ movie.film.name }}</h2>
              <p class="_content__subtitle">{{ movie.film.name }}</p>
              <div class="_content__description scroll-yellow--small">
                {{ movie.film.description }}
              </div>
              <div class="row mt-4 text-white">
                <div class="col-md-6 _rate">
                  <div class="_rate__label mr-2 text-warning">Đánh giá:</div>
                  <div class="_star">
                    <i
                      v-for="star in 5"
                      :key="star"
                      :class="{ active: star <= movie.film.star }"
                      class="fas fa-star"
                    ></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <span class="_episodes mx-3"
                    ><i class="fab fa-stack-overflow mr-2 text-warning"></i>
                    {{ movie.film.episodes }} Tập
                  </span>
                  <span class="_date"
                    ><i class="far fa-calendar-alt mr-2 text-warning"></i
                    >{{ movie.film.release_date | getYear }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-0">
        <div class="home__movies-latest ml-2">
          <CommonListMoviesLatest />
        </div>
      </div>
    </div>
    <!-- <div class="row bg-component mt-2 _watch"></div> -->
    <div class="row bg-component mt-2">
      <!-- <component :is="watchComponent" class="col-md-12 mb-4"></component> -->
      <ParticularWatchMovie class="col-md-12 mb-4" :eps="movie.eps" />
      <div class="detail-movie__navbar col-md-12">
        <span>Thông tin phim</span>
      </div>
      <div class="detail-movie__infor-movie col-md-12">
        <div class="row pt-2">
          <div class="col-md-6">
            <ul>
              <li>
                <span class="text-warning mr-2">Danh mục: </span
                ><span class="text-white">{{ movie.film.category_name }}</span>
              </li>
              <li>
                <span class="text-warning mr-2">Thể loại:</span>
                <span class="text-white">{{ movie.film.type_name }}</span>
              </li>
              <li>
                <span class="text-warning mr-2">Quốc gia:</span>
                <span class="text-white">{{ movie.film.country_name }}</span>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul>
              <li>
                <span class="text-warning mr-2">Độ phân giải:</span
                ><span class="text-white">{{ movie.film.type_name }}</span>
              </li>
              <li>
                <span class="text-warning mr-2">Ngôn ngữ:</span
                ><span class="text-white">Việt sub</span>
              </li>
              <li>
                <span class="text-warning mr-2">IMDb:</span>
                <span class="text-white">{{ movie.film.imdb }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filters from '~/mixins/filters.js'

export default {
  mixins: [filters],
  async asyncData(context) {
    const idMovie = context.query.id
    const movie = await context.$axios.$get(
      `http://127.0.0.1:8000/api/movies/detail/episodes/${idMovie}`
    )
    return { movie }
  },
  data() {
    return {
      watchComponent: 'ParticularWatchWatchMovie',
      movie: [],
    }
  },
}
</script>

<style lang="scss">
.detail-movie {
  ._banner-wrap {
    position: relative;
    ._banner-bg {
      &__img {
        width: 100%;
        height: 448px;
      }
      &__blur {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #000000b6;
      }
    }
    ._content-wrap {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      margin: 0 20px;
      ._avatar {
        position: relative;
        ._img-thumbnail {
          width: 100%;
        }
      }
      ._content {
        &__title {
          color: var(--yellow1);
          font-weight: bold;
        }
        &__subtitle {
          color: var(--white);
        }
        &__description {
          height: 100px;
          font-size: 13px;
          overflow-y: scroll;
          color: var(--gray2);
        }
        ._rate {
          display: flex;
        }
      }
    }
  }
  &__navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--yellow1);
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    width: 100%;
    height: 45px;
    border-bottom: 2px solid var(--mainbackground);
  }
  &__infor-movie {
    ul {
      li {
        margin: 10px 0;
      }
    }
  }
}
</style>
