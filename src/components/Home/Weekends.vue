<template>
    <div>
        <div class="rec-title">
            周末去哪儿
        </div>
        <div style="padding-inline-start:0px;margin-block-start:2px;">
            <div class="rec-content" style="border-bottom:1px #D3D3D3 solid;" v-for="item in weekend" :key="item.id">
                <div class="weekimg">
                <img class="rec-imgcontent" :src="item.imgUrl">
                </div>
                <div class="rec-info">
                    <p class="rec-infoname">{{item.title}}</p>
                    <p class="rec-infomation">{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeWeekends',
    props: {
        weekend: Array
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/css/mixin.styl' 

.rec-title
    line-height: 33px
    background: #eeeeee
    text-indent: -74%
    letter-spacing: 1px
.rec-content
    overflow: hidden
    height: 200px
    margin-top: 0px
    .rec-imgcontent
        height: 142px
    .rec-info
        text-align: left
        margin-top: 2px
        margin-left: 10px
        overflow: hidden 
        .rec-infoname
            margin-top: 2px
            margin-bottom: 3px
            ellipsis()
        .rec-infomation
            margin-top: 5px
            margin-bottom: 5px
            font-size: 14px
            paddind-right: 30px
            ellipsis()
        
    
</style>
