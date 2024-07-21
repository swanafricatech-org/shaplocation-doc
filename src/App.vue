<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import sidebarComponent from './components/sidebarComponent.vue';


</script>

<template>
  <HeaderComponent />
  <div class="docs-wrapper">
      <sidebarComponent/>
    <!--//docs-sidebar-->
    <div class="docs-content">
      <div class="container">
       <!-- presentation section -->
        <RouterView/>
        <!-- prise en main content -->
        <FooterComponent/>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
