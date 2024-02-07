<template>
    <nav>
      <p class="kaushan-script-regular">Harry Potter</p>
      <ul>
        <li class="kaushan-script-regular"><RouterLink to='/'>Accueil</RouterLink></li>
        <li class="kaushan-script-regular"><RouterLink to='/liste'>Liste</RouterLink></li>
        <li class="kaushan-script-regular"><RouterLink to='/recherche'>Recherche</RouterLink></li>
        <li class="kaushan-script-regular"><RouterLink to='/favoris'>Favoris</RouterLink></li>
      </ul>
    </nav>
  </template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Navbar'
}
</script>

<style>
  nav{
    box-sizing: border-box;
    padding: 10px 25px;
    width: 100%;

    background-color: #7F5E45;
    color: #D2AA5C;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
  }

  nav p {
    margin: 0;
    font-size: xx-large;
    font-weight:800;
  }

  nav ul {
    margin: 0;
    padding: 0;
    width: auto;
    display: flex;
    list-style: none;
  }

  nav ul li{
    width: 100px;
    height: 50px;

    display: flex;

    text-align: center;
    align-items: center;
  }

  li a:hover{
    background-color: #777777;
    border-radius: 10px;
  }

</style>