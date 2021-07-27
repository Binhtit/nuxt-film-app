<template>
  <div class="header _navbar mb-2" :class="{ _ismobile: $device.isMobile }">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <nuxt-link class="_logo navbar-brand" to="/"
        ><img src="/logo.png" alt="hoạt hình trung quốc"
      /></nuxt-link>
      <button class="navbar-toggler bar-stack">
        <span class="navbar-toggler-icon" @click="controllMenuMobile()"></span>
        <div v-show="menuMobile" class="menu-mobile">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ml-3" @click="controllMenuMobile(false)">
              <nuxt-link to="/2d-movies" class="_t-hover-yellow _link"
                >HOẠT HÌNH 2D<span class="sr-only">(current)</span></nuxt-link
              >
            </li>
            <li class="nav-item ml-4" @click="controllMenuMobile(false)">
              <nuxt-link to="/3d-movies" class="_t-hover-yellow _link"
                >HOẠT HÌNH 3D<span class="sr-only">(current)</span></nuxt-link
              >
            </li>
          </ul>
        </div>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active ml-3">
            <nuxt-link to="/2d-movies" class="_t-hover-yellow"
              >HOẠT HÌNH 2D<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <li class="nav-item ml-4">
            <nuxt-link to="/3d-movies" class="_t-hover-yellow"
              >HOẠT HÌNH 3D<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
        </ul>
        <form class="search-form form-inline my-2 my-lg-0">
          <input
            v-model="searchName"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Tìm kiếm tên anime"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-warning my-2 px-4 my-sm-0"
            type="submit"
            @click.prevent="removeSearchRs()"
          >
            <i class="fas fa-search"></i>
          </button>
          <div
            v-show="searchName && !EmptySearch"
            class="_search-result bg-component scroll-yellow--small"
            @click="removeSearchRs()"
          >
            <nuxt-link
              v-for="(rs, index) in searchResult"
              :key="index"
              class="d-flex _movie-rs"
              :to="('movies/detail/' + rs.name + '?id=' + rs.id) | removeMark"
            >
              <div>
                <img
                  :src="rs.image"
                  :alt="rs.name"
                  :title="rs.name"
                  class="_image"
                />
              </div>
              <div class="_detail">
                <div class="mt-2 d-flex">
                  <i class="_icon fas fa-video"></i>
                  <div class="_detail__name">{{ rs.name }}</div>
                </div>
                <div class="d-flex mt-3">
                  <i class="_icon far fa-calendar-alt"></i>
                  <span>{{ rs.date }}</span>
                </div>
                <div class="_star">
                  <span class="_star__label">Sao:</span>
                  <i
                    v-for="star in 5"
                    :key="star"
                    :class="{ active: star <= rs.star }"
                    class="fas fa-star"
                  ></i>
                </div>
              </div>
            </nuxt-link>
          </div>
        </form>
        <div>
          <div class="nav-item dropdown">
            <a class="nav-lang dropdown-toggle" href="#" role="button">
              Lang
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  filters: {
    removeMark(value) {
      return value
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/ /g, '-')
        .toLowerCase()
    },
  },
  data() {
    return {
      searchName: '',
      EmptySearch: false,
      menuMobile: false,
    }
  },
  computed: {
    moviesArr() {
      return this.$store.state.moviesArr
    },
    searchResult() {
      return this.$store.state.moviesArr.filter((movie) => {
        const newName = this.removeMarkLowerCase(movie.name)
        const newSearchName = this.removeMarkLowerCase(this.searchName)
        return newName.includes(newSearchName)
      })
    },
    countClick() {
      return this.$store.state.countClick
    },
  },
  watch: {
    searchName() {
      return (this.EmptySearch = false)
    },
    countClick() {
      if (this.searchName) {
        return (this.EmptySearch = true)
      }
    },
  },
  methods: {
    removeMarkLowerCase(value) {
      return value
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
    },
    removeSearchRs() {
      this.searchResult.splice(0, this.searchResult.length)
      this.searchName = ''
      setTimeout(() => {
        this.EmptySearch = true
      }, 0)
    },
    controllMenuMobile(value = 'toggle') {
      if (value === 'toggle') {
        return (this.menuMobile = !this.menuMobile)
      }
      return (this.menuMobile = value)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 66px;
  position: relative;
  // .bar-stack {
  // }
  &._navbar {
    .navbar {
      background: var(--componentbackground);
      width: 100%;
      ._logo {
        img {
          height: 38px;
        }
      }
      a {
        color: var(--white);
      }
      .navbar-nav {
        font-weight: bold;
      }
      .nav-lang {
        margin-left: 16px;
        color: var(--gray2);
        font-size: 13px;
      }
      .search-form {
        position: relative;
        input {
          background: var(--dark1);
          border: 2px solid var(--gray1);
        }
        ._search-result {
          width: 100%;
          max-height: 420px;
          padding: 0 10px;
          overflow-y: scroll;
          position: absolute;
          z-index: 99;
          top: 42px;
          ._movie-rs {
            height: 150px;
            border-bottom: 2px solid;
          }
          ._image {
            height: 100%;
            width: 90px;
          }
          ._detail {
            color: var(--gray2);
            padding: 20px 10px 10px 10px;
            ._icon {
              color: var(--yellow1);
              margin-right: 10px;
            }
            &__name {
              text-overflow: ellipsis;
              width: 125px;
              overflow: hidden;
              white-space: nowrap;
            }
            ._star {
              margin-top: 10px;
              &__label {
                font-size: 13px;
                font-weight: bold;
                color: var(--yellow1);
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  &._ismobile {
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
    }
    .bar-stack {
      .menu-mobile {
        position: absolute;
        right: 0;
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        z-index: 3;
        top: 100%;
        background: #313534e0;
        border-radius: 0 0 20px 20px;
        padding: 12px;
        .navbar-nav {
          width: 100%;
          .nav-item {
            margin: 0 !important;
            width: 100%;
            padding: 25px 0;
            border: 2px solid;
            border-radius: 10px;
            ._link {
              // padding: 15px 0;
            }
          }
        }
      }
    }
  }
}
</style>
