<template>
<div class="swiper">
   <swiper :options="swiperOption" v-if="showSwipers">
    <!-- slides -->
    <swiper-slide v-for="item of swip" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" /> 
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> 
    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper> 
</div> 
</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        swip: Array
    },
    data () {
        return{
           swiperOption: {
             pagination: '.swiper-pagination' ,
             loop: true,
           }
        }
    },
    computed: {
        showSwipers: function () {
            return this.swip.length
        }
    }
}
</script>
<style lang="stylus" scoped>
.swiper>>>.swiper-pagination-bullet-active//滑点是swiper插件自带的样式，用>>>来自定义改变
    background: #ffffff !important 
.swiper
    background: #eeeeee
    width: 100%
    //height: 31.25vw与下面三行样式设置相同效果，但兼容比较差，为了渲染是自动撑开swiper，不影响下面的页面渲染 占位！！！
    height: 0
    overflow: hidden
    padding-bottom: 32%
    .swiper-img
        width: 100%
</style>
