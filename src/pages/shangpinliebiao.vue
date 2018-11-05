<template>
    <div class="box">
        <div class="header">
            <ul>
                <li>&lt;&nbsp;返回</li>
                <li>商品列表</li>
                <li><img src="../assets/splb1.png" alt=""></li>
            </ul>
        </div>
        <div class="search">
            <input type="text" placeholder="请输入关键词">
        </div>
        <div class="nav">
            <ul>
                <li><b>销量</b></li>
                <li>新品<img src="../assets/splb3.png" alt=""></li>
                <li>价格<img src="../assets/splb3.png" alt=""></li>
            </ul>
        </div>
        <div class="modal">
            <ul>
                <li>请选择类目</li>
                <li>请选择品牌<img src="../assets/splb3.png" alt=""></li>
                <li>请选择型号<img src="../assets/splb3.png" alt=""></li>
            </ul>
        </div>
        <div class="main">
          <div class="main1">
            <dl>
              <dt><img src="../assets/splb4.png" alt=""></dt>
              <dd>
                <p>荣耀畅玩6X铂光金标板3+32G全网通原装</p>
                <p>￥9208</p>
              </dd>
            </dl>
          </div>
          <div class="main2">
            <dl>
              <dt><img src="../assets/splb4.png" alt=""></dt>
              <dd>
                <p>荣耀畅玩6X铂光金标板3+32G全网通原装</p>
                <p>￥9208</p>
              </dd>
            </dl>
          </div>
          <div class="main1">
            <dl>
              <dt><img src="../assets/splb4.png" alt=""></dt>
              <dd>
                <p>荣耀畅玩6X铂光金标板3+32G全网通原装</p>
                <p>￥9208</p>
              </dd>
            </dl>
          </div>
          <div class="main2">
            <dl>
              <dt><img src="../assets/splb4.png" alt=""></dt>
              <dd>
                <p>荣耀畅玩6X铂光金标板3+32G全网通原装</p>
                <p>￥9208</p>
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
  name: "shangpinliebiao",
  components:{
    bottom
  }
};
</script>

<style lang='scss'>
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
  .search {
    width: 100%;
    height: px2rem(230);
    text-align: center;
    line-height: px2rem(230);
    input {
      width: px2rem(1100);
      height: px2rem(119);
      border: none;
      border-radius: px2rem(20);
      vertical-align: center;
      background: url(../assets/splb2.png) no-repeat #eee px2rem(40);
      background-size: px2rem(85);
      padding-left: 12%;
    }
  }
  .nav {
    width: 100%;
    height: px2rem(100);
    border-bottom: px2rem(1) solid #e4e4e4;
    ul {
      line-height: px2rem(100);
      display: flex;
      li {
        flex: 1;
        text-align: center;
        color: #999;
        font-size: px2rem(53);
        img {
          width: px2rem(24);
          height: px2rem(16);
          padding-left: 2%;
        }
      }
      li:first-child {
        color: #ff5a00;
        b {
          width: px2rem(120);
          border-bottom: px2rem(6) solid #ff5a00;
          padding-bottom: px2rem(15);
        }
      }
    }
  }
  .modal {
    width: 100%;
    border-bottom: px2rem(2) solid #ececec;
    ul {
      margin-bottom: px2rem(30);
      padding-top: 1.8%;
      display: flex;
      li {
        flex: 1;
        height: px2rem(110);
        background: #f5f5f5;
        border-radius: px2rem(15);
        margin-left: 2%;
        line-height: px2rem(110);
        color: #999;
        font-size: px2rem(53);
        text-align: center;
        img {
          width: px2rem(24);
          height: px2rem(16);
          padding-left: 2%;
        }
      }
      li:first-child {
        color: #000;
      }
      li:last-child {
        margin-right: 2%;
      }
    }
  }
  .main {
    // height: px2rem(2273);
    width: 100%;
    background: #f4f4f4;
    padding-bottom: px2rem(2270);
    .main1 {
      // height: px2rem(896);
      border: px2rem(2) solid #f0f0f0;
      background: #fff;
      width: 45%;
      float: left;
      margin-left: 4%;
      margin-top: 3%;
      dl {
        dt {
          img {
            width: 59%;
            height: 54%;
            padding-left: 21%;
            padding-top: 10%;
          }
        }
        dd {
          padding-left: 5%;
          padding-right: 12%;
          padding-top: px2rem(60);
          p {
            line-height: px2rem(80);
            font-size: px2rem(53);
          }
          p:last-child {
            color: #ff5a00;
          }
        }
      }
    }
    .main2 {
      // height: px2rem(896);
      border: px2rem(2) solid #f0f0f0;
      background: #fff;
      width: 45%;
      float: left;
      margin-left: 2%;
      margin-top: 3%;
      dl {
        dt {
          img {
            width: 59%;
            height: 54%;
            padding-left: 21%;
            padding-top: 10%;
          }
        }
        dd {
          padding-left: 5%;
          padding-right: 12%;
          padding-top: px2rem(60);
          p {
            line-height: px2rem(80);
            font-size: px2rem(53);
          }
          p:last-child {
            color: #ff5a00;
          }
        }
      }
    }
  }
}
</style>
