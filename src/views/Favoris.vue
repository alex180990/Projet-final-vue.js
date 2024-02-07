<template>
    <main class="conteneur">
        <h2 class="kaushan-script-regular titre">Vos favoris</h2>

        <hr>

        <div v-if="favorisStore.favoris && favorisStore.favoris.length > 0">
            <div class="flex-1">
                <RouterLink :to="{ name: 'DetailActeur', params: { id: Acteur.id } }" v-for="Acteur in favorisStore.favoris" :key="Acteur.id">
                    <Acteur :unActeur="Acteur" />
                </RouterLink>
            </div>
        </div>
        <p class="kaushan-script-regular" v-else>Vous avez aucun favoris !</p>

    </main>
</template>
  
<script setup>
    import { useFavorisStore } from '../stores/store'; 

    import Acteur from "../views/Acteur.vue"

    const favorisStore = useFavorisStore();

    console.log(favorisStore.favoris);

</script>

<style scoped>
  .flex-1 {
    display: flex;
    flex-wrap: wrap;
  }
</style>