<template>
    <div class="box">
         <div class="header">
            <ul>
                <li>&lt;&nbsp;返回</li>
                <li>红米noto4</li>
                <li><img src="../assets/splb1.png" alt=""></li>
            </ul>
        </div>
        <swiper class="banner" :options="swiperOption">
            <swiper-slide><img src="../assets/spxq1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/spxq1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/spxq1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/spxq1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/spxq1.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="money">
            <p>小米黑色联通超级无敌通话手机非常不锈钢金属边框英寸屏超窄边</p>
            <p>5英寸紧凑金属机身，单身握持刚刚好;1200万大像素拍照，有800万实时美颜自拍</p>
            <p>￥4800<span>当前库存：20</span></p>
        </div>
    </div>
</template>

<script>
export default {
  name: "shangpinxiangqing",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@function px2rem($px) {
  @return $px / 150 * 1rem;
}
.box {
  width: 100%;
  .header {
    width: 100%;
    height: px2rem(180);
    border-bottom: px2rem(1) solid #e4e4e4;
    ul {
      line-height: px2rem(180);
      display: flex;
      li {
        flex: 1;
        text-align: center;
        font-size: px2rem(67);
        img {
          width: px2rem(90);
          height: px2rem(22);
        }
      }
    }
  }
  .banner {
    background: #fff;
    height: px2rem(1250);
    img {
      display: block;
      width: 100%;
    }
  }
  .money{
      p:nth-child(2){
          color: #ccc;
      }
  }
}
</style>
