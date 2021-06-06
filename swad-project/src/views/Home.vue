<template>
  <div>
    <div id="title_box" class="d-flex flex-row align-items-center justify-content-center my-5">
      <img src="../assets/img/4.png">
      <div id="title" class="d-flex flex-column">
        <h1 class="display-1 m-0 p-0" :style="{fontFamily: 'Roboto'}">Video<span :style="{fontWeight: 'bold'}">Game</span></h1>
        <h2 id="subtitle" class="m-0 m-0" :style="{fontFamily: 'MGR'}">Revengeance</h2>
      </div>
    </div>
    <h1 class="display-3 thing px-3 py-5" :style="{fontFamily: 'Markazi Text'}">Choose Your Enemies</h1>
    <div class="d-flex d-column justify-content-between fof">
      <item-list :items="items" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';

export default {
  name: "Home",
  data() {
    return {
      favorites: []
    }
  },
  props: ['items'],
  components: {
    ItemList
  }
};
</script>

<style scoped>
  
  #title_box {
    background-image: url("../assets/img/tu.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    color: white;
  }
  
  #title {
    transform: translate(-15%, 0%);
    -ms-transform: translate(-15%, 0%);
  }
  
  #subtitle {
    transform: translate(0%, -30%);
    -ms-transform: translate(0%, -30%);
  }
  
/*
  #info_box {
      background: url("../assets/img/bg_blue_hellfire.jpg") center top repeat-y;
      background-size: cover;
  }
*/
/*
  #info_box::before {
    background: url("../assets/img/bg_blue_hellfire_ends.png") center bottom no-repeat;
    background-size: cover;
    bottom: calc(34% - 2px); --- Leave this last
    content: "";
    display: block;
    height: 10%;
    left: 0;
    position: absolute;
    width: 100%;
  }
*/
  
  .thing {
    background: url("../assets/img/pizazz.png") center center no-repeat;
    color: white;
  }

  .item-container::after {
      background: url('../assets/img/fancier_hr.png') center no-repeat;
      background-size: 100%;
      content: "";
      display: block;
      margin: 1vh auto;
      padding: 1vh 0;
      width: 25%
  }

  .fof {
    transform: translate(-10%, 0);
    -ms-transform: translate(-10%, 0);
  }

  img {
    width: 35%;
    height: auto;
  }
</style>


