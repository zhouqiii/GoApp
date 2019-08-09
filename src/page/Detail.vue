<template>
<div>
    <div class="banner" @click="changegallary">
        <img class="bannerimg" src="http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg" />
        <div class="bannerinfo">
            <div class="bannertitle">故宫(AAAAA景区)</div>
            <div class="bannericon"><i class="el-icon-picture"></i>11</div>
        </div>
    </div>
    <commen-gallary :imgdetail="imgdetail" v-show="showgallary" @change="hidegallary"></commen-gallary>
    <header-gallary></header-gallary>
    <div class="cheng"></div>
</div>
</template>
<script>
import CommenGallary from '../components/gallary/Gallary.vue'
import HeaderGallary from '../components/gallary/Header.vue'
export default {
    name: 'Detail',
    components: {
        CommenGallary,
        HeaderGallary
    },
    data () {
        return {
            imgdetail: ['http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png',
                'http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg'],
            showgallary: false
        }
    },
    methods: {
        changegallary () {
            this.showgallary = true
        },
        hidegallary () {
            this.showgallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 53%//与height=0撑开div
    .bannerimg
        width: 100%
    .bannerinfo
        text-align: left
        color: #ffffff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))//渐变
        line-height: 30px
        left: 20px
        bottom: 0//放在banner底部
        right: 0
        position: absolute//放在banner里
        display: flex//弹性撑开
        .bannertitle
            flex: 1//撑满父级高度
        .bannericon
            border-radius: 15px
            margin-right: 5px
            margin-top: 5px//設置bannericon的外高距
            line-height: 21px
            height: 21px
            padding: 0 17px
            background: rgba(0, 0, 0, .8)//設置背景色，設置透明度
            font-size: 14px
.cheng
    height: 800px 
</style>


