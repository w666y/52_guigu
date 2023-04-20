<template>
  <div id="app1">
    <!-- 头部 -->
    <!-- <header>
      <h3>搜索</h3>
    </header> -->
    <HeaderTop title="搜索"/>
    <section>
      <input type="text" placeholder="请输入商家名称">
      <input type="submit" >
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
  height 60px
  background-color #fff
  display flex
  justify-content center
  align-items center
  input:first-child
    width 310px
    height 35px
    outline none
    background-color #F2F2F2
    border none
    margin-right 8px
  input:nth-child(2)
    width 76px
    height 35px
    border none
    background-color #02A774
    color #fff




</style>
