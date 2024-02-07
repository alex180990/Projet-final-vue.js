<template>
  <main class="conteneur">
    <h2 class="kaushan-script-regular titre">Liste page</h2>
    <div class="flex-1">
      <RouterLink :to="{ name: 'DetailActeur', params: { id: Acteur.id } }" v-for="Acteur in filteredList" :key="Acteur.id">
        <Acteur :unActeur="Acteur" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
  import { ref, onMounted, watchEffect } from 'vue'
  import { RouterLink } from 'vue-router'

  import Acteur from "../views/Acteur.vue"

  import getAllCharacters from "../composables/api"

  const { liste, allCharacters } = getAllCharacters()
  const filteredList = ref([])

  onMounted(() => {
    allCharacters()
  });

  watchEffect(() => {
    if (Array.isArray(liste.value)) {
      filteredList.value = liste.value.filter((acteur) => acteur.image !== '');
    }
  });
</script>

<style scoped>
  .flex-1 {
    display: flex;
    flex-wrap: wrap;
  }
</style>