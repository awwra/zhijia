<template>
    <div class="box">
        <div class="top">
            <p class="topo">&lt;返回</p>
            <p class="topt">个人中心</p>
            <img src="@/assets/wode1.jpg" alt="">
        </div>
        <div class="banner">
            <div class="sop">
                <router-link tag='p' to='/wode'>切换为买家</router-link>
                <p>今日销售额（元）</p>
            </div>
            <h1>0.00</h1>
            <div class="bot">
                <ul>
                    <li>今日拉新量</li>
                    <li class="sz">0</li>
                </ul>
                <ul>
                    <li>今日金币量</li>
                    <li class="sz">0</li>
                </ul>
            </div>
        </div>
        <div class="lists">
            <div class="list">
                <dl>
                    <dt><img src="../assets/xszx-1.png" alt=""></dt>
                    <dd>我的二维码</dd>
                </dl>
                <dl>
                    <dt><img src="../assets/xszx-2.png" alt=""></dt>
                    <dd>客户列表</dd>
                </dl>
                <dl>
                    <dt><img src="../assets/xszx-3.png" alt=""></dt>
                    <dd>客户订单</dd>
                </dl>
            </div>
            <div class="list">
                <dl>
                    <dt><img src="../assets/xszx-4.png" alt=""></dt>
                    <dd>金币活动</dd>
                </dl>
                <dl>
                    <dt><img src="../assets/xszx-5.png" alt=""></dt>
                    <dd>营销素材</dd>
                </dl>
                <dl>
                    <dt><img src="../assets/xszx-6.png" alt=""></dt>
                    <dd>数据中心</dd>
                </dl>
            </div>
        </div>

        <bottom></bottom>
    </div>
</template>

<script>
import bottom from "@/components/bottom.vue"
import wode from '@/pages/wode.vue'
export default {
    name: "xiaoshouzhongxin",
    components: {
        bottom, wode
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

.banner {
    height: px2rem(768);
    background: #3291e4;
    .sop {
        display: flex;
        justify-content: space-between;
        padding-top: px2rem(76);
        position: relative;
        p:nth-child(1) {
            position: absolute;
            height: px2rem(76);
            color: #769ec2;
            line-height: px2rem(76);
            background: #22649e;
            width: px2rem(345);
            text-align: center;
            border-radius: px2rem(38);
            left: px2rem(62);
        }
        p:nth-child(2) {
            width: 100%;
            color: #f8e4a4;
            line-height: px2rem(76);
            text-align: center;
        }
    }
    h1 {
        margin-top: px2rem(80);
        font-size: px2rem(150);
        color: #fff;
        text-align: center;
    }
    .bot {
        padding-top: px2rem(140);
        display: flex;
        ul {
            flex: 1;
            li {
                text-align: center;
                color: #fff;
                font-size: px2rem(50);
            }
            .sz {
                margin-top: px2rem(50);
                font-size: px2rem(55);
            }
        }
    }
}

.lists {
    .list {
        display: flex;
        justify-content: center;
        dl {
            height: px2rem(230);
            margin-top: px2rem(240);
            flex: 1;
            dt {
                height: px2rem(160);
                width: px2rem(160);
                margin: 0 auto;
                img{
                    width: 100%;
                }
            }
            dd{
                text-align: center;
            }
        }
    }
}
</style>
