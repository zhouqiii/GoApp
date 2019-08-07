<template>
<div class="city">
    <city-header ></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :allLists="allLists" :alphabet="alphabetlist"></city-list>
    <city-alphabet :cities="allLists" @change="getAlphabet"></city-alphabet>
</div>  
</template>
<script>
import axios from 'axios'
import CityHeader from '../components/City/Header'
import CitySearch from '../components/City/Search'
import CityList from '../components/City/List'
import CityAlphabet from '../components/City/Alphabet'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            hotCities: [],
            allLists: {},
            alphabetlist: ''
        }
    },
    methods: {
        getCityList: function() {
            axios.get('/mock/city.json').then(this.getCityListSucc)
        },
        getCityListSucc: function(res) {
           res = res.data
           if(res.ret && res.data) {
               const data = res.data
               this.hotCities = data.hotCities
               this.allLists = data.cities
           }
        },
        getAlphabet: function(value) {
            this.alphabetlist = value
        }
    },
    mounted () {
        this.getCityList()
    }
}
</script>
<style lang="stylus" scoped>

</style>


