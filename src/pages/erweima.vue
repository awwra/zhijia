<template>
    <div class="box">
        <div class="top">
            <router-link tag='p' to='/xiaoshouzhongxin' class="back">&lt; 返回</router-link>
            <p class="topt">我的二维码</p>
            <img src="@/assets/wode1.jpg" alt="">
        </div>
        <div class="erwei">
            <dl>
                <dt><img src="../assets/erweima-1.png" alt=""></dt>
                <dd>销售专属二维码</dd>
            </dl>
        </div>
        <div class="botom">
            <p>1、客户或微信好友通过扫描二维码就会关注门店的公众号，并且成为你的专属客户;</p>
            <p>2、你每新增一位专属客户，就会获得+30的金币奖励</p>
            <p>3、关注后的客户可在“我的客户”中显示</p>
            <p>4、在门店邀请购买过产品的客户扫描该二维码，并成功提交客户购买信息，可帮助购买客户获得金币，购买金额满500元就赠送客户100个金币，以此类推</p>
        </div>
    </div>
</template>

<script>
import xiaoshouzhongxin from "@/pages/xiaoshouzhongxin"

export default {
    name: "erweima",
    components: {
        xiaoshouzhongxin
    }
}
</script>

<style lang='scss'>
@function px2rem($px) {
    @return $px / 150 * 1rem;
}

.top {
    display: flex;
    justify-content: space-between;
    height: px2rem(178);
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .back {
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

.erwei{
    background: #fff;
    margin-bottom: px2rem(250);
    dl{
        margin-top: px2rem(190);
        dt{
            width: px2rem(1020);
            height: px2rem(1020);
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
        dd{
            text-align: center;
            margin-top: px2rem(55);
            font-size: px2rem(45);
        }
    }
}

.botom{
    width: 80%;
    margin: 0 10%;
    p{
        line-height: px2rem(65);
        color: #666;
        margin-bottom: px2rem(70);
    }
}
</style>
