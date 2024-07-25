<script setup>
import router from '@/router';
import { RouterLink } from 'vue-router';
function is_active(path){
        return router.currentRoute.value.path === path;
}
</script>
<template lang="">
    <div id="docs-sidebar" class="docs-sidebar">
            <div class="top-search-box d-lg-none p-3">
                <form class="search-form">
                    <input type="text" placeholder="Recherche docs..." name="search"
                        class="form-control search-input" />
                    <button type="submit" class="btn search-btn" value="Search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>
            <nav id="docs-nav" class="docs-nav navbar">
                <ul class="section-items list-unstyled nav flex-column pb-3">
                    <li class="nav-item section-title">
                        <a class="nav-link scrollto active" href="#section-1"><span class="theme-icon-holder me-2"><i
                                    class="fas fa-map-signs"></i></span>Introduction</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink :class="{ active:is_active('/') } " class="nav-link scrollto" to="/">Presentation</RouterLink>
                    </li>
                    <li class="nav-item section-title mt-3">
                        <a class="nav-link scrollto active" href="#section-2"><span class="theme-icon-holder me-2"><i class="fa-solid fa-shield-halved"></i></span>Authentification</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/connexion') } " to="/connexion">Connexion</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/inscription') } " to="/inscription">Inscription</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/mot-de-passe-oublier') } " to="/mot-de-passe-oublier">Réinitialiser mot de passe</RouterLink>
                    </li>
                    <li class="nav-item section-title">
                        <a class="nav-link scrollto active" href="#section-3"><span class="theme-icon-holder me-2"><i class="fas fa-user"></i></span>Gestion de compte</a>
                    </li>
                     <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/profil') } " to="/profil">Configuration de profil</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/devenir-commercant') } " to="/devenir-commercant">Devenir commerçant</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/mot-de-passe') } " to="/mot-de-passe">Modifier mot de passe</RouterLink>
                    </li>
                    <li class="nav-item section-title">
                        <a class="nav-link scrollto active" href="#section-4"><span class="theme-icon-holder me-2"><i
                                    class="fas fas fa-box"></i></span>Gestion d'articles</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/utilisateurs') } " to="/utilisateurs">Utilisateurs et Rôles</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" :class="{ active:is_active('/ajout-article') } " to="/ajout-article">Ajouter un article</RouterLink>
                    </li>
                </ul>
            </nav>
            <!--//docs-nav-->
        </div>
</template>

<style scoped>
    
</style>