<template>
  <div class="admicro">
    <ins id="ccadnet_362_599" style="display: none"> </ins>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      ;(function (w, d, a) {
        // debugger
        if (w.ccnads) {
          // eslint-disable-next-line no-undef
          return ccnads(a)
        }
        if (w.ccnAdsQueue) {
          return w.ccnAdsQueue.push(a)
        }
        w.ccnAdsQueue = []
        w.ccnAdsQueue.push(a)
        // eslint-disable-next-line no-var
        var s = d.createElement('script')
        s.async = true
        s.src = 'https://static.adconnect.vn/main.js'
        d.head.appendChild(s)
      })(window, document, {
        id: 'ccadnet_362_599',
        // eslint-disable-next-line object-shorthand
        fallback: function () {},
      })
    }, 500)
  },
}
</script>

<style lang="scss">
.admicro {
  width: 100%;
  background: var(--componentbackground);
  display: flex;
  justify-content: center;
}
</style>
