<template>
  <div>

    <Button type="primary" style="margin: 5px" @click="request()">request</Button>
    <Button type="primary" style="margin: 5px" @click="nextMusic()">nextMusic</Button>
    <Input placeholder="Request Music URL" clearable v-model="url" />
    <Button type="primary" style="margin: 5px" @click="syncList()">Sync List</Button>
   
    <Table :columns="columns" style="margin: 5px" :data="musicData" width="700"></Table>

  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      url: "",
      musicData: [],
      columns: [
        {
          title: "URL",
          key: "Url"
        }
      ]
    };
  },
  created() {},
  methods: {
    async request() {
      await axios.post("/request", {
        url: this.url
      });
    },
    async nextMusic() {
      await axios.get("/next");
    },
    async syncList() {
      const res = await axios.get("/musiclist");
      const temporaryData = [];
      this.musicData = [];
      Object.keys(res.data).forEach(function(key) {
        this.push({ Url: res.data[key].Url });
      }, temporaryData);
      this.musicData = temporaryData;
    }
  }
};
</script>

<style>
.main {
  margin: 10px;
}
</style>
