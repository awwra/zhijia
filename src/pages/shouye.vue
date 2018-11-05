<template>
  <div class="box">
    <header>
      <figure class="left">
        <img src="../assets/shouye-1.png" alt="">
      </figure>
      <input type="text" placeholder="输入商品名称">
      <figure class="right">
        <img src="../assets/shouye-3.png" alt="">
        <span></span>
      </figure>
    </header>
    <nav class="tabs">
      <ul>
        <li>业务办理</li>
        <li>分期付款</li>
        <li>售后维修</li>
        <li>在线客服</li>
      </ul>
    </nav>
    <swiper class="banner" :options="swiperOption">
      <swiper-slide><img src="../assets/shouye-4.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/shouye-4.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/shouye-4.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/shouye-4.png" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="znsb">
      <dl>
        <dt><img src="../assets/shouye-5.png" alt=""></dt>
        <dd>您现在金币数为
          <a>2288</a>,,缺
          <a>200金币</a>就可以兑换换位B2智能手表</dd>
      </dl>
    </div>
    <div class="tit">
      <h2>新品热卖</h2>
      <span></span>
    </div>
    <div class="lists">
      <div class="list">
        <dl>
          <dt><img src="../assets/shouye-10.png" alt=""></dt>
          <dd>
            <p>荣耀畅玩6X铂光金标版3+32G全网通原装</p>
            <h5>￥7288</h5>
          </dd>
        </dl>
      </div>
      <div class="list">
        <dl>
          <dt><img src="../assets/shouye-11.png" alt=""></dt>
          <dd>
            <p>荣耀畅玩6X铂光金标版3+32G全网通原装</p>
            <h5>￥7288</h5>
          </dd>
        </dl>
      </div>
    </div>
    <div class="tit">
      <h2>运营商套餐</h2>
      <span></span>
    </div>
    <div class="yys">
      <div class="yys1">
        <dl>
          <dt><img src="../assets/shouye-12.png" alt=""></dt>
          <dd>
            <h5>苹果 iPhone 7</h5>
            <p>32GB 金色4G全网通</p>
          </dd>
        </dl>
      </div>
      <div class="yys1">
        <dl>
          <dt><img src="../assets/shouye-12.png" alt=""></dt>
          <dd>
            <h5>苹果 iPhone 7</h5>
            <p>32GB 金色4G全网通</p>
          </dd>
        </dl>
      </div>
      <div class="yys1">
        <dl>
          <dt><img src="../assets/shouye-12.png" alt=""></dt>
          <dd>
            <h5>苹果 iPhone 7</h5>
            <p>32GB 金色4G全网通</p>
          </dd>
        </dl>
      </div>
      <div class="yys1">
        <dl>
          <dt><img src="../assets/shouye-12.png" alt=""></dt>
          <dd>
            <h5>苹果 iPhone 7</h5>
            <p>32GB 金色4G全网通</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="tit">
      <h2>热销商品</h2>
      <span></span>
    </div>
    <div class="lists">
      <div class="list">
        <dl>
          <dt><img src="../assets/shouye-10.png" alt=""></dt>
          <dd>
            <p>荣耀畅玩6X铂光金标版3+32G全网通原装</p>
            <h5>￥7288</h5>
          </dd>
        </dl>
      </div>
      <div class="list">
        <dl>
          <dt><img src="../assets/shouye-11.png" alt=""></dt>
          <dd>
            <p>荣耀畅玩6X铂光金标版3+32G全网通原装</p>
            <h5>￥7288</h5>
          </dd>
        </dl>
      </div>
    </div>
    <div class="lists">
      <div class="list">
        <dl>
          <dt><img src="../assets/shouye-10.png" alt=""></dt>
          <dd>
            <p>荣耀畅玩6X铂光金标版3+32G全网通原装</p>
            <h5>￥7288</h5>
          </dd>
        </dl>
      </div>
      <div class="list">
        <dl>
          <dt><img src="../assets/shouye-11.png" alt=""></dt>
          <dd>
            <p>荣耀畅玩6X铂光金标版3+32G全网通原装</p>
            <h5>￥7288</h5>
          </dd>
        </dl>
      </div>
    </div>
    <div class="imgs">
      <img src="../assets/shouye-13.png" alt="">
    </div>
    <div class="tit">
      <h2>门店头条</h2>
      <span></span>
    </div>
    <div class="liebiao">
      <div class="lb">
        <dl>
          <dt><img src="../assets/shouye-14.png" alt=""></dt>
          <dd>
            <p>牛津大学报告：人工智能的表现超过人类的几率为50%</p>
            <span><img src="../assets/shouye-15.png" alt=""> 63<img src="../assets/shouye-16.png" class="yanjing" alt=""> 2968</span>
          </dd>
        </dl>
      </div>
      <div class="lb">
        <dl>
          <dt><img src="../assets/shouye-14.png" alt=""></dt>
          <dd>
            <p>牛津大学报告：人工智能的表现超过人类的几率为50%</p>
            <span><img src="../assets/shouye-15.png" alt=""> 63<img src="../assets/shouye-16.png" class="yanjing" alt=""> 2968</span>
          </dd>
        </dl>
      </div>
      <div class="lb">
        <dl>
          <dt><img src="../assets/shouye-14.png" alt=""></dt>
          <dd>
            <p>牛津大学报告：人工智能的表现超过人类的几率为50%</p>
            <span><img src="../assets/shouye-15.png" alt=""> 63<img src="../assets/shouye-16.png" class="yanjing" alt=""> 2968</span>
          </dd>
        </dl>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from '@/components/bottom.vue'

