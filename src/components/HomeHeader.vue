<template>
    <div class="homeheader">
        <div class="headerleft"><span class="iconfont icon-back">&#xe624;</span></div>
        <div class="headerinput"><span class="iconfont icon-input">&#xe632;</span>输入城市/景点/游玩主题</div>
        <div class="headerright">城市<span class="iconfont icon-search">&#xe64a;</span></div>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader'
}
</script>


<style lang="stylus" scoped>
 @import '~@/css/varibles.styl'
// css样式里引入css要加@import 文件加~，@文件夹代指src文件夹

.homeheader
    display: flex
    line-height: 38px
    color: #fff
    background: $bgColor
    .headerleft
        float: left
        width: 43px
        margin-top: 3px
        .icon-back
            text-align: center
            font-size: 15px
            margin-left: -4px
    .headerinput
        flex: 1
        color: #cccccc
        background: #ffffff
        border-radius: 5px
        margin-left: 2px
        margin-top: 5px
        margin-bottom: 5px
    .headerright
        float: right
        width: 68px
        margin-top: 6px
        font-size: 16px
        .icon-search
            font-size: 12px
            margin-left: 2px

</style>

