<template>
  <div class="container detail-movie">
    <!-- <h1>{{ slug }}</h1> -->
    <div class="row">
      <div class="col-md-9 p-0">
        <div class="_banner-wrap">
          <div class="_banner-bg">
            <img
              class="_banner-bg__img"
              src="https://hoathinh247.tv/timthumb.php?src=https://img.vncdn.xyz/static/images/1625072053-thien-hoang-chien-than-f3290.jpg&w=800&h=320"
              alt="banner-movie"
            />
            <div class="_banner-bg__blur"></div>
          </div>
          <div class="row _content-wrap">
            <div class="col-md-3 p-0 _avatar">
              <img
                class="_img-thumbnail"
                src="https://img.vncdn.xyz/uploads/images/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara-f3357.jpg"
                alt="thumbnail"
              />
              <div class="btn-wrap">
                <button class="btn btn-outline-warning font-weight-bold">
                  XEM PHIM
                </button>
              </div>
            </div>
            <div class="col-md-9 _content">
              <h2 class="_content__title">Thiên Hoang Chiến Thần</h2>
              <p class="_content__subtitle">Thiên Hoang Chiến Thần</p>
              <div class="_content__description scroll-yellow--small">
                Cốt truyện trong phim Thiên Hoang Chiến Thần được lấy bối cảnh
                trong một thế giới hoang dã, khi đó loài người chỉ là một chủng
                tộc cực kỳ yếu ớt, đối mặt với nguy cơ sinh tồn khắc nghiệt, và
                nó là huyết thống của các chủng tộc khác. Cũng bởi vì bốn vị
                thần bảo vệ của loài người đã già, chưa tìm được người kế vị phù
                hợp, bốn vị cuối cùng đã quyết định hòa nhập máu thịt của mình
                vào thiên hạ hoang dã, chọn người kế vị mới theo ý trời, để mong
                rằng sau này có thể tìm được người được chọn, để nắm giữ vận
                mệnh bảo vệ loài người
              </div>
              <div class="row mt-4 text-white">
                <div class="col-md-6 _rate">
                  <div class="_rate__label mr-2 text-warning">Đánh giá:</div>
                  <div class="_rate__star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <span class="_episodes mx-3"
                    ><i class="fab fa-stack-overflow mr-2 text-warning"></i>25
                    Tập
                  </span>
                  <span class="_date"
                    ><i class="far fa-calendar-alt mr-2 text-warning"></i
                    >2001</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-0">
        <div class="home__movies-latest ml-2">
          <CommonListMoviesLatest :movies-latest-arr="moviesLatestArr" />
        </div>
      </div>
    </div>
    <div class="row bg-component mt-2">
      <div class="detail-movie__navbar col-md-12">
        <span>Thông tin phim</span>
      </div>
      <div class="detail-movie__infor-movie col-md-12">
        <div class="row pt-2">
          <div class="col-md-6">
            <ul>
              <li>
                <span class="text-warning mr-2">Trạng thái: </span
                ><span class="text-white">N/A</span>
              </li>
              <li>
                <span class="text-warning mr-2">Thể loại:</span>
                <span class="text-white">N/A</span>
              </li>
              <li>
                <span class="text-warning mr-2">Quốc gia:</span>
                <span class="text-white">N/A</span>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul>
              <li>
                <span class="text-warning mr-2">Độ phân giải:</span
                ><span class="text-white">N/A</span>
              </li>
              <li>
                <span class="text-warning mr-2">Ngôn ngữ:</span
                ><span class="text-white">Việt sub</span>
              </li>
              <li>
                <span class="text-warning mr-2">IMDb:</span>
                <span class="text-white">N/A</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    // eslint-disable-next-line no-console
    // console.log('param is' + params)
    // eslint-disable-next-line no-debugger
    debugger
    // const slug = await params.slug // When calling /abc the slug will be "abc"
    const slug = await context.query.id // When calling /abc the slug will be "abc"
    return { slug }
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
        .btn-wrap {
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          background: #00000096;
          height: 57px;

          .btn {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%);
          }
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
}
</style>
