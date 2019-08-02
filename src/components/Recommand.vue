<template>
    <div>
        <div class="rec-title">
            <svg class="icon icon-huore" aria-hidden="true">
                <use xlink:href="#icon-huore"></use>
            </svg>热门推荐
        </div>
        <ul style="padding-inline-start:0px;margin-block-start:2px;">
            <li class="rec-content" style="border-bottom:1px 	#D3D3D3 solid;" v-for="item in recommandList" :key="item.id">
                <img class="rec-imgcontent" :src="item.srcUrl">
                <div class="rec-info">
                    <p class="rec-infoname">{{item.infoname}}</p>
                    <p class="rec-infomation">{{item.infomation}}</p>
                    <button class="rec-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommand',
    data () {
        return{
            recommandList: [{
        id:'000',
        srcUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        infoname: '欢乐谷',
        infomation: '团购价格比较便宜，太阳神车和黄色过山车，爱琴海主题里的项目，两个电影体验也比较好。特洛伊木马很刺激。入园很快很方便，园里有好多流浪的猫猫在香格里拉主题区，喜欢猫猫的朋友可以带一点猫粮去喂它们。',
        btn: ''
    },{
        id:'001',
        srcUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
        infoname: '动物园',
        infomation: '北京动物园始建于清光绪三十二年（1906年），是中国开放最早、饲养展出动物种类最多的动物园。北京动物园位于西直门外，交通非常便利，公交地铁都能到达。整个动物园全部转完要一整天的时间。周末，整个公园成了孩子的快乐天地！',
        btn: ''
    },{
        id:'002',
        srcUrl: 'http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_200x200_595cfa1d.jpg',
        infoname: '温泉中心',
        infomation: '温泉度假村',
        btn: ''
    },{
        id:'003',
        srcUrl: 'http://img1.qunarzz.com/sight/p0/1608/4f/4fc3f5a1b838f279a3.water.jpg_200x200_e6528ef6.jpg',
        infoname: '蜡像馆',
        infomation: '杜莎夫人蜡像馆',
        btn: ''
    },{
        id:'004',
        srcUrl: 'http://img1.qunarzz.com/sight/p0/1901/ea/ea459039354370daa3.img.jpg_200x200_8c51fc3d.jpg',
        infoname: '世界公园',
        infomation: '博览世界公园世界景观',
        btn: ''
    }
    ]
        }
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
    margin-top: 15px
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
