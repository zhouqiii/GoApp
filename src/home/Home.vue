<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommand></home-recommand>
        <home-weekends></home-weekends>
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
    methods: {
        getHomeData: function() {
            axios.get('/public/mock/index.json').then(this.getHomeDataSucc)
        },
        getHomeDataSucc: function(res) {
            console.log(res)
        }
    },
    mounted () {
        this.getHomeData()
    }
}
</script>
<style scoped>
</style>

