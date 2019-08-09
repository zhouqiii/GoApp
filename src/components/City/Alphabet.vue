<template>
  <ul class="list">
    <li class="item" style="list-style-type:none;"
    v-for="item in alphabets"
    :key="item"
    :ref="item"
    @click="giveAlphabet"
    @touchstart="handletouchstart"
    @touchmove="handletouchmove"
    @touchend="handletouchend"
    >{{item}}</li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      start: false,
      aY: 0,
      timer: null
    }
  },
  updated () {
    this.aY = this.$refs['A'][0].offsetTop
  },
  computed: {
    alphabets () {
      const alphabets = []
      for (let i in this.cities) {
        alphabets.push(i)
      }
      return alphabets
    }
  },
  methods: {
    giveAlphabet: function (e) {
      this.$emit('change', e.target.innerText)
    },
    handletouchstart: function () {
      this.start = true
    },
    handletouchend: function () {
      this.start = false
    },
    handletouchmove: function (e) {
      if (this.start) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const anotherY = e.touches[0].clientY - 61
          const index = Math.floor((anotherY - this.aY) / 20)
          if (index >= 0 && index < 26) {
            this.$emit('change', this.alphabets[index])
          }
        }, 16)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/css/varibles.styl'
.list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 60px
    right: 6px
    bottom: 0
    width: 8px
    .item
        line-height:12px
        text-align: center
        color: $bgColor
        margin-top: 6px
        font-size: 13px
</style>
