<template>
  <div class="carte">
    <img :src="unActeur.image" alt="">
    <p class="kaushan-script-regular">{{ unActeur.name }}</p>
  </div>
</template>
  
<script setup>
  const props = defineProps({
    unActeur: Object
  });

</script>
  
<style scoped>
  .carte {
    display: flex;
    flex-direction: column;
    border: 1px solid #D2AA5C;
    background-color: #7F5E45;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    height: 325px;
    width: 200px;
  }

  .carte img {
    border-radius: 5px;
    height: 250px;
    width: auto;
  }

  .carte p {
    justify-content: center;
    text-align: center;
    font-size: x-large;
    margin: auto 0;
  }
</style>