<template>
    <div class="big">
        <header>
            <p>
                <img src="../assets/fanhui.png">返回
            </p>
            <h1>个人信息</h1>
            <img class="shezhi" src="../assets/wode1.jpg">
        </header>
        <div class="main">
            <ul>
                <li>Hello,挥着辣条的小手手！</li>
                <li>您已经连续签到0天</li>
                <li><button>立即签到</button></li>
                <li>每天签到1次,奖励5金币</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "gerenzhongxin"
}
</script>

<style lang="scss">
@function px2rem($px) {
    @return $px / 150 * 1rem;
}

header {
    display: flex;
    padding: px2rem(50);
    justify-content: space-between;
    align-items: center;
    p {
        font-size: px2rem(56);
        display: flex;
        align-items: center;
        img {
            height: px2rem(100);
        }
    }
    h1 {
        font-size: px2rem(60);
        text-align: center;
        line-height: px2rem(100);
    }
    .shezhi {
        width: px2rem(90);
        height: px2rem(24);
    }
}
.main{
    background: #8ac349;
    display: flex;
    justify-content: center;
    ul{
        text-align: center;
        padding-top: px2rem(100);
        color: #fff;
        li{
            font-size: px2rem(60);
            button{
                width: px2rem(490);
                height: px2rem(160);
                background: #f8ebc5;
                border: none;
                border-radius: px2rem(80);
                color: #ee5253;
                font-size: px2rem(70);
            }
        }
        li:nth-child(2){
            padding-top: px2rem(40);
        }
        li:nth-child(3){
            padding-top: px2rem(140);
        }
        li:nth-child(4){
            padding-top: px2rem(170);
            padding-bottom: px2rem(80);
        }
    }
}
</style>
