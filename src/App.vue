<template>
  <div id="app">
   <!-- eslint-disable-next-line vue/multi-word-component-names -->
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';

export default {
  components: {
    FooterGuide,
   
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
// 整个组件的样式
body
  margin 0
  
  #app
    width 100%
   
    height 100vh
    background-color #f5f5f5
</style>
