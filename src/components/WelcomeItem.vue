<script setup></script>
<template>
    <header class="header fixed-top">
        <div class="branding docs-branding">
            <div class="container-fluid position-relative py-2">
                <div class="docs-logo-wrapper">
                    <div class="site-logo">
                        <RouterLink to="/" class="navbar-brand"><img class="logo-icon me-2"
                                src="/src/assets/images/coderdocs-logo.svg" alt="logo" /></RouterLink>
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
                    <button id="docs-sidebar-toggler" class="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none"
                        type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <!--//docs-top-utilities-->
            </div>
            <!--//container-->
        </div>
        <!--//branding-->
    </header>
    <!--//header-->

    <div class="docs-wrapper">
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
                        <a class="nav-link scrollto" href="#item-1-1">Presentation</a>
                    </li>
                    <li class="nav-item section-title mt-3">
                        <a class="nav-link scrollto" href="#section-2"><span class="theme-icon-holder me-2"><i
                                    class="fas fa-hand-point-right"></i></span>Prise en main</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scrollto" href="#item-2-1">Connexion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scrollto" href="#item-2-2">Inscription</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scrollto" href="#item-2-3">Types d'Utilisateurs et Fonctionnalités
                            Spécifiques</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scrollto" href="#item-2-4">Exploration des Fonctionnalités</a>
                    </li>
                </ul>
            </nav>
            <!--//docs-nav-->
        </div>
        <!--//docs-sidebar-->
        <div class="docs-content">
            <div class="container">
                <article class="docs-article" id="section-1">
                    <header class="docs-header">
                        <h1 class="docs-heading">
                            Introduction
                            <span class="docs-time">Dernière mise à jour : 2024-07-18</span>
                        </h1>
                        <section class="docs-intro">
                            <p class="fw-medium">
                                Explorez les fonctionnalités avancées et intuitives de
                                ShapLocation pour une gestion immobilière et de transport
                                efficace en Afrique.
                            </p>
                        </section>
                    </header>
                    <section class="docs-section" id="item-1-1">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="">Présentation de ShapLocation</h4>
                                <p>
                                    <span class="fw-medium">Shaplocation</span> est la plateforme
                                    de gestion immobilière de référence en Afrique, offrant une
                                    solution complète et intégrée pour la gestion de biens
                                    immobiliers et de services de transport. Confronté aux défis
                                    croissants du secteur immobilier, ShapLocation se distingue
                                    par son interface conviviale et ses fonctionnalités avancées
                                    qui centralisent les informations nécessaires et automatisent
                                    les tâches administratives. Que vous soyez propriétaire,
                                    gestionnaire de biens ou locataire, ShapLocation vous permet
                                    de gérer efficacement tous les aspects de l'immobilier, de
                                    l'achat à la vente, en passant par la location.
                                </p>
                                <h4 class="">Objectifs de la documentation</h4>
                                <p>
                                    Cette documentation a pour but de vous familiariser avec
                                    toutes les fonctionnalités essentielles de ShapLocation. Vous
                                    apprendrez à utiliser la plateforme pour gérer vos biens
                                    immobiliers, effectuer des locations et des ventes en toute
                                    sécurité, ainsi que pour louer ou acheter des voitures. En
                                    explorant cette documentation, vous serez en mesure de
                                    maximiser l'utilisation de ShapLocation et d'optimiser vos
                                    opérations immobilières et de transport.
                                </p>
                            </div>
                            <div class="col-md-6 simplelightbox-gallery">
                                <a href="/src/assets/images/shaplocation.png">
                                    <img class="figure-img img-fluid shadow rounded"
                                        src="/src/assets/images/shaplocation.png"
                                        alt="Image représentative de l'interface principale de ShapLocation"
                                        title="Shaplocation image" />
                                </a>
                            </div>
                        </div>
                    </section>
                </article>

                <article class="docs-article" id="section-2">
                    <header class="docs-header">
                        <h1 class="docs-heading">Prise en main</h1>
                        <section class="docs-intro">
                            <p>
                                Découvrez comment démarrer avec ShapLocation pour tirer parti de
                                ses fonctionnalités complètes. De la création de compte à la
                                navigation intuitive, suivez ces étapes pour explorer facilement
                                les possibilités offertes par notre plateforme.
                            </p>
                        </section>
                    </header>

                    <section class="docs-section" id="item-2-1">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <h4 class="">Connexion</h4>
                                <ol>
                                    <li>
                                        Entrez votre numéro de téléphone ou email et votre mot de
                                        passe.
                                    </li>
                                    <li>Cliquez sur le bouton "Se connecter".</li>
                                </ol>
                            </div>
                            <div class="col-md-6 simplelightbox-gallery">
                                <a href="/src/assets/images/login.png">
                                    <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/login.png"
                                        alt="Image de la page de connexion" title="Page de connexion" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section class="docs-section" id="item-2-2">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="">Inscription par Numéro de Téléphone</h4>
                                <ol>
                                    <li>Accédez à la Plateforme - Allez sur shaplocation.com.</li>
                                    <li>
                                        Trouvez le lien "Créer un compte" - Sur la page d'accueil,
                                        recherchez le bouton de menu en haut à droite de la page.
                                        Cliquez sur "Se connecter". Vous trouverez le lien "Créer un
                                        compte".
                                    </li>
                                    <li>
                                        Fournissez les Informations Personnelles :
                                        <ul>
                                            <li>
                                                Nom et prénom : Entrez votre prénom et nom de famille.
                                            </li>
                                            <li>
                                                Numéro de téléphone : Indiquez un numéro de téléphone
                                                actif pour la vérification et les notifications.
                                            </li>
                                            <li>
                                                Types de compte : Sélectionnez le type de compte que
                                                vous voulez créer (Utilisateur, Marchand,
                                                Propriétaire).<br /><span class="fw-medium">
                                                    NB: Le démarcheur est un marchand.</span>
                                            </li>
                                            <li>
                                                Mot de passe : Choisissez un mot de passe sécurisé et
                                                mémorable. <br />
                                                <span class="fw-medium">Note : Le mot de passe doit contenir des lettres
                                                    majuscules, minuscules, des chiffres et des
                                                    symboles.</span>
                                            </li>
                                            <li>
                                                Confirmation du mot de passe : Saisissez à nouveau le
                                                mot de passe pour confirmation.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Acceptez les Conditions d'Utilisation - Lisez les conditions
                                        d'utilisation et la politique de confidentialité de
                                        ShapLocation.
                                    </li>
                                    <li>
                                        Vérifiez l'Inscription - Cliquez sur le bouton "S'inscrire".
                                        Vous recevrez un SMS avec un code de vérification. Entrez le
                                        code au niveau de la page de vérification.
                                    </li>
                                    <li>
                                        Complétez le Profil - Une fois votre compte vérifié,
                                        connectez-vous à ShapLocation avec votre numéro de téléphone
                                        et votre mot de passe. Accédez à votre profil et complétez
                                        les informations supplémentaires nécessaires, telles que :
                                        <ul>
                                            <li>
                                                Photo de profil : Pour une identification visuelle.
                                            </li>
                                            <li>
                                                Ajouter une adresse email : Pour être contacté et/ou
                                                recevoir des notifications par email.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            <div class="col-md-6">
                                <div class="">
                                    <h4 class="">Inscription par Adresse Email</h4>
                                    <ol>
                                        <li>
                                            Accédez à la Plateforme - Allez sur shaplocation.com.
                                        </li>
                                        <li>
                                            Trouvez le lien "Se connecter avec Google" - Sur la page
                                            d'accueil, recherchez le bouton de menu en haut à droite
                                            de la page. Cliquez sur "Se connecter". Vous trouverez le
                                            lien "Se connecter avec Google". Suivez les instructions.
                                        </li>
                                        <li>
                                            Complétez le Profil :
                                            <ul>
                                                <li>
                                                    Photo de profil : Pour une identification visuelle.
                                                </li>
                                                <li>
                                                    Ajouter un numéro de téléphone : Pour être contacté
                                                    et/ou recevoir des notifications par SMS.
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="mt-4 simplelightbox-gallery">
                                    <a href="/src/assets/images/profil.png">
                                        <img class="figure-img img-fluid shadow rounded"
                                            src="/src/assets/images/profil.png" alt="Information de profil"
                                            title="Configuration de profil" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="docs-section" id="item-2-3">
                        <div class="simplelightbox-gallery row">
                            <div class="col-md-12 mb-0">
                                <h4 class="">
                                    Types d'Utilisateurs et Fonctionnalités Spécifiques
                                </h4>
                                <p>
                                    ShapLocation propose des fonctionnalités spécifiques selon le
                                    type d'utilisateur :
                                </p>

                                <h5>1. Utilisateur Standard</h5>
                                <p>Les utilisateurs standard peuvent :</p>
                                <ul>
                                    <li>Naviguer sur la plateforme.</li>
                                    <li>Rechercher des articles.</li>
                                    <li>
                                        Activer les alertes pour les articles qui vous intéressent
                                    </li>
                                    <li>Ajouter des articles au panier.</li>
                                    <li>Contacter les marchands.</li>
                                </ul>
                                <p>
                                    Ils ont accès aux fonctionnalités de base telles que la
                                    recherche et la messagerie.
                                </p>

                                <h5>2. Démarcheur</h5>
                                <p>
                                    Les démarcheurs sont des marchands sur la plateforme. Ils
                                    peuvent :
                                </p>
                                <ul>
                                    <li>Publier des articles à vendre.</li>
                                    <li>Gérer leurs articles.</li>
                                    <li>Communiquer avec les acheteurs potentiels.</li>
                                </ul>
                                <p>
                                    Les démarcheurs ont accès à des outils supplémentaires pour la
                                    gestion des ventes et des inventaires.
                                </p>

                                <h5>3. Entreprise</h5>
                                <p>
                                    Les entreprises disposent de fonctionnalités avancées pour :
                                </p>
                                <ul>
                                    <li>Gérer leurs biens immobiliers et services.</li>
                                    <li>Publier plusieurs articles.</li>
                                    <li>Utiliser des outils de gestion avancés.</li>
                                    <li>
                                        Accéder à des rapports détaillés sur leurs performances.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="docs-section" id="item-2-4">
                        <div class="simplelightbox-gallery row">
                            <div class="col-md-12">
                                <h4 class="">Comment Ajouter un Article</h4>
                                <ol>
                                    <li>
                                        Assurez-vous que vous êtes inscrit en tant que marchand ou
                                        propriétaire. Si ce n'est pas le cas, allez dans votre
                                        profil et changez le type de compte en suivant les
                                        instructions.
                                    </li>
                                    <li>
                                        Accédez à la plateforme en allant sur shaplocation.com.
                                    </li>
                                    <li>Connectez-vous à votre compte.</li>
                                    <li>
                                        Accédez au tableau de bord en cliquant sur l'icône de
                                        tableau de bord en forme de carré en haut. Une fois cliquée,
                                        vous accédez à votre tableau de bord où vos propres articles
                                        seront affichés. Par défaut, il n'y a aucun article.
                                    </li>
                                    <li>
                                        Ajoutez un article en cliquant sur le bouton "Ajouter un
                                        article" en haut à droite. Vous verrez les instructions pour
                                        publier un article.
                                    </li>
                                    <li>
                                        Publiez un article en choisissant le type d'article que vous
                                        souhaitez publier et en suivant les instructions restantes.
                                    </li>
                                </ol>
                                <p>
                                    <span class="fw-medium">NB:</span> Contactez-nous si vous
                                    rencontrez des difficultés par email, par téléphone ou en
                                    écrivant dans ce forum.
                                </p>
                            </div>
                        </div>
                    </section>
                </article>
                <footer class="">
                    <div class="d-flex toggle-flex-column  justify-content-between align-items-start pt-5">
                        <div class="column-fist">
                            <h1>Formeemplacement</h1>
                            <p class="small">Notre mission, rendre possible</p>
                            <h5 class="t-title mb-3 pe-5">un toit pour tous !!</h5>
                            <img src="/src/assets/images/line.png" alt="line">
                            <div class="d-flex align-items-center my-3">
                                <img src="/src/assets/images/tel.png" alt="telephone">
                                <div class="ms-3">
                                    <p class="mb-0">(+229) <span class="fw-medium">94 170 440</span></p>
                                    <p class="mb-0">(+7) <span class="fw-medium">993 351 57 38</span></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center my-3">
                                <img src="/src/assets/images/mail.png" alt="mail">
                                <div class="ms-3">
                                    <p class="mb-0"><a href="mailto:support@shaplocation.com"
                                            class="nav-link">support@shaplocation.com</a></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center my-3">
                                <img src="/src/assets/images/location.png" alt="adresse">
                                <div class="ms-3">
                                    <p class="mb-0"><a href="#" target="_blank" rel="noopener noreferrer"
                                            class="nav-link">Abomey-Calavi - Bénin</a></p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-beetween gap-2 ">
                                <a href="https://www.linkedin.com/company/shaplocation/about/" target="_blank"
                                    title="linkedin" class="social"><i class="fa-brands fa-linkedin-in  "></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61560357548611" class="social"
                                    target="_blank" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/shaplocation/?next=%2F" class="social"
                                    target="_blank" title="Youtube"><i class="fa-brands fa-youtube"></i></a>
                                <a href=" https://www.instagram.com/shaplocation/?next=%2F" target="_blank"
                                    title="Instagram" class="social"><i class="fa-brands fa-instagram"></i></a>

                            </div>

                        </div>
                        <div class="d-flex flex-column py-5">
                            <h4 class="mb-3 fw-bold">Liens utiles</h4>
                            <ul class="links">
                                <li><a href="" class="text-black">À Propos</a></li>
                                <li><a href="" class="text-black">Nous contacter</a></li>
                                <li><a href="" class="text-black">FAQ</a></li>
                                <li><a href="" class="text-black">swanafricatech.com</a></li>
                                <li><a href="" class="text-black">Mentions légales</a></li>
                                <li><a href="" class="text-black">Conditions générales d’utilisation</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
    <!--//docs-wrapper-->
</template>

<style scoped></style>
