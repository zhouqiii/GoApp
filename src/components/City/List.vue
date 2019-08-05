<template>
<div class="citylist">
 <div class="currentArea">
   <div class="title" style="border-top:1px solid #cccccc;border-bottom:1px solid #cccccc">当前位置</div>
   <div class="contentlist">
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   </div>
 </div>
 <div class="hotArea">
    <div class="title" style="border-top:1px solid #cccccc;border-bottom:1px solid #cccccc">热门城市</div>
   <div class="contentlist">
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   <div class="content">
       <div class="btncontent">北京</div>
   </div>
   </div>
 </div>
 <div class="allArea">
    <div class="title" style="border-top:1px solid #cccccc;border-bottom:1px solid #cccccc">A</div>
    <div class="citylist">
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
    </div>
 </div>
 <div class="allArea">
    <div class="title" style="border-top:1px solid #cccccc;border-bottom:1px solid #cccccc">A</div>
    <div class="citylist">
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
    </div>
 </div>
 <div class="allArea">
    <div class="title" style="border-top:1px solid #cccccc;border-bottom:1px solid #cccccc">A</div>
    <div class="citylist">
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
    </div>
 </div>
 <div class="allArea">
    <div class="title" style="border-top:1px solid #cccccc;border-bottom:1px solid #cccccc">A</div>
    <div class="citylist">
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
        <div class="listname">阿拉伯</div>
    </div>
 </div>
 </div>
</template>
<script>
export default {
    name: 'CityList'
}
</script>
<style lang="stylus" scoped>
 @import '~@/css/varibles.styl'
 .citylist
    overflow: hidden
    .title
        background: #eeeeee
        height: 25px
        line-height: 25px
        text-align: left
        padding: 0 10px
        font-size: 14px
        top: 0px
        left: 0px
        bottom: 0px
        right: 0px
    .contentlist
        padding: 4px 34px 4px 4px
        overflow: hidden
        .content
            text-align: left
            width: 33%
            float: left
            .btncontent
                border: 1px solid #cccccc
                text-align: center
                border-radius: 3px 
                margin: 3px
                padding: 2px
    .citylist
        text-align: left 
        .listname
            padding-left: 10px
            line-height: 28px
            border-bottom: 1px solid #cccccc


</style>


