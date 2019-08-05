<template>
  <ul class="list">
    <li class="item" style="list-style-type:none;">A</li>
    <li class="item" style="list-style-type:none;">A</li>
    <li class="item" style="list-style-type:none;">A</li>
  </ul>
</template>

<script>
export default {
    name: 'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
@import '~@/css/varibles.styl'
.list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 25px
    right: 6px
    bottom: 0
    width: 8px
    .item
        line-height:12px
        text-align: center
        color: #bbbbbb
</style>


