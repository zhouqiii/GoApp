<template>
    <div class="home">
        <home-header :city="city"></home-header>
        <home-swiper :swip="swiperLists"></home-swiper>
        <home-icons :icons="iconLists"></home-icons>
        <home-recommand :recommand="recmmandLists"></home-recommand>
        <home-weekends :weekend="weekendLists"></home-weekends>
    </div>
</template>
<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommand from '../components/Recommand'
import HomeWeekends from '../components/Weekends'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommand,
        HomeWeekends
    },
    data () {
        return {
            city: '',
            iconLists: [],
            swiperLists: [],
            weekendLists: [],
            recmmandLists: []
        }
    },
    methods: {
        getHomeData: function() {
            axios.get('/mock/index.json').then(this.getHomeDataSucc)
        },
        getHomeDataSucc: function(res) {
            res = res.data
           if(res.ret&&res.data) {
               const data = res.data
               this.city = data.city
               this.iconLists = data.iconList
               this.swiperLists = data.swiperList
               this.weekendLists = data.weekendList
               this.recmmandLists = data.recommendList
           }
        }
    },
    mounted () {
        this.getHomeData()
    }
}
</script>
<style scoped>
</style>

