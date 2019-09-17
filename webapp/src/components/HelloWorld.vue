<template>
  <section class="container">
    <div>
      <youtube
        ref='youtube'
        :video-id='videoId'
        :player-vars='{autoplay:1}'
        @playing='playing'
        @paused='paused'
        @ended='ended'
      />
     <input v-model="email" placeholder="edit me">
     <button v-on:click="createUser" >送信</button>
    </div>
  </section>

</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import axios from 'axios'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

Vue.config.productionTip = false

Vue.use(VueYoutube)

export default {
  data () {
    return {
      videoId: '6fiUylbzJhc'
    }
  },

  methods: {
    playVideo () {
      this.player.playVideo()
    },
    playing () {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    },
    paused () {
      console.log('paused')
    },
    ended () {
      console.log('ended')
    },
    createUser: function () {
      axios.post('http://localhost:8080/request', {email: this.videoId}).then(function (response) { console.log(response) }).catch(function (error) { console.log(error) })
    }
  }
}
</script>

<style>

</style>
