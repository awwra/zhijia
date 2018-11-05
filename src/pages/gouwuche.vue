<template>
    <div class="big">
        <header>
            <p>
                <img src="../assets/fanhui.png">返回
            </p>
            <h1>购物车</h1>
            <h2></h2>
        </header>
        <div class="main">
             <img src="../assets/gouwuche.png">
             <p>很抱歉,暂无相关商品！</p>
             <div class="btn">
                 <button>现在就去</button>
                 <button>人人中心</button>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "gouwuche"
}
</script>

<style lang='scss'>
@function px2rem($px) {
    @return $px / 150 * 1rem;
}

header {
    display: flex;
    padding: px2rem(50);
    p {
        flex: 1;
        font-size: px2rem(56);
        display: flex;
        align-items: center;
        img{
            height: px2rem(100);
        }
    }
    h1{
        font-size: px2rem(60);
        flex: 1;
        text-align: center;
        line-height: px2rem(100);
    }
    h2{
        flex: 1;
    }
}
.main{
    background: #f4f4f4;
    border-top:1px solid #ccc;
    text-align: center;
    img{
        width: px2rem(370);
        height: px2rem(370);
        margin-top: px2rem(280);
    }
    p{
        font-size: px2rem(70);
        margin-top: px2rem(100); 
    }
    .btn{
        margin-top: px2rem(265);
        padding-bottom: px2rem(1160);
        button{
            border: none;
            width: px2rem(440);
            height: px2rem(160);
            border-radius: 6px;
            margin: px2rem(30);
        }
        button:nth-child(1){
            background: #ff5a00;
            color: #fff;
        }
    }
}
</style>
