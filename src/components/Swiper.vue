<template>
<div class="swiper">
   <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperImgList" :key="item.id">
        <img class="swiper-img" :src="item.url" /> 
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
    data () {
        return{
           swiperOption: {
             pagination: '.swiper-pagination' ,
             loop: true,
           }, 
           swiperImgList: [
               {
                id: '000',
                url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/80dbfcab7fbac0a2395c65996c082616.jpg_890x330_09b0d8c7.jpg'
                },
               {
                id: '001',
                url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3013dbb6dc22c1ce735c51eb50c5f924.jpg_890x330_8910ad5a.jpg'
                },
               {
                id: '002',
                url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/852a8c8b82283c30c515808cdc6e64a3.jpg_890x330_8413d1e8.jpg'
                },
                {
                id: '003',
                url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/c0a0dd528b1a539d36dd7bebcbbb1e24.jpg_890x330_d9a9055f.jpg'
                },
                
                
           ]
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
    padding-bottom: 36%
    .swiper-img
        width: 100%
</style>
