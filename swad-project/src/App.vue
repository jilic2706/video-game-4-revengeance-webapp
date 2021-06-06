<template>
  <navbar :favorites="favorites"/>
  <div class="container d-flex flex-row text-center h-100 p-0 m-0">
    <router-view class="w-100" :favorites="favorites" :items="items" @addToFavorites="addToFavorites" />
  </div>
</template>

<script>
import items from "@/assets/data/everything.json";
import Navbar from "@/components/Navbar"
export default {
  data: function() {
    return {
      items: items,
      favorites: []
    }
  },
  components: { 
    Navbar 
  },
  methods: {
    addToFavorites(item) {
      this.favorites.push(item)
    }
  }
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap');
  @font-face {
    font-family: 'MGR';
    src: url('assets/fonts/techno_hideo.ttf');
  }
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  html, body {
    height: 100%;
    background-image: url('assets/img/bg_crabs.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
  }
  #app {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    height: auto;
    width: 100% !important;
    font-family: 'Noto Sans';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
