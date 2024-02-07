import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useFavorisStore = defineStore({
  id: 'favoris',
  state: () => ({
    favoris: [],
  }),
  actions: {
    ajouterFavori(acteur) {
      if (!this.favoris.find(favori => favori.id === acteur.id)) {
        this.favoris.push(acteur);
      }
    },
    supprimerFavori(acteurId) {
      this.favoris = this.favoris.filter(favori => favori.id !== acteurId);
    },
  },
});