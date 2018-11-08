<template>
    <div class="box">
         <div class="header">
            <ul>
                <router-link tag="li" to="/shangpinliebiao">&lt;&nbsp;返回</router-link>
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
        <div class="main">
          <div class="main1">
            <p>规格选择:<span>4G全网通&nbsp;金色&nbsp;32GB&nbsp;1部</span></p>
            <ul>
              <li>选择颜色</li>
              <li>
                <a href="">玫瑰金</a>
                <a href="">白色</a>
                <a href="">深空灰</a>
                <a href="">金色</a>
              </li>
            </ul>
            <ul>
              <li>选择容量</li>
              <li>
                <a href="">2GB&nbsp;128GB</a>
                <a href="">2GB&nbsp;256GB</a>
                <a href="">2GB&nbsp;32GB</a>
              </li>
            </ul>
            <ol>
              <li>购买数量</li>
              <li><span>-</span><span>8</span><span>+</span></li>
            </ol>
          </div>
        </div>
        <div class="stop">
          <ul>
            <li>商品介绍</li>
            <li>商品参数</li>
          </ul>
        </div>
        <div class="js">
          <img src="../assets/spxq2.png" alt="">
          <div class="banner1">
            <dl>
              <dt><img src="../assets/spxq3.png" alt=""></dt>
              <dd>摄像头</dd>
            </dl>
            <dl>
              <dt><img src="../assets/spxq4.png" alt=""></dt>
              <dd>卡槽</dd>
            </dl>
            <dl>
              <dt><img src="../assets/spxq5.png" alt=""></dt>
              <dd>背部指纹识别</dd>
            </dl>
            <dl>
              <dt><img src="../assets/spxq6.png" alt=""></dt>
              <dd>时尚多色选择</dd>
            </dl>
          </div>
          <div class="banner2">
            <img src="../assets/spxq7.png" alt="">
            <div class="tu">
              <img src="../assets/spxq8.png" alt="">
            </div>
            <p>&lt;&nbsp;返回首页</p>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <dl>
                <dt><img src="../assets/spxq9.png" alt=""></dt>
                <dd>客服</dd>
              </dl>
              <dl>
                <dt><img src="../assets/spxq10.png" alt=""></dt>
                <dd>购物车</dd>
              </dl>
            </li>
            <li>加入购物车</li>
            <li>立即购买</li>
          </ul>
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
  .money {
    border-bottom: px2rem(40) solid #f5f5f5;
    padding-bottom: px2rem(50);
    p {
      font-size: px2rem(58);
      padding-left: 5%;
      padding-right: 5%;
      line-height: px2rem(80);
      padding-top: 3%;
    }
    p:nth-child(2) {
      color: #ccc;
    }
    p:last-child {
      color: #ff5a00;
      font-size: px2rem(70);
      span {
        color: #ccc;
        padding-left: 57%;
        font-size: px2rem(58);
      }
    }
  }
  .main {
    border-bottom: px2rem(40) solid #f5f5f5;
    .main1 {
      width: 90%;
      margin: 0 auto;
      font-size: px2rem(60);
      p {
        height: px2rem(160);
        line-height: px2rem(160);
        border-bottom: px2rem(4) solid #f0f0f0;
        span {
          color: #ff5a00;
          padding-left: 5%;
        }
      }
      ul:nth-child(2) {
        border-bottom: px2rem(4) solid #f0f0f0;
        li {
          line-height: px2rem(120);
          a {
            display: inline-block;
            width: px2rem(246);
            height: px2rem(113);
            background: #f5f5f5;
            text-align: center;
            line-height: px2rem(113);
            margin: 2% 2% 5% 2%;
            border-radius: 10%;
          }
          a:first-child {
            color: #d3d3d3;
          }
          a:nth-child(2) {
            color: #fff;
            background: #ff5a00;
          }
        }
      }
      ul:nth-child(3) {
        li {
          line-height: px2rem(120);
          a {
            display: inline-block;
            width: px2rem(380);
            height: px2rem(113);
            background: #f5f5f5;
            text-align: center;
            line-height: px2rem(113);
            margin: 2% 2% 5% 2%;
            border-radius: 10%;
          }
          a:first-child {
            color: #d3d3d3;
          }
          a:nth-child(2) {
            color: #fff;
            background: #ff5a00;
          }
        }
      }
      ol {
        li {
          line-height: px2rem(120);
        }
        li:last-child {
          width: px2rem(392);
          height: px2rem(102);
          border: px2rem(4) solid #f0f0f0;
          border-radius: 10%;
          span {
            display: inline-block;
            width: px2rem(112);
            text-align: center;
          }
          span:nth-child(2) {
            display: inline-block;
            width: px2rem(160);
            border-left: px2rem(4) solid #f0f0f0;
            border-right: px2rem(4) solid #f0f0f0;
          }
        }
      }
    }
  }
  .stop {
    height: px2rem(165);
    border-bottom: px2rem(20) solid #f5f5f5;
    ul {
      display: flex;
      li {
        flex: 1;
        line-height: px2rem(165);
        font-size: px2rem(53);
        text-align: center;
      }
      li:first-child {
        color: #ff7326;
        border-bottom: px2rem(2) solid #ff7326;
      }
    }
  }
  .js {
    height: px2rem(2060);
    img{
      width: 100%;
    }
    .banner1 {
      display: flex;
      height: px2rem(780);
      background: #efefef;
      dl {
        flex: 1;
        padding-left: 2%;
        dd {
          text-align: center;
          line-height: px2rem(130);
        }
      }
      dl:first-child {
        padding-left: 3%;
      }
      dl:last-child {
        padding-right: 5%;
      }
    }
    .banner2 {
      background: #fafafa;
      position: relative;
      .tu {
        width: px2rem(830);
        height: px2rem(703);
        padding-top: px2rem(100);
        margin: 0 auto;
      }
      p {
        width: px2rem(350);
        height: px2rem(155);
        font-size: px2rem(55);
        background: #ee5253;
        color: #fff;
        text-align: center;
        line-height: px2rem(155);
        position: absolute;
        top: px2rem(545);
        left: 0;
      }
    }
  }
  .bottom {
    height: px2rem(186);
    display: flex;
    ul {
      width: 100%;
      display: flex;
      li {
        flex: 1;
        font-size: px2rem(56);
        line-height: px2rem(185);
        color: #fff;
        dl{
          flex: 1;
          line-height: px2rem(70);
          text-align: center;
          dt{
            img{
              width: px2rem(75);
              height: px2rem(75);
              padding-top: px2rem(20);
            }
          }
        }
      }
      li:first-child{
        border-top: px2rem(4) solid #eee;
        color: #ccc;
        display: flex;
      }
      li:nth-child(2){
        background: #ff9000;
        text-align: center;
        
      }
      li:nth-child(3){
        text-align: center;
        background: #ff5a00;
      }
    }
  }
}
</style>
