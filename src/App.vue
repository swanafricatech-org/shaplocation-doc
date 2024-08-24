<script setup>
import { RouterView, useRouter ,useRoute} from 'vue-router';

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import sidebarComponent from './components/sidebarComponent.vue';


import PaginationButton from './components/PaginationButton.vue';
import { computed, ref, watch } from 'vue';

const routes = [
  '/',
  '/connexion',
  '/inscription',
  '/mot-de-passe-oublier',
  '/profil',
  '/activation-alerte',
  '/devenir-commercant',
  '/mot-de-passe',
  '/utilisateurs',
  '/ajout-article',
  '/contacter-vendeur',
  


];



const itemsPerPage = 1; // Une route par page
const totalPages = computed(() => Math.ceil(routes.length / itemsPerPage));
const currentPage = ref(1);
const router = useRouter();
const route = useRoute();

// Mettre à jour la page actuelle en fonction de la route
const updateCurrentPage = () => {
  const currentRouteIndex = routes.indexOf(route.path);
  if (currentRouteIndex !== -1) {
    currentPage.value = currentRouteIndex + 1;
  }
};

// Surveiller les changements de route
watch(route, () => {
  updateCurrentPage();
});

const handlePageChange = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
    const routeIndex = (newPage - 1) * itemsPerPage;
    if (routes[routeIndex]) {
      router.push(routes[routeIndex]);
    }
  }
};

// Initialiser la page actuelle
updateCurrentPage();
</script>

<template>
  <HeaderComponent />
  <div class="docs-wrapper">
    <sidebarComponent />
    <!--//docs-sidebar-->
    <div class="docs-content">
      <div class="container">
        <!-- presentation section -->
        <RouterView />
        <PaginationButton :currentPage="currentPage" :totalPages="totalPages" @pageChange="handlePageChange" />
        <!-- prise en main content -->
        <FooterComponent />
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
