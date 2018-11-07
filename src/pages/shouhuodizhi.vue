<template>
  <div class="box">
    <div class="top">
      <router-link tag="p" to="/wode" class="topo">&lt;返回</router-link>
      <p class="topt">选择地址管理</p>
    </div>
    <div class="dizhi">
      <div class="dz_list">
        <h3>黄瓜
          <span>186123456789</span>
        </h3>
        <div>
          <p>
            <a href="">[默认]</a>河北省保定市涿州市99号胡同丽水南北饭店西面安居二号楼三单元401室</p>
          <input type="button" value="编辑">
        </div>
      </div>
      <div class="dz_list">
        <h3>黄瓜
          <span>186123456789</span>
        </h3>
        <div>
          <p>河北省保定市涿州市99号胡同丽水南北饭店西面安居二号楼三单元401室</p>
          <input type="button" value="编辑">
        </div>
      </div>
      <div class="dz_list">
        <h3>黄瓜
          <span>186123456789</span>
        </h3>
        <div>
          <p>河北省保定市涿州市99号胡同丽水南北饭店西面安居二号楼三单元401室</p>
          <input type="button" value="编辑">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wode from "@/pages/wode"
export default {
  name: "shouhuodizhi",
  components: {
    wode
  }
}
</script>

<style lang='scss'>
@function px2rem($px) {
  @return $px / 150 * 1rem;
}

body {
  background: #f4f4f4;
}

.top {
  display: flex;
  height: px2rem(178);
  align-items: center;
  background: #fff;
  text-align: center;
  border-bottom: px2rem(1) solid #ccc;
  .topo {
    font-size: px2rem(50);
    padding-left: px2rem(50);
  }
  .topt {
    flex: 1;
    padding-right: px2rem(100);
    font-size: px2rem(66);
  }
}

.dizhi {
  .dz_list {
    height: px2rem(430);
    background: #fff;
    margin-top: px2rem(30);
    h3 {
      font-size: px2rem(60);
      margin-left: px2rem(85);
      padding-top: px2rem(85);
      span {
        margin-left: px2rem(95);
      }
    }
    div {
      margin-left: px2rem(85);
      margin-top: px2rem(15);
      display: flex;
      p {
        line-height: px2rem(80);
        padding-top: px2rem(30);
        padding-right: px2rem(100);
        color: #666;
        a {
          color: #ff5a00;
        }
      }
      input {
        width: px2rem(400);
        height: px2rem(116);
        border: none;
        border: px2rem(2) solid #ccc;
        border-radius: px2rem(15);
        background: #fff;
        margin-right: px2rem(70);
      }
    }
  }
}
</style>
