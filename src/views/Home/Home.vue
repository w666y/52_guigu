<template>
  <div>
    <!-- <link rel="stylesheet" href="http://at.alicdn.com/t/font_726904_ubdf6pmxsf.css"> -->
    <!-- 头部 -->
    <!-- <header>
      <i class="iconfont icon-search"></i>
      <h3>昌平区北七家宏福科技园(郑平路)</h3>
      <div>
        <a href="">登录</a> | <a href="">注册</a>
      </div>
    </header> -->
    <HeaderTop title="昌平区北七家宏福科技园(郑平路)">
      <i class="iconfont icon-search" slot="left"></i>
      <div slot="right">
        <a href="">登录</a> | <a href="">注册</a>
      </div>
    </HeaderTop>
    <!-- 主体 -->
    <section>
      <!-- <div class="banner">
        <img src="./banner1.jpg" alt="" style="width:100%">
      </div> -->
     
      <!-- 轮播 -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./banner1.jpg" alt="" style="width:100%">
          </div>
          <div class="swiper-slide">
            <img src="./banner2.jpg" alt="" style="width:100%">
          </div>
          <!-- <div class="swiper-slide">Slide 3</div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
      <!-- 商家 -->
      <div class="stores">
        <div class="tip">附近商家</div>
        <!-- <ul class="stores-list">
          <li>
            <img src="../../views/Home/fish.jpg" alt="">
            <div class="info">
              <h3><span>品牌</span>嘉禾一品(温都水城)</h3>
              <p>
                <i class="star-item on"></i>
                <span>4.7</span> <span>月售<i>106</i>单</span>
              </p>
              <p>¥<i>20</i>起送 / 配送费约¥<i>5</i></p>
            </div>
            <div class="ps">
              <p><span>保</span> <span>准</span> <span>票</span></p>
              <span class="zs">硅谷专送</span>
            </div>
          </li>
          <li>
            <img src="../../views/Home/bread.jpg" alt="">
            <div class="info">
              <h3><span>品牌</span>嘉禾一品(温都水城)</h3>
              <p>
                <i class="star-item on"></i>
                <span>4.7</span> <span>月售<i>106</i>单</span>
              </p>
              <p>¥<i>20</i>起送 / 配送费约¥<i>5</i></p>
            </div>
            <div class="ps">
              <p><span>保</span> <span>准</span> <span>票</span></p>
              <span class="zs">硅谷专送</span>
            </div>
          </li>
          <li>
            <img src="../../views/Home/meat.jpg" alt="">
            <div class="info">
              <h3><span>品牌</span>嘉禾一品(温都水城)</h3>
              <p>
                <i class="star-item on"></i>
                <span>4.7</span> <span>月售<i>106</i>单</span>
              </p>
              <p>¥<i>20</i>起送 / 配送费约¥<i>5</i></p>
            </div>
            <div class="ps">
              <p><span>保</span> <span>准</span> <span>票</span></p>
              <span class="zs">硅谷专送</span>
            </div>
          </li>
        </ul> -->

        <StoresList/>
      </div>
    </section>
  </div>
</template>
<script>
import Swiper from 'swiper'
// 引入main.js文件里引入swiper.min.css
import "swiper/swiper.min.css"
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import StoresList from '../../components/StoresList/StoresList.vue'

export default {
  name: 'APP',
  components: {
    HeaderTop,
    StoresList,
  },
  mounted() {
    // 创建一个Swiper实例对象，来实现轮播
    let swiper = new Swiper('.swiper', {
      loop: true, // 可以循环轮播
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
header
  width 100%
  height 45px
  background-color #02A774
  display flex
  justify-content space-between
  align-items center
  padding 0 17px
  box-sizing border-box
  color #fff
  font-size 14px
  a 
    color #fff
    text-decoration none
section 
  .banner
    width 100%
    height 199px
    
    margin-bottom 12px
  .stores
    height 400px
    background-color #fff
    ul
      padding 0 8px
    li
      list-style none
      display flex
      justify-content space-between
      align-items center
      border-top 1px solid 
      border-bottom 1px solid
      img
        width 81px
        height 75px
      .info
        h3
          font-size 16px
          
        p 
          font-size 12px
          img 
           height 15px
      .ps
        font-size 12px
        .zs
          color #02A774
          border 1px solid #02A774
</style>