export default {
  name: "shouye",
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
  },
  components: {
    bottom
  }
};
</script>

<style lang="scss">
@function px2rem($px) {
  @return $px / 150 * 1rem;
}

body {
  background: #f4f4f4;
}

header {
  display: flex;
  height: px2rem(127);
  background: #fff;
  padding-top: px2rem(50);
  .left {
    width: 25%;
    text-align: center;
    img {
      height: px2rem(127);
      vertical-align: middle;
    }
  }
  input {
    width: 67%;
    border: none;
    background: #f1f1f1 url(../assets/shouye-2.png) no-repeat 90% center;
    background-size: px2rem(65);
    border-radius: px2rem(70);
    outline: none;
    padding-left: px2rem(90);
    font-size: px2rem(50);
  }
  .right {
    width: 18%;
    text-align: center;
    img {
      width: px2rem(92);
      height: px2rem(93);
      vertical-align: middle;
    }
    span {
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }
}

nav {
  height: px2rem(200);
  background: #fff;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: px2rem(200);
      text-align: center;
      font-size: px2rem(52);
    }
  }
}

.banner {
  background: #fff;
  img {
    display: block;
    width: 100%;
  }
}

.znsb {
  background: #fff;
  height: px2rem(300);
  margin-bottom: px2rem(30);
  dl {
    display: flex;
    dt {
      width: px2rem(126);
      height: px2rem(221);
      margin: px2rem(30) px2rem(60) 0 px2rem(90);
      img {
        width: 100%;
      }
    }
    dd {
      width: 80%;
      font-size: px2rem(55);
      line-height: px2rem(75);
      margin-top: px2rem(75);
    }
  }
}

.tit {
  height: px2rem(235);
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: px2rem(60);
  }
  span {
    text-align: center;
    display: block;
    width: px2rem(104);
    height: px2rem(5);
    background: #cecece;
    margin-top: px2rem(20);
  }
}

.lists {
  background: #fff;
  display: flex;
  padding-bottom: px2rem(100);
  .list {
    float: left;
    width: 45%;
    margin-left: 3%;
    height: px2rem(894);
    border: px2rem(2) solid #ccc;
    dl {
      dt {
        margin: px2rem(50) auto;
        width: px2rem(228);
        height: px2rem(490);
        img {
          width: 100%;
        }
      }
      dd {
        p {
          font-size: px2rem(52);
          margin-left: px2rem(40);
          line-height: px2rem(80);
        }
        h5 {
          font-size: px2rem(48);
          color: #ff5a00;
          margin-top: px2rem(40);
          margin-left: px2rem(35);
        }
      }
    }
  }
}

.yys {
  background: #fff;
  margin-bottom: px2rem(100);
  .yys1 {
    float: left;
    width: 45%;
    margin-left: 3%;
    height: px2rem(300);
    background: #dee5e7;
    border: px2rem(2) solid #ccc;
    margin-bottom: px2rem(30);
    dl {
      display: flex;
      dt {
        margin: px2rem(50) px2rem(35) px2rem(50) px2rem(60);
        width: px2rem(107);
        height: px2rem(202);
        img {
          width: 100%;
        }
      }
      dd {
        h5 {
          font-size: px2rem(52);
          margin-top: px2rem(80);
        }
        p {
          font-size: px2rem(42);
          margin-top: px2rem(35);
          color: #666;
        }
      }
    }
  }
}

.imgs {
  width: 100%;
  margin: px2rem(25) 0;
  img {
    display: block;
    width: 100%;
  }
}

.liebiao {
  width: 100%;
  background: #fff;
  padding-bottom: px2rem(350);
  .lb {
    width: 94%;
    margin-left: 3%;
    border: px2rem(1) solid #ccc;
    margin-bottom: px2rem(60);
    dl {
      display: flex;
      height: px2rem(332);
      dt {
        width: px2rem(332);
        height: px2rem(332);
        img {
          width: px2rem(332);
          height: px2rem(332);
        }
      }
      dd {
        height: px2rem(332);
        padding-left: px2rem(66);
        border-left: none;
        p {
          line-height: px2rem(75);
          font-size: px2rem(50);
          margin-top: px2rem(50);
        }
        span {
          margin-bottom: -20px;
          margin-top: px2rem(45);
          display: inline-block;
          color: #666;
          img {
            width: px2rem(45);
            height: px2rem(39);
          }
          .yanjing {
            margin-left: px2rem(50);
          }
        }
      }
    }
  }
}

</style>
