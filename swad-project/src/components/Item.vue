<template>
  <div class="d-flex flex-column align-content-center p-3 item mx-3 my-3">
    <icons 
        @click="this.$parent.$parent.$parent.$parent.$emit('addToFavorites', item)" 
        icon="plus-circle" 
        class="icon" />
    <div class="img-container">
        <img :src="item.image" :style="{width: '100%', height: '300px', objectFit: 'cover', margin: '2px'}"/>
    </div>
    <div>
        <h3 :style="{fontWeight: 'bold'}">{{item.name}}</h3>
        <p>{{item.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['item'],
    emits: ['addToFavorites']
}
</script>

<style scoped>
    .item {
        width: 500px;
        height: 600px;
        background: url('https://www.monsterhunter.com/rise/assets/images/common/panel_bg-c.png') center top repeat-y;
        border: 20px solid transparent;
        border-image: url('https://www.monsterhunter.com/rise/assets/images/trailer_flame.png') 40;
        font-family: 'Roboto';
    }
    .img-container::after {
        background: url('../assets/img/fancier_hr.png') center no-repeat;
        background-size: 100%;
        content: "";
        display: block;
        margin: 1.5vh auto;
        padding: 1.5vh 0;
        width: 75%
    }
    .icon {
        position: absolute;
        width: 3em !important;
        height: auto;
        color: rgb(180, 50, 50);
        transform: translate(25%, 25%);
        cursor: pointer;
        transition: 1s;
    }
    .icon:hover {
        color: rgb(255, 0, 0);
    }
</style>