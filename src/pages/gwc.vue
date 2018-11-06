<template>
    <div class="box">
        <div class="top">
            <router-link tag='p' to='/wode' class="back">&lt; 返回</router-link>
            <p class="topt">购物车</p>
            <img src="@/assets/wode1.jpg" alt="">
        </div>
        <div class="shouji">
            <input type="checkbox" class="xuank">
            <dl>
                <dt><img src="../assets/gwc-1.png" alt=""></dt>
                <dd>
                    <h4>vivX6Plus移动联通双4G手机双卡4GB+64GB 金色</h4>
                    <div>
                        <span>￥2988</span>
                        <p>
                            <input id="jianBtn" value="-">
                            <input id="shuliang" type="text" value="0" readonly>
                            <input id="jiaBtn" value="+">
                        </p>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="shouji">
            <input type="checkbox" class="xuank">
            <dl>
                <dt><img src="../assets/gwc-2.gif" alt=""></dt>
                <dd>
                    <h4>vivX6Plus移动联通双4G手机双卡4GB+64GB 金色</h4>
                    <div>
                        <span>￥2988</span>
                        <p>
                            <input id="jianBtn" value="-">
                            <input id="shuliang" type="text" value="0" readonly>
                            <input id="jiaBtn" value="+">
                        </p>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="shouji">
            <input type="checkbox" class="xuank">
            <dl>
                <dt><img src="../assets/gwc-1.png" alt=""></dt>
                <dd>
                    <h4>vivX6Plus移动联通双4G手机双卡4GB+64GB 金色</h4>
                    <div>
                        <span>￥2988</span>
                        <p>
                            <input id="jianBtn" value="-">
                            <input id="shuliang" type="text" value="0" readonly>
                            <input id="jiaBtn" value="+">
                        </p>
                    </div>
                </dd>
            </dl>
        </div>

    </div>
</template>

<script>
import wode from "@/pages/wode.vue"
import bottom from "@/components/bottom.vue"
export default {
    name: "gouwuche",
    components: {
        bottom, wode
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
    justify-content: space-between;
    height: px2rem(178);
    align-items: center;
    background: #fff;
    border-bottom: px2rem(1) solid #ccc;
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

.shouji {
    height: px2rem(400);
    margin-top: px2rem(30);
    background: #fff;
    display: flex;
    .xuank {
        margin-left: px2rem(60);
        margin-right: px2rem(70);
        margin: auto 0;
        margin-left: px2rem(60);
        margin-right: px2rem(70);
    }
    dl {
        display: flex;
        dt {
            width: px2rem(250);
            height: px2rem(206);
            margin-top: px2rem(55);
            margin-right: px2rem(80);
            img {
                width: 100%;
            }
        }
        dd {
            h4 {
                font-size: px2rem(50);
                line-height: px2rem(75);
                margin-top: px2rem(40);
                padding-right: 7%;
            }
            div {
                height: px2rem(105);
                margin-top: px2rem(40);
                span {
                    color: #ff5a00;
                    padding-top: px2rem(50);
                    float: left;
                }
                p {
                    display: flex;
                    width: px2rem(390);
                    margin-right: 4%;
                    float: right;
                    #jianBtn {
                        float: left;
                        width: px2rem(120);
                        border: px2rem(2) solid #ccc;
                        height: px2rem(105);
                        box-sizing: border-box;
                        margin-top: px2rem(1);
                        text-align: center;
                        border-top-left-radius: px2rem(15);
                        border-bottom-left-radius: px2rem(15);
                    }
                    #shuliang {
                        float: left;
                        width: px2rem(135);
                        border: px2rem(2) solid #ccc;
                        height: px2rem(105);
                        box-sizing: border-box;
                        margin-top: px2rem(1);
                        text-align: center;
                        border-left: none;
                        border-right: none;
                    }
                    #jiaBtn {
                        float: left;
                        width: px2rem(135);
                        border: px2rem(2) solid #ccc;
                        height: px2rem(105);
                        box-sizing: border-box;
                        margin-top: px2rem(1);
                        text-align: center;
                        border-top-right-radius: px2rem(15);
                        border-bottom-right-radius: px2rem(15);
                    }
                }
            }
        }
    }
}
</style>

