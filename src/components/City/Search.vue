<template>
<div>
    <div class="citysearch">
        <input v-model="inputname" class="city-input" type="text" placeholder="请输入城市/景点名称"  style="border-color: none"/>
    </div>
    <div class="showsearch">
        <ul>
            <li v-for="item in lists" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return{
            lists: [],
            timer: null,
            inputname: ''
        }
    },
    watch: {
        inputname () {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const results = []
                for(let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.inputname) > -1 || value.name.indexOf(this.inputname) > -1) {
                            results.push(value)
                        }
                    })
                    }
                this.lists = results
            },100)
        }
    }
}
</script>
<style lang="stylus" scoped>
 @import '~@/css/varibles.styl'
.citysearch
    margin-top: 0
    background: $bgColor
    height: 31px
    padding:  0 4px
    text-align: center
    .city-input
        box-sizing: border-box
        height: 28px
        line-height: 28px
        font-size: 14px
        text-align: center
        width: 100%
        border-radius: 4px 
        color: #666
        padding: 0 8px
.showsearch
    z-index: 1
    overflow: hidden
    display: absolute
    top: 100px
    left: 0
    right: 0
    bottom: 0
    background: green 
</style>


