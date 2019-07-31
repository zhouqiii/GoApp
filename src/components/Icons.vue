<template>
<div class="icons">
    <swiper>
    <swiper-slide v-for="item of iconList" :key="item.id">
        <div class="icon">
        <div class="icon-img">
        <img class="icon-img-img" :src="item.srcUrl"/>
        </div>
        <p class="icon-desc">{{item.description}}</p>
    </div>
    </swiper-slide>
    <swiper-slide v-for="item of iconList" :key="item.id">
        <div class="icon">
        <div class="icon-img">
        <img class="icon-img-img" :src="item.srcUrl"/>
        </div>
        <p class="icon-desc">{{item.description}}</p>
    </div>
    </swiper-slide>
    </swiper>
</div>
    
</template>
<script>

export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [{
                id:'000',
                description: '酒店',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png'
            },{
                id:'001',
                description: '机票',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png'
            },{
                id:'002',
                description: '火车票',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png'
            },{
                id:'003',
                description: '景点门票',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png'
            },{
                id:'004',
                description: '民宿',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/kezhan.png'
            },{
                id:'005',
                description: '自由行',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/freeTravel.png'
            },{
                id:'006',
                description: '攻略',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/travel.png'
            },{
                id:'007',
                description: '旅游团购',
                srcUrl: '//s.qunarzz.com/homenode/images/touchheader/tuan.png'
            }
            ]
        }
    }
} 
</script>
<style lang="stylus" scoped>
@import '~@/css/varibles.styl' 
.icons
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 50%

    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 25px

            box-sizing: border-box
            padding: 7px
            .icon-img-img
                height: 100%
                display: block
                margin: 0 auto
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: -16px
            height: 25px
            line-height: 25px
            font-size: 14px
         
</style>


