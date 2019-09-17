
<template>
  <section class='container'>
    <div>
      <h1 class='title'>youtubeのテスト</h1>
      <youtube
        ref='youtube'
        :video-id='videoId'
        :player-vars='{autoplay:1}'
        @playing='playing'
        @paused='paused'
        @ended='ended'
      />
    <vs-button vs-type="filled">Primary</vs-button>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import axios from 'axios'
import 'vuesax/dist/vuesax.css'

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
    },
    ended () {
    }
  }
}
</script>

<style>
</style>
