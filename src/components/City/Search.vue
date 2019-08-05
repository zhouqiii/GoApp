<template>
<div class="citysearch">
    <input class="city-input" type="text" placeholder="请输入城市/景点名称"  style="border-color: none"/>
</div>
    
</template>
<script>
export default {
    name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
 @import '~@/css/varibles.styl'
 .citysearch
    margin-top: 0
    background: $bgColor
    height: 31px
    padding:  0 4px
    text-align: center
    .city-input
        box-sizing: border-box
        height: 25px
        line-height: 25px
        font-size: 14px
        text-align: center
        width: 100%
        border-radius: 4px 
        color: #666
        padding: 0 8px

</style>


