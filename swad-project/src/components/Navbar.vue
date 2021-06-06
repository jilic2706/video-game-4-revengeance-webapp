<template>
  <div class="d-flex flex-row align-items-between justify-content-around sticky-top" id="nav">
    <router-link to="/"><h3 class="my-3">Home</h3></router-link>
    <router-link to="/favorites"><h3 class="my-3">Favorites</h3></router-link>
  </div>
</template>

<script>
export default {
    props: ['favorites']
}
</script>

<style>
    #nav {
        outline: 5px solid rgba(0, 15, 44, 0.9);
        outline-offset: 2.5px;
        width: 15vw;
        height: auto;
    }
    #nav::before {
        background: rgb(199, 172, 172);
        content: "";
        display: block;
        height: 100%;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 1px;
    }
    #nav a {
        background: rgba(0, 15, 44, 0.9);
        text-decoration: none;
        width: 50%;
        text-align: center;
        color: rgb(199, 172, 172);
        font-family: 'Roboto';
        transition: 1s;
    }
    #nav a:hover {
        background-color: rgba(2, 41, 119, 0.9);
        color: white;
    }
</style>