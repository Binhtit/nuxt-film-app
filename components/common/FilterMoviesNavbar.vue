<template>
  <div class="col-md-6 d-flex justify-content-between">
    <span
      v-for="(type, index) in moviesTypes"
      :key="index"
      class="_filter-btn"
      :class="{ _active: filterActiveCode == type.code }"
      @click="setMoviesCodeType(type.code)"
      >{{ type.value }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    moviesTypes: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {
      filterActiveCode: '0',
    }
  },
  methods: {
    setMoviesCodeType(codeType) {
      this.filterActiveCode = codeType
      this.$emit('moviesCodeType', codeType)
    },
  },
}
</script>
