<template>
    <div class="box">
        <div class="top">
            <p class="back">&lt; 返回</p>
            <p class="topt">购物车</p>
            <img src="@/assets/wode1.jpg" alt="">
        </div>
        

    </div>
</template>

<script>

import bottom from "@/components/bottom.vue"
export default {
    name: "gouwuche",
    components: {
        bottom
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
</style>

