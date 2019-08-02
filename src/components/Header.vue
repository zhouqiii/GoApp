<template>
    <div class="homeheader">
        <div class="headerleft">
            <svg class="icon icon-back" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </div>
        <div class="headerinput">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>输入城市/景点/游玩主题
        </div>
        <div class="headerright">{{this.city}}
            <svg class="icon icon-jiantou" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>


<style lang="stylus" scoped>
 @import '~@/css/varibles.styl'
// css样式里引入css要加@import 文件加~，@文件夹代指src文件夹

.homeheader
    display: flex
    line-height: 31px
    color: #fff
    background: $bgColor
    .headerleft
        float: left
        width: 30px
        margin-top: 3px
        .icon icon-back
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
        margin-top: 5px
        font-size: 16px
        .icon icon-jiantou
            font-size: 10px
            margin-left: 2px

</style>

