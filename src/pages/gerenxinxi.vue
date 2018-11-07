<template>
    <div class="big">
        <header>
            <p>
                <img src="../assets/fanhui.png">返回
            </p>
            <h1>个人信息</h1>
            <img class="shezhi" src="../assets/wode1.jpg">
        </header>
        <div class="img">
            <img src="../assets/gerenxinxi1.png">
        </div>
        <div class="xinxi">
            <div class="name tong">
                <p>姓名</p>
                <p><input type="text" placeholder="请输入真实姓名"></p>
            </div>
            <div class="xingbie tong">
                <p>性别</p>
                <p><input type="text" value="男"></p>
            </div>
            <div class="age">
                <p>年龄段</p>
                <p><input type="text" value="20~25岁"></p>
            </div>
            <div class="shengri">
                <p>生日</p>
                <p><input type="text" value="1993/02/28"></p>
            </div>
            <div class="tishi">我们会在您生日当天送出祝福</div>
            <div class="phone">
                 <p>手机号</p>
                <p><input type="text" placeholder="请输入客户真实手机号"></p>
            </div>
            <div class="btn"><button>提交</button></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "gerenxinxi"
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
    .shezhi{
        width: px2rem(90);
        height: px2rem(24);
        
    }
}
.img{
    img{
        width: 100%;
    }
}
.xinxi{
    input{
        background: #ffffff;
    }
    margin-left: px2rem(80);
    font-size: px2rem(60);
    .tong{
        display:flex;
        align-items: center;
        height: px2rem(234);
        border-bottom: 1px solid #ccc;
        p{
            input{
                height: px2rem(120);
                font-size: px2rem(60);
                margin-left: px2rem(280);
                border: none;
            }
        }
    }
    .age{
        display:flex;
        align-items: center;
        height: px2rem(234);
        border-bottom: 1px solid #ccc;
        p{
            input{
                height: px2rem(120);
                font-size: px2rem(60);
                margin-left: px2rem(200);
                border: none;
            }
        }
    }
    .phone{
        display:flex;
        align-items: center;
        height: px2rem(234);
        border-bottom: 1px solid #ccc;
        p{
            input{
                height: px2rem(120);
                font-size: px2rem(60);
                margin-left: px2rem(200);
                border: none;
            }
        }
    }
    .shengri{
        display:flex;
        align-items: center;
        height: px2rem(234);
        p{
            input{
                height: px2rem(120);
                font-size: px2rem(60);
                margin-left: px2rem(260);
                border: none;
            }
        }
    }
    .tishi{
        height: px2rem(130);
        color:#ccc;
        border-bottom: 1px solid #ccc;
        padding-left: px2rem(380);
    }
    .btn{
        display:flex;
        justify-content:center;
        margin-top: px2rem(160);
        button{
            width: px2rem(270);
            height: px2rem(110);
            background: #ff5a00;
            border: none;
            color: #fff;
            border-radius: 4px;
            
        }
    }
}
</style>
