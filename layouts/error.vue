<template>
  <div class="row error-wrap">
    <div class="box">
      <div class="btn btn-warning">
        <NuxtLink class="_goHome text-white" to="/">Ôi Không !!!</NuxtLink>
      </div>
      <p v-if="error.statusCode === 404">
        <span class="error-title text-danger text-uppercase">error 404 !</span>
        <span class="text-warning text-uppercase">Đã xãy ra lỗi! </span>
        <br />
        <i>Có thể chúng tôi đã nâng cấp một số chức năng cho website</i><br />
        <span class="text-warning">
          Hãy xoá cache và lịch sử trình duyệt sau đó vào lại trang web
        </span>
        <a
          href="https://wiki.ngoisaoso.vn/Phien-ban-2-0/meo-xoa-cache-website-tren-trinh-duyet-cua-dien-thoai-di-dong-va-may-tinh-77.html"
          class="btn btn-outline-warning mx-auto mt-2"
        >
          Hướng dẫn xoá cache
        </a>
        <span class="error-space"></span>
        <span></span>
        <i>Chúng tôi rất xin lỗi!!.</i><br />
        <span>
          Quay trở về
          <NuxtLink class="text-warning" to="/">Trang chủ</NuxtLink>.
        </span>
      </p>
      <h2 v-else class="mt-5 text-warning">
        Đã có lỗi xãy ra. Chúng tôi rất xin lỗi!!. <br />
        Vui lòng trở về
        <NuxtLink class="text-white" to="/">Trang chủ</NuxtLink>.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  // layout: 'error', // you can set a custom layout for the error page
}
</script>

<style lang="css" scoped>
.error-wrap {
  margin: 0;
  padding: 0;
  height: 750px;
  padding-top: 115px;
}
.error-space {
  display: block;
  height: 275px;
}

.box {
  text-align: center;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.box ._goHome {
  font-size: 35px;
  font-weight: bold;
}
.box .btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box div {
  width: 250px;
  height: 80px;
  line-height: 80px;
  color: #ffc900;
  background-color: #ffc900;
  font-size: 280%;
  position: absolute;
  top: 385px;
  text-transform: capitalize;
  animation: moving 8s linear infinite;
  -webkit-animation: moving 8s linear infinite;
  -moz-animation: moving 8s linear infinite;
  -o-animation: moving 8s linear infinite;
  transform-origin: 50% -400%;
}

.box div::before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: #ffc900;
  border-radius: 50%;
  display: block;
  position: absolute;
  left: 45%;
  top: -135px;
}

.box div::after {
  content: '';
  width: 3px;
  height: 130px;
  background-color: #ffc900;
  display: block;
  position: absolute;
  left: 50%;
  top: -125px;
}

.box p {
  font-weight: 700;
  color: #fff;
  width: 300px;
}

.box p .error-title {
  display: block;
  font-size: 300%;
}

@keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}

@-webkit-keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}

@-moz-keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}

@-o-keyframes moving {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}
</style>
