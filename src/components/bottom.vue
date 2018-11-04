<template>
    <div class="box">
        <div class="bottom">
            <dl>
                <dt><img src="../assets/bottom-1.png" alt=""></dt>
                <dd class="sy">首页</dd>
            </dl>
            <dl>
                <dt><img src="../assets/bottom-2.png" alt=""></dt>
                <dd>商品列表</dd>
            </dl>
            <dl>
                <dt><img src="../assets/bottom-3.png" alt=""></dt>
                <dd>购物车</dd>
            </dl>
            <dl>
                <dt><img src="../assets/bottom-4.png" alt=""></dt>
                <dd>我的</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottom'
}
</script>

<style lang="scss">
@function px2rem($px) {
    @return $px / 150 * 1rem;
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
        // .sy {
        //     color: #ff5a00;
        // }
    }
}
</style>
