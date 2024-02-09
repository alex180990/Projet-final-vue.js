<template>
    <main class="conteneur">
      <h2 class="kaushan-script-regular titre">Recherche</h2>
  
      <div class="haut">
        <input class="kaushan-script-regular" type="text" id="" placeholder="Quel personnage ?" @input="rechercher(name)" v-model="name"/>
        <h3 class="kaushan-script-regular titre" v-if="filteredCharacters.length > 0"> Personnages trouvés: {{ filteredCharacters.length }}</h3>
      </div>
  
      <hr>
      
      <div v-if="filteredCharacters.length !==0">
        <div class="flex-1">
          <RouterLink :to="{ name: 'DetailActeur', params: { id: acteur.id } }" v-for="acteur in filteredCharactersWithImage" :key="acteur.id">
            <Acteur :unActeur="acteur" />
          </RouterLink>
        </div>
      </div>
      <p v-else>Aucun personnage trouvé(s) !</p>

    </main>
  </template>
  
  <script setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import { RouterLink } from 'vue-router';
  
  import Acteur from '../views/Acteur.vue';
  import getAllCharacters from '../composables/api';
  
  const { liste, allCharacters } = getAllCharacters();
  const name = ref('');
  const filteredCharacters = ref([]);
  
  onMounted(() => {
    allCharacters();
  });
  
  watchEffect(() => {
    if (Array.isArray(liste.value)) {
      filteredCharacters.value = liste.value.filter((acteur) =>
        acteur.name.toLowerCase().includes(name.value.toLowerCase()) && acteur.image
      );
    }
  });
  
  const rechercher = () => {
  };
  
  const filteredCharactersWithImage = ref([]);
  
  watchEffect(() => {
    filteredCharactersWithImage.value = filteredCharacters.value.filter((acteur) => acteur.image);
  });
  </script>
  
  <style scoped>
  .flex-1 {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
