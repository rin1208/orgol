
<template>
  <section class="container">
    <div>
      <youtube ref="youtube" :video-id="videoId" :player-vars="{autoplay:1}" @ended="ended" />
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";
import axios from "axios";

Vue.use(VueYoutube);

export default {
  data() {
    return {
      videoId: "",
      response: ""
    };
  },
  created() {
    const ws = (this.ws = new WebSocket(`ws://${location.host}/websocket`));
    ws.onopen = () => {};
    ws.onmessage = response => {
      this.videoId = response.data;
    };
  },
  methods: {
    async ended() {
      await axios.get("/next");
    }
  }
};
</script>

<style>
</style>
