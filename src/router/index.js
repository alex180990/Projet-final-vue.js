import { createRouter, createWebHistory } from 'vue-router';

import Accueil from "../views/Accueil.vue";
import Liste from "../views/Liste.vue";
import DetailActeur from "../views/DetailActeur.vue";
import Recherche from "../views/Recherche.vue";
import Favoris from "../views/Favoris.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/liste',
      name: 'Liste',
      component: Liste
    },
    {
      path: '/acteur/:id',
      name: 'DetailActeur',
      component: DetailActeur
    },
    {
      path: '/recherche',
      name: 'Recherche',
      component: Recherche
    },
    {
      path: '/favoris',
      name: 'Favoris',
      component: Favoris
    },
  ]
});

export default router;