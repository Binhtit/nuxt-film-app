<template>
  <div class="list-name-movies text-white">
    <div class="_title mx-auto">
      <p class="text-center">PHIM MỚI CẬP NHẬT</p>
    </div>
    <ul class="_list scroll-dark">
      <nuxt-link
        v-for="(movie, id) in moviesLatestArr"
        :key="id"
        :to="('/movies/detail/' + movie.name + '?id=' + movie.id) | removeMark"
      >
        <li>
          {{ movie.name }}
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import removeMark from '~/mixins/filters.js'

export default {
  mixins: [removeMark],
  data() {
    return {}
  },
  computed: {
    moviesLatestArr() {
      return this.$store.state.moviesLatestArr
    },
  },
}
</script>

<style lang="scss">
.list-name-movies {
  background: var(--componentbackground);
  ._title {
    padding-top: 10px;
    position: relative;
    line-height: 19px;
    text-align: center;
    p {
      font-weight: 600;
    }
  }

  ._list {
    padding: 10px;
    height: 100%;
    max-height: 405px;
    overflow-y: scroll;
    li {
      width: 100%;
      padding: 8px 6px 5px 8px;
      font-size: 13px;
      border-width: 0 0 1px;
      border-style: solid;
      border-color: #171515;
      margin-bottom: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      white-space: nowrap;
      vertical-align: middle;
      color: #ce9090;
      transition: 0.3s all ease;
      cursor: pointer;
      &:hover {
        color: var(--white);
        background: #ce9090;
      }
    }
  }
}
</style>
