<template>
    <div>
        <div class="rec-title">
            周末去哪儿
        </div>
        <ul style="padding-inline-start:0px;margin-block-start:2px;">
            <li class="rec-content" style="border-bottom:1px 	#D3D3D3 solid;" v-for="item in recommandList" :key="item.id">
                <div class="weekimg">
                <img class="rec-imgcontent" :src="item.srcUrl">
                </div>
                <div class="rec-info">
                    <p class="rec-infoname">{{item.infoname}}</p>
                    <p class="rec-infomation">{{item.infomation}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeWeekends',
    data () {
        return{
            recommandList: [{
        id:'000',
        srcUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        infoname: '帝都必打卡',
        infomation: '来北京必去的景点非这些地方莫属',
        btn: ''
    },{
        id:'001',
        srcUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        infoname: '漂流勇进，烧烤露营',
        infomation: '轻松水上漂，任我乐逍遥',
        btn: ''
    },{
        id:'002',
        srcUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        infoname: '清凉避暑胜地',
        infomation: '到大自然中享受“天然空调”的清凉',
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
.rec-content
    overflow: hidden
    height: 200px
    margin-top: 5px
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
