<template>
    <div>
        <div class="rec-title">
            <svg class="icon icon-huore" aria-hidden="true">
                <use xlink:href="#icon-huore"></use>
            </svg>热门推荐
        </div>
        <ul style="padding-inline-start:0px;margin-block-start:2px;">
            <router-link 
              tag="li"
              class="rec-content" 
              style="border-bottom:1px #D3D3D3 solid;" 
              v-for="item in recommand" 
              :key="item.id" 
              :to="'/detail/'+item.id"
            >
                <img class="rec-imgcontent" :src="item.imgUrl">
                <div class="rec-info">
                    <p class="rec-infoname">{{item.title}}</p>
                    <p class="rec-infomation">{{item.desc}}</p>
                    <button class="rec-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommand',
  props: {
    recommand: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/css/mixin.styl'
.rec-title
    line-height: 33px
    background: #eeeeee
    margin-top: 5px
    text-indent: -74%
    letter-spacing: 1px
    .icon icon-huore
        font-size: 30px
        padding-right: 30px
.rec-content
    overflow: hidden
    height: 98px
    display: flex
    margin-top: 5px
    margin-left: 4px
    .rec-imgcontent
        height: 96px
        width: 96px
        padding: 0px 2px
    .rec-info
        flex: 1
        padding-left: 8px
        text-align: left
        min-width: 0
        .rec-infoname
            margin-top: 10px
            line-height: 18px
            font-size: 16px
            ellipsis()
        .rec-infomation
            margin-top: -10px
            font-size: 14px
            margin-bottom: 11px
            ellipsis()
        .rec-btn
            border: none
            margin-top: -14px
            font-size: 13px
            background-color: #ff9300
            border-radius: 2px
            padding: 1px
            color: #fff
            width: 68px
</style>
