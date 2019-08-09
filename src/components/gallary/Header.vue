<template>
    <div>
      <router-link 
        to="/"
        tag="div" 
        class="backchange"
        v-show="showheader"
      >
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <div class="topchange" v-show="!showheader" :style="styOpicaty">
        <router-link to="/">
          <div class="headerleft">
            <svg class="icon icon-back" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
        </router-link>
        <div class="headerbody">景点详情</div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderGallary',
    data () {
        return {
            showheader: true,
            styOpicaty: {
                opacity: 1
            }
        }
    },
    methods: {
        listenScroll () {
            // console.log(document.documentElement.scrollTop)
            const toppx = document.documentElement.scrollTop
            if (toppx > 34) {
                let opacity = toppx / 150
                opacity = opacity > 1 ? 1: opacity
                this.styOpicaty = { opacity }
                this.showheader = false
            }else {
                this.showheader = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.listenScroll)//js的API
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/css/varibles.styl'
.backchange
    top: 10px
    left: 10px
    line-height: 26px
    height: 26px
    width: 26px
    border-radius: 13px
    background: rgba(0, 0, 0, 0.8)
    position: absolute
    text-align: center
    .el-icon-arrow-left
        color: #ffffff
.topchange
    position: fixed
    top: 0
    left: 0
    height: 28px
    line-height: 28px
    width: 100%
    background: $bgColor
    .headerleft
        float: left
        font-size: 15px
        text-align: center
        top: 0px
        left: 10px
        color: black 
        position: absolute
        color: #ffffff
    .headerbody
        text-align: center
        color: #ffffff
        font-size: 16px

</style>

