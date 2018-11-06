<template>
<div class="box">
    <div class="top">
        <p class="topo">&lt;返回</p>
        <p class="topt">个人中心</p>
        <img src="@/assets/wode1.jpg" alt="">
    </div>
    <div class="myshow">
        <div class="stop">
            <router-link tag='p' to='/xiaoshouzhongxin'>切换为销售</router-link>
            <p>金币规则</p>
        </div>
        <div class="myme">
            <div class="img">
                <img src="@/assets/wode2.jpg" alt="">
            </div>
            <div class="me">
                <p>挥着辣条的小手手</p>
                <h2>我的金币：2289</h2>
                <h3>签到得金币</h3>
            </div>
        </div>
    </div>
    <div class="dd">
        <div class="qian">
            <p>我要金币</p>
            <h3>完善个人资料得20金币</h3>
        </div>
        <div class="caozuo">
            <dl>
                <dt><img src="@/assets/wode3.jpg" alt=""></dt>
                <dd>金币商城</dd>
            </dl>
            <dl>
                <dt><img src="@/assets/wode4.jpg" alt=""></dt>
                <dd>分享活动</dd>
            </dl>
            <dl>
                <dt><img src="@/assets/wode5.jpg" alt=""></dt>
                <dd>邀请好友</dd>
            </dl>
            <dl>
                <dt><img src="@/assets/wode6.jpg" alt=""></dt>
                <dd>微信晒单</dd>
            </dl>
        </div>
    </div>
    <div class="dingdan">
      <div class="mydan">我的订单</div>
      <div class="numdan">
        <div class="fukuan">
          <p>2</p>
          <p>待付款</p>
        </div>
        <div class="fukuan">
          <p>36</p>
          <p>待发货</p>
        </div>
        <div class="fukuan">
          <p>13</p>
          <p>待收货</p>
        </div>
        <div class="fukuan">
          <p>9</p>
          <p>待评价</p>
        </div>
      </div>
    </div>
    <div class="map">
      <div>
        <p>收货地址</p>
        <h3>&gt;</h3>
      </div>
      <router-link tag='div' to='/gwc'>
        <p>我的购物车（3）</p>
        <h3>&gt;</h3>
      </router-link>
      <div>
        <p>我的电子券</p>
        <h3>&gt;</h3>
      </div>
    </div>
    <bottom></bottom>
</div>
    
</template>

<script>
import bottom from '@/components/bottom.vue'
import xiaoshouzhongxin from '@/pages/xiaoshouzhongxin.vue'
import gwc from "@/pages/gwc.vue"

export default {
  name: "wode",
  components: {
    bottom, xiaoshouzhongxin, gwc
  }
};
</script>

<style lang='scss'>
@function px2rem($px) {
  @return $px / 150 * 1rem;
}
.box {
  background: #f4f4f4;
  .top {
    display: flex;
    justify-content: space-between;
    height: px2rem(178);
    align-items: center;
    background: #fff;
    .topo {
      font-size: px2rem(54);
      padding-left: px2rem(50);
    }
    .topt {
      font-size: px2rem(66);
    }
    img {
      width: px2rem(90);
      padding-right: px2rem(50);
    }
  }
  .myshow {
    height: px2rem(768);
    background: #ee5253;
    border: #e4e4e4 solid;
    border-width: px2rem(3);
    .stop {
      display: flex;
      justify-content: space-between;
      padding-top: px2rem(66);
      font-size: px2rem(50);
      p:nth-child(1) {
        color: #c78384;
        line-height: px2rem(76);
        background: #a53839;
        width: px2rem(280);
        text-align: center;
        border-radius: px2rem(38);
        margin-left: px2rem(62);
      }
      p:nth-child(2) {
        color: #f8e4a4;
        line-height: px2rem(76);
        background: #a63939;
        width: px2rem(280);
        text-align: center;
        border-radius: px2rem(38);
        margin-right: px2rem(62);
      }
    }
    .myme {
      display: flex;
      .img {
        width: 30%;
        height: px2rem(484);
        img {
          width: 79%;
          display: block;
          margin: px2rem(100) px2rem(60);
        }
      }
      .me {
        margin-top: px2rem(48);
        p {
          color: #ffffff;
          font-size: px2rem(52);
          padding-bottom: px2rem(35);
        }
        h2 {
          color: #fff09c;
          font-size: px2rem(88);
          padding-bottom: px2rem(133);
        }
        h3 {
          color: #ee5253;
          font-size: px2rem(50);
          width: px2rem(400);
          text-align: center;
          border: solid;
          border-radius: px2rem(126);
          line-height: px2rem(126);
          height: px2rem(126);
          background: #fff;
        }
      }
    }
  }
  .dd {
    width: 94%;
    margin: auto auto;
    background: #fff;
    height: px2rem(524);
    margin-top: px2rem(56);
    .qian {
      height: px2rem(149);
      border-bottom: solid #e4e4e4;
      border-width: px2rem(3);
      display: flex;
      justify-content: space-between;
      line-height: px2rem(149);
      p {
        padding-left: px2rem(51);
        font-size: px2rem(52);
      }
      h3 {
        padding-left: px2rem(47);
        font-size: px2rem(52);
        color: #ff5a00;
      }
    }
    .caozuo {
      display: flex;
      justify-content: space-between;
      dl {
        width: 25%;
        text-align: center;
        margin-top: px2rem(102);
        img {
          display: block;
          margin: auto auto;
          width: 30%;
          margin-bottom: px2rem(28);
          height: px2rem(122);
        }
        dd {
          color: #666666;
          font-size: px2rem(53);
        }
      }
    }
  }
  .dingdan {
    width: 94%;
    margin: auto auto;
    background: #fff;
    height: px2rem(486);
    margin-top: px2rem(56);
    .mydan {
      height: px2rem(149);
      border-bottom: solid #e4e4e4;
      border-width: px2rem(3);
      display: flex;
      justify-content: space-between;
      line-height: px2rem(149);
      padding-left: px2rem(51);
      font-size: px2rem(52);
    }
    .numdan {
      display: flex;
      justify-content: space-around;
      text-align: center;
      align-items: center;
      .fukuan {
        p {
          line-height: px2rem(112);
          color: #666666;
          font-size: px2rem(53);
        }
        p:nth-child(1) {
          color: #0089d4;
          margin-top: px2rem(75);
        }
      }
    }
  }
  .map {
    height: px2rem(558);
    width: 94%;
    margin: auto auto;
    margin-bottom: px2rem(200);
    div {
      display: flex;
      justify-content:space-between;
      background: #fff;
      border-bottom: solid #e4e4e4;
      border-width: px2rem(2);
      padding-left: px2rem(52);
      p {
        line-height: px2rem(181);
        font-size: px2rem(52);
      }
      h3{
        line-height: px2rem(181);
        font-size: px2rem(52);
        padding-right: px2rem(88);
      }
    }
    div:first{
      margin-top: px2rem(88);
    }
  }
}
</style>
