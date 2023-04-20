<template>
  <div>
    <!-- 头部 -->
    <!-- <header>
      <h3>我的</h3>
    </header> -->
    <HeaderTop title="我的"/>
    <section>
      <div class="container" @click="go()">
        <div class="user_image">
          <i class="iconfont icon-yonghuming"></i>
        </div>
        <div class="loign" >
          <h3>登录/注册</h3>
          <i class="iconfont icon-msnui-tel icon-mobile"></i>
          <span>未绑定手机号</span>
        </div>
        <span class="back">></span>
        
      </div>
     
    </section>
     
    <section class="show">
      <div class="balance item">
        <h3><span>0.00</span>元</h3>
        <p>我的余额</p>
      </div>


      <div class="discounts item">
        <h3><span>0</span>个</h3>
        <p>我的优惠</p>
      </div>
      <div class="integral item">
        <h3><span>0</span>分</h3>
        <p>我的积分</p>
      </div>
    </section>

    <section class="show2">
      <div class="order">
        <h3>
          <i class="iconfont icon-dingdan"></i>
          <span>我的订单</span>
        </h3>
        <span>></span>
      </div>
      <div class="order">
        <h3>
          <i class="iconfont icon-jifen"></i>
          <span>积分商城</span>
        </h3>
        <span>></span>
      </div>
      <div class="order">
        <h3>
          <i class="iconfont icon-viptehuishiduan"></i>
          <span>Mint外卖会员卡</span>
        </h3>
        <span>></span>
      </div>
      <div class="order">
        <h3>
          <i class="iconfont icon-lianxikefu"></i>
          <span>服务中心</span>
        </h3>
        <span>></span>
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
  },
  methods: {
    go(){
      this.$router.push('/login')
    }
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
  width 100%
  height 100px
  background-color #02A774
  display flex
  justify-content center
  align-items center
  box-sizing border-box
  
  margin-top 1px
  .container
    display flex
    justify-content space-between
    align-items center
    width 394px 
    height 60px 
    .user_image
      width 62px
      height 62px
      border-radius 50%
      overflow hidden
      .iconfont
        font-size 62px
        background-color #E4E4E4
        color #7E8C8D
    .loign
      margin-right 180px
      color #fff
      margin-bottom 5px
      h3
        margin 10px 0 
      .iconfont
        font-size 25px
    .back
      font-size 30px
      color #fff
.show
  height 81px
  background-color #fff
  display flex
  justify-content space-evenly
  margin-bottom 10px
 
  .discounts
    border-left 2px solid #F5F5F5
    border-right 2px solid #F5F5F5
    h3
      span
        color #FF5F3E
  .balance
    h3
      span
        color #FF9900
  .integral
    h3
      span
        color #6AC20B
  .item
    width 33%
    height 100%
    display flex
    flex-direction column 
    justify-content center
    align-items center
    h3
      span
        font-size 30px
    p,h3
      margin 0 

.show2
  display block
  background-color #fff
  height 300px
  color #929292
  padding-bottom 10px
  .order
    display flex
    height 25%
    align-items center
    justify-content space-between
    padding 0 10px
    border-bottom 1px solid #E4E4E4
    .iconfont
      font-size 25px 
      color #37B991
  .order:nth-child(2)
    .iconfont
      color #FF7B60
  .order:nth-child(3)
    border-bottom 10px solid #F5F5F5
    .iconfont
      color #FFB545
  .order:nth-child(4)
    border-bottom :none
    .iconfont
      color #FFB545








       
      
      
 

</style>







