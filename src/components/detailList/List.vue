<template>
  <div>
     <div class="list" v-for="(item,index) in categoryList" :key="index">
       <div class="title">
         <span class="title-icon"></span>
         {{item.title}}
       </div>
     <div v-if="item.children">
       <detail-list :categoryList="item.children"></detail-list>
     </div>
     </div>  
  </div>
</template>
<script>
export default {
    name: 'DetailList',
    props: {
      categoryList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/css/varibles.styl'
.list
  padding: 0 10px
  margin-top: 10px
  .title
    border-bottom: 1px #D3D3D3 solid
    height: 26px
    text-align: left 
    .title-icon
      margin-right: 4px
      height: 18px
      width: 18px
      display: inline-block
      background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) no-repeat
</style>

