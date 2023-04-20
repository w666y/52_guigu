<template>
    <!-- 头部 -->
    <header>
        <!-- 插槽占位 -->
        <slot name="left"></slot>
        <h3>{{ title }}</h3>
        <slot name="right"></slot>
    </header>
</template>
<script>
import { title } from 'process';

export default {
    props: {
        title: String
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
</style>
