<template>
    <div id="app">
        <!-- 头部 -->
        
        <router-link to="/user" style="text-decoration: none;">
            <header>&lt;</header>
        </router-link>
        <!-- 主体 -->
        <section>
            <!-- logo -->
            <h2>Minit外卖</h2>
            <div class="login_item">
                <span>短信登录</span>
                <span>密码登录</span>
            </div>
            <input type="text"><br>
            <input type="password"><br>
            <input type="text"><br>
            <input type="submit" value="登录" class="submit">
            <p>关于我们</p>
        </section>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
    width 100%
    background-color #FFF
    height 100vh
header
   font-size 30px
section
    display flex
    flex-direction column
    align-items center
    h2
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
    .login_item
        font-size 14px 
        margin-bottom 10px
        span:nth-child(1)
            margin-right 20px
        span:nth-child(2)
            margin-left 20px
    input 
        width 330px
        height 40px
        outline none
        border 1px solid 
        border-radius 3px
    .submit
        width 338px
        height 42px
        background-color #4CD96F
        color #fff
        font-size 16px

</style>
