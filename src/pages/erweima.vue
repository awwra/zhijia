<template>
    <div class="box">
        <div class="top">
            <p class="back">&lt; 返回</p>
            <p class="topt">我的二维码</p>
            <img src="@/assets/wode1.jpg" alt="">
        </div>
        <div class="erwei">
            <dl>
                <dt><img src="../assets/erweima-1.png" alt=""></dt>
                <dd>销售专属二维码</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: "erweima",
    
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
</style>
