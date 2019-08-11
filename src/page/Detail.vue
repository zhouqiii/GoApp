<template>
<div>
    <div class="banner" @click="changegallary">
        <img class="bannerimg" :src="bannerImg" />
        <div class="bannerinfo">
            <div class="bannertitle">{{sightName}}</div>
            <div class="bannericon"><i class="el-icon-picture"></i>11</div>
        </div>
    </div>
    <fade-animation>
    <commen-gallary :imgdetail="gallaryImgs" v-show="showgallary" @change="hidegallary"></commen-gallary>
    </fade-animation>
    <header-gallary></header-gallary>
    <div class="cheng">
        <detail-list :categoryList="categoryList"></detail-list>
    </div>
</div>
</template>
<script>
import CommenGallary from '../components/gallary/Gallary.vue'
import HeaderGallary from '../components/gallary/Header.vue'
import DetailList from '../components/detailList/List.vue'
import FadeAnimation from '../components/fadeanimation/FadeAnimation.vue'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        CommenGallary,
        HeaderGallary,
        DetailList,
        FadeAnimation
    },
    data () {
        return {
            showgallary: false,
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: []
        }
    },
    methods: {
        changegallary () {
            this.showgallary = true
        },
        hidegallary () {
            this.showgallary = false
        },
        getJsonInfo () {
            axios.get('/mock/detail.json',{
            params: {
                id: this.$route.params.id//详情页绑定了动态路由的pathname
            }
            }).then(this.getinfosucc)
        },
        getinfosucc (res) {
            // console.log(res)
            res = res.data
            if (res.ret && res.data) {
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.categoryList = data.categoryList
        }
      }
    },
    mounted () {
        this.getJsonInfo()
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


