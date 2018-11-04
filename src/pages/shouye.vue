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

    <div class="bottom">
      <dl>
        <dt><img src="../assets/shouye-6.png" alt=""></dt>
        <dd class="sy">首页</dd>
      </dl>
      <dl>
        <dt><img src="../assets/shouye-7.png" alt=""></dt>
        <dd>商品列表</dd>
      </dl>
      <dl>
        <dt><img src="../assets/shouye-8.png" alt=""></dt>
        <dd>购物车</dd>
      </dl>
      <dl>
        <dt><img src="../assets/shouye-9.png" alt=""></dt>
        <dd>我的</dd>
      </dl>
    </div>
  </div>
</template>

<script>
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
  position: relative;
  h2 {
    font-size: px2rem(60);
    text-align: center;
    line-height: px2rem(235)
  }
  span {
    position: absolute;
    display: block;
    width: px2rem(104);
    height: px2rem(5);
    top: px2rem(185);
    background: #cecece;
    left: 50%;
    margin-left: px2rem(-52);
  }
}

.lists {
  background: #fff;
  display: flex;
  .list {
    float: left;
    width: 45%;
    margin-left: 3%;
    height: px2rem(894);
    border: px2rem(2) solid #ccc;
    dl{
      dt{
        
        img{
          margin: 0 auto;
          width: 100%;
        }
      }
      dd{

      }
    }
  }
}


.bottom {
  height: px2rem(193);
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: px2rem(2) solid #ccc;
  background: #fff;
  margin-top: 10000px;
  display: flex;
  dl {
    text-align: center;
    flex: 1;
    justify-content: center;
    dt {
      width: px2rem(110);
      height: px2rem(90);
      margin: px2rem(20) auto;
      img {
        width: 100%;
      }
    }
    dd {
      font-size: px2rem(36);
      color: #666;
    }
    .sy {
      color: #ff5a00;
    }
  }
}
</style>
