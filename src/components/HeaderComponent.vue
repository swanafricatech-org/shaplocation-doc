<template lang="">
     <header class="header fixed-top">
        <div class="branding docs-branding">
            <div class="container-fluid position-relative py-2">
                <div class="docs-logo-wrapper">
                    <div class="site-logo">
                        <RouterLink to="/" class="navbar-brand"><img class="logo-icon me-2"
                                src="@/assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>
                </div>
                <!--//docs-logo-wrapper-->
                <div class="docs-top-utilities d-flex justify-content-end align-items-center">
                    <div class="top-search-box d-none d-lg-flex">
                        <form class="search-form">
                            <input type="text" placeholder="Rechercher docs..." name="search"
                                class="form-control search-input" />
                            <button type="submit" class="btn search-btn" value="Search">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div class="dropdown mx-3">
                        <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Langue
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Francais</a></li>
                            <li><a class="dropdown-item" href="#">Anglais</a></li>
                        </ul>
                    </div>
                    <button type="button" id="docs-sidebar-toggler"
                        class="vt-hamburger docs-sidebar-toggler docs-sidebar-visible VPNavBarHamburger hamburger d-xl-none"
                        aria-label="Navigation mobile" aria-expanded="false" aria-controls="VPNavScreen">
                        <span class="vt-hamburger-container ">
                            <span class="vt-hamburger-top"></span>
                            <span class="vt-hamburger-middle"></span>
                            <span class="vt-hamburger-bottom"></span>
                        </span>
                    </button>
                </div>
                <!--//docs-top-utilities-->
            </div>
            <!--//container-->
        </div>
        <!--//branding-->
    </header>
</template>

<script setup>

</script>
<style scoped>
    
</style>