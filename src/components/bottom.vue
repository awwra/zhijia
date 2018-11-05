<template>
    <div class="box">
        <div class="bottom">
            <router-link tag='dl' to='/'>
                    <dt><img src="../assets/bottom-1.png" alt=""></dt>
                    <dd class="sy">首页</dd>
            </router-link>

            <router-link tag='dl' to='/shangpinliebiao'>
                <dt><img src="../assets/bottom-2.png" alt=""></dt>
                <dd>商品列表</dd>
            </router-link>
            <router-link tag='dl' to='/gouwuche'>
                <dt><img src="../assets/bottom-3.png" alt=""></dt>
                <dd>购物车</dd>
            </router-link>
            <router-link tag='dl' to='/wode'>
                <dt><img src="../assets/bottom-4.png" alt=""></dt>
                <dd>我的</dd>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottom',
}
</script>

<style lang="scss">
@function px2rem($px) {
    @return $px / 150 * 1rem;
}

.box{
    position: relative;
}

.bottom {
    height: px2rem(193);
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: px2rem(2) solid #ccc;
    background: #fff;
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
        } // .sy {
        //     color: #ff5a00;
        // }
    }
}
</style>
