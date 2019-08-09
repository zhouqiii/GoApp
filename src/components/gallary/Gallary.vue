<template>
<div class="gallary" @click="gallaryhide">
    <div class="imgs" >
    <swiper  :options="swiperOption" >
        <swiper-slide v-for="(item,index) in imgdetail" :key="index">
         <img calss="imgcontent" style="width:100%;" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</div> 
</template>

<script>
export default {
    name: 'CommenGallary',
    props: {
        imgdetail: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return{
           swiperOption: {//swiper提供的API
             pagination: '.swiper-pagination' ,
             paginationType: 'fraction',
             loop: true,
             observer:true,
             observeParents:true,
           }
        }
    },
    methods: {
        gallaryhide () {
            this.$emit('change')
        }
    }
}
</script>

<style lang="stylus" scoped> 
.gallary>>>.swiper-container
    overflow: inherit
.gallary
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .imgs
        width: 100%
        height: 0
        padding-bottom: 100%
        .swiper-pagination
            color: #ffffff
            bottom: -100px
</style>
