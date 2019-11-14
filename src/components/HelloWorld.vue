
<template>
  <section class="container">
    <div>
      <Button type="primary" @click="request()">request</Button>
      <Button type="primary" @click="nextMusic()">nextMusic</Button>
      <Input placeholder="Request Music URL" v-model="url" />
    </div>
    <!-- <List>
      <ListItem>
        <ListItemMeta v-for="data in musicData" :key="data.title" />
        <template slot="action">
        </template>
    </ListItem>-->
    <!-- </List> -->
  </section>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      url: "",
      musicData: {}
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
      await axios.post("/next");
    }
  }
};
</script>

<style>
</style>
