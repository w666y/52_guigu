<template>
  <div>
   
    <!-- 底部路由导航 -->
    <footer class="footer_guide border-1px">
      <link rel="stylesheet" href="http://at.alicdn.com/t/font_726904_ubdf6pmxsf.css">
      <!-- 对象语法  {on : '/home' === $route.path} -->
      <div class="guide_item" :class="{ on: '/home' === $route.path }" @click="go('/home')">
        <span class="item_icon ">
          <i class="iconfont icon-food"></i>
        </span>
        <span>首页</span>
      </div>
      <div class="guide_item" :class="{ on: '/search' === $route.path }" @click="go('/search')">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </div>
      <div class="guide_item" :class="{ on: '/order' === $route.path }" @click="go('/order')">
        <span class="item_icon">
          <i class="iconfont icon-single"></i>
        </span>
        <span>订单</span>
      </div>
      <div class="guide_item" :class="{ on: '/user' === $route.path }" @click="go('/user')">
        <span class="item_icon">
          <i class="iconfont icon-user"></i>
        </span>
        <span>我的</span>
        <!-- <router-link to="user"><span>我的</span></router-link> -->

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    go(path) {
      // this.$router.push(path)  
      //push 方法会增加一条历史记录 replace不会增加历史记录，而是替换掉当前的历史记录
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*引入公共样式*/
@import '../../assets/stylus/mixins.styl'

     
.footer_guide
  // 顶部有白色的边框
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 1px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
