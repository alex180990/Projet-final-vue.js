<template>
  <Navigation />
  <RouterView />
</template>

<script setup>
  import { ref } from 'vue'
  import { RouterView } from 'vue-router'
  import Navigation from './components/Navigation.vue';

  const nom = ref('')

  const components = {
    Navigation,
  }
  
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

  .kaushan-script-regular {
    font-family: "Kaushan Script", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: large;
  }
  
  .conteneur{
    max-width: 1200px;
    min-width: 700px;

    margin: 0 auto;
    padding: 10px;
  }



  p,label, li,h1, h2, h3{
    margin: 0;
    color: #D2AA5C;
  }

  h1,h2,h3{
    text-decoration: underline;
  }

  .titre{
    font-size: xx-large;
  }

  .titre-2{
    font-size: x-large;
  }

  a{
    text-decoration: none;
    padding: 15px;
    color: #D2AA5C;
  }

  hr{
    border: solid #7F5E45 2px;
  }

  button{
    height: 35px;
    width: auto;
    color: #7F5E45;
    background-color: #D2AA5C;
    border-radius: 5px;
  }

  input{
    border-radius: 5px;
    height: 25px;
    background-color: #D2AA5C;
  }

  input::placeholder{
    color: #7F5E45;
  }
</style>