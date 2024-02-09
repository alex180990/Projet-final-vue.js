<template>
    <main class="conteneur">
        <h2 class="kaushan-script-regular titre">Détail de l'acteur!</h2>

        <div class="carte">

            <div class="flex-1">
                <img :src="filteredActeur.image" alt="">
                <button class="kaushan-script-regular" @click="gestionFavori">{{ estDansFavoris ? 'Retirer des favoris' : 'Ajouter aux favoris' }}</button>
            </div>

            <div class="carte_detail p-5 flex-2">
                <div>
                    <p class="kaushan-script-regular"> Nom du personnage : {{ filteredActeur.name }}</p>
                    <p class="kaushan-script-regular">Surnom ;</p>
                    <ul>
                        <li class="kaushan-script-regular" v-for="nom in filteredActeur.alternate_names" :key="nom"> {{ nom}} </li>
                    </ul>
                    <p class="kaushan-script-regular">Espèce : {{ filteredActeur.species }}</p>
                    <p class="kaushan-script-regular">Genre : {{ filteredActeur.gender }}</p>
                    <p class="kaushan-script-regular">Maison : {{ filteredActeur.house }}</p>
                    <p class="kaushan-script-regular">Date de naissance : {{ filteredActeur.dateOfBirth}}</p>
                    <p class="kaushan-script-regular">Anné de naissance : {{ filteredActeur.yearOfBirth }}</p>
                    <div class="flex-2">
                        <p class="kaushan-script-regular">Sorcier :</p>
                        <p class="kaushan-script-regular" v-if="filteredActeur.wizard === true">Oui</p>
                        <p class="kaushan-script-regular" v-else>Non</p>
                    </div>
                    <p class="kaushan-script-regular">Ascendance : {{ filteredActeur.ancestry }}</p>
                    <p class="kaushan-script-regular">Couleur des yeux : {{ filteredActeur.eyeColour }}</p>
                    <p class="kaushan-script-regular">Couleur des chveux : {{ filteredActeur.hairColour }}</p>
                </div>

                <div>
                    <div>
                        <h3 class="kaushan-script-regular titre-2">Baguette magique</h3>
                        <p class="kaushan-script-regular" v-if="filteredActeur.wand">
                            <p class="kaushan-script-regular">Bois : {{ filteredActeur.wand.wood }}</p>
                            <p class="kaushan-script-regular">Coeur : {{ filteredActeur.wand.core }}</p>
                            <p class="kaushan-script-regular">Longueur : {{ filteredActeur.wand.length }}</p>
                        </p>
                        <p class="kaushan-script-regular" v-else>Le personnage n'a pas de baguette magique.</p>
                    </div>
                    <p class="kaushan-script-regular">Patronus : {{ filteredActeur.patronus }}</p>
                    <div class="flex-2">
                        <p class="kaushan-script-regular">Étudiant chez poudlard :</p>
                        <p class="kaushan-script-regular" v-if="filteredActeur.hogwartsStudent === true">Oui</p>
                        <p class="kaushan-script-regular" v-else>Non</p>
                    </div>
                    <div class="flex-2">
                        <p class="kaushan-script-regular">Professeur chez poudlard :</p>
                        <p class="kaushan-script-regular" v-if="filteredActeur.hogwartsStaff === true">Oui</p>
                        <p class="kaushan-script-regular" v-else>Non</p>
                    </div>
                </div>


                <div>
                    <h3 class="kaushan-script-regular titre-2">Détail de l'acteur</h3>
                    <p class="kaushan-script-regular">Acteur : {{ filteredActeur.actor }}</p>
                    <div class="flex-2">
                        <p class="kaushan-script-regular">Acteur alternatif :</p>
                        <ul v-if="filteredActeur.alternate_actors && filteredActeur.alternate_actors.length !== 0">
                            <li class="kaushan-script-regular" v-for="nom in filteredActeur.alternate_actors" :key="nom"> {{ nom}} </li>
                        </ul>
                        <p class="kaushan-script-regular" v-else >Aucune doublures !</p>
                    </div>
                    <div class="flex-2">
                        <p class="kaushan-script-regular">Toujours en vie :</p>
                        <p class="kaushan-script-regular" v-if="filteredActeur.alive === true">Oui</p>
                        <p class="kaushan-script-regular" v-else>Non</p>
                    </div>
                </div>
            </div>

        </div>

    </main>
</template>
  
<script setup>
    import { ref, onMounted, watchEffect } from 'vue';
    import { defineProps } from 'vue';
    import { useRoute } from 'vue-router';
    
    import getAllCharacters from '../composables/api';
    import { useFavorisStore } from '../stores/store';
    
    const route = useRoute();
    const { liste, allCharacters } = getAllCharacters();
    const filteredActeur = ref({});
    const props = defineProps(['unActeur']);
    
    onMounted(() => {
        allCharacters();
    });
    
    watchEffect(() => {
        if (Array.isArray(liste.value)) {
        const id = route.params.id;
        filteredActeur.value = liste.value.find((acteur) => acteur.id === id) || {};
        }
    });

    const favorisStore = useFavorisStore();
    const estDansFavoris = ref(false);

    watchEffect(() => {
        estDansFavoris.value = favorisStore.favoris.some(favori => favori.id === filteredActeur.value.id);
        });

    const gestionFavori = () => {
        if (estDansFavoris.value) {
            favorisStore.supprimerFavori(filteredActeur.value.id);
        } else {
            favorisStore.ajouterFavori(filteredActeur.value);
        }
    }

    
    console.log(favorisStore.favoris);

</script>
  
<style scoped>
    .carte {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid #D2AA5C;
        background-color: #7F5E45;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        height: auto;
        width: 1000px;
    }

    .carte_detail{
        width: 100%;
        justify-content: space-between;
    }
    
    .carte img {
        border-radius: 5px;
        height: 250px;
        width: auto;
        margin-bottom: 5px;
    }
    .flex-1{
        display: flex;
        flex-direction: column;
    }
    .flex-2{
        display: flex;
        flex-direction: row;
    }
    
    .p-5{
        padding: 0 5px;
    }
</style>