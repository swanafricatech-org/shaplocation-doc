import { createRouter, createWebHistory } from 'vue-router'

import PresentationView from "../views/PresentationView.vue";
import ConnexionView from "../views/ConnexionView.vue";
import InscriptionView from "../views/InscriptionView.vue";
import ProfilView from "../views/ProfilView.vue";
import UtilisateursView from "../views/UtilisateursView.vue";
import AjoutArticleView from "../views/AjoutArticleView.vue";
import PasswordView from "../views/PasswordView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PresentationView,
    },
    {
      path: "/connexion",
      name: "connexion",
      component: ConnexionView,
    },
    {
      path: "/inscription",
      name: "inscription",
      component: InscriptionView,
    },
    {
      path: "/profil",
      name: "profil",
      component: ProfilView,
    },
    {
      path: "/mot-de-passe",
      name: "password",
      component: PasswordView,
    },
    {
      path: "/utilisateurs",
      name: "utilisateurs",
      component: UtilisateursView,
    },
    {
      path: "/ajout-article",
      name: "ajout-article",
      component: AjoutArticleView,
    },
  ],
});

export default router
