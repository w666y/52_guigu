<template>
    <ul class="stores-list">
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
    </ul>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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
