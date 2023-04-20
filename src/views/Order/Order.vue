<template>
  <div>
    <!-- 头部 -->
    <!-- <header>
      <h3>订单列表</h3>
    </header> -->
    <HeaderTop title="订单列表"/>
    <section>
      <div class="container">
        <img src="./person.png" alt="">
        <h3>登录后查看外卖订单</h3>
        <input type="submit" value="立即登录">
      </div>

    </section>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  name: 'APP',
  components: {
    HeaderTop,
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl'

header
  width 100%
  height 45px
  background-color #02A774
  display flex
  justify-content center
  align-items center
  padding 0 17px
  box-sizing border-box
  color #fff
  font-size 14px
  a 
    color #fff
    text-decoration none

section
  height 470px 
  display flex
  flex-direction columns
  align-items center
  justify-content center
  
  .container
    width 300px 
    height 300px
    text-align center
    input 
      width 100px 
      height 40px 
      background-color #02A774
      border none
      color #fff
      border-radius 6px
</style>
