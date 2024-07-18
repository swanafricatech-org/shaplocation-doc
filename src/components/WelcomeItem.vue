<script setup>

</script>
<template>   
    <header class="header fixed-top" >	    
        <div class="branding docs-branding">
            <div class="container-fluid position-relative py-2">
                <div class="docs-logo-wrapper">
					<button id="docs-sidebar-toggler" class="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none" type="button">
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                </button>
	                <div class="site-logo"><RouterLink to="/" class="navbar-brand" ><img class="logo-icon me-2" src="/src/assets/images/coderdocs-logo.svg" alt="logo"></RouterLink></div>    
                </div><!--//docs-logo-wrapper-->
	            <div class="docs-top-utilities d-flex justify-content-end align-items-center">
	                <div class="top-search-box d-none d-lg-flex">
		                <form class="search-form">
				            <input type="text" placeholder="Rechercher docs..." name="search" class="form-control search-input">
				            <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
				        </form>
	                </div>
	
					<div class="dropdown mx-4">
                        <a class="btn btn-primary  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Langue
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Francais</a></li>
                            <li><a class="dropdown-item" href="#">Anglais</a></li>
                        </ul>
                    </div>
	            </div><!--//docs-top-utilities-->
            </div><!--//container-->
        </div><!--//branding-->
    </header><!--//header-->
    
    <div class="docs-wrapper">
	    <div id="docs-sidebar" class="docs-sidebar">
		    <div class="top-search-box d-lg-none p-3">
                <form class="search-form">
		            <input type="text" placeholder="Recherche docs..." name="search" class="form-control search-input">
		            <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
		        </form>
            </div>
		    <nav id="docs-nav" class="docs-nav navbar">
			    <ul class="section-items list-unstyled nav flex-column pb-3">
				    <li class="nav-item section-title"><a class="nav-link scrollto active" href="#section-1"><span class="theme-icon-holder me-2"><i class="fas fa-map-signs"></i></span>Introduction</a></li>
				    <li class="nav-item"><a class="nav-link scrollto" href="#item-1-1">Presentation</a></li>
				    <li class="nav-item section-title mt-3"><a class="nav-link scrollto" href="#section-2"><span class="theme-icon-holder me-2"><i class="fas fa-hand-point-right"></i></span>Prise en main</a></li>
					<li class="nav-item"><a class="nav-link scrollto" href="#item-2-1">Connexion</a></li>
					<li class="nav-item"><a class="nav-link scrollto" href="#item-2-2">Création de Compte</a></li>
					<li class="nav-item"><a class="nav-link scrollto" href="#item-2-3">Configuration du Compte</a></li>
					<li class="nav-item"><a class="nav-link scrollto" href="#item-2-4">Navigation de Base</a></li>
					<li class="nav-item"><a class="nav-link scrollto" href="#item-2-5">Types d'Utilisateurs et Fonctionnalités Spécifiques</a></li>
					<li class="nav-item"><a class="nav-link scrollto" href="#item-2-6">Exploration des Fonctionnalités</a></li>
				    <li class="nav-item section-title mt-3"><a class="nav-link scrollto" href="#section-9"><span class="theme-icon-holder me-2"><i class="fas fa-lightbulb"></i></span>FAQs</a></li>
				    <li class="nav-item"><a class="nav-link scrollto" href="#item-9-1">Section Item 9.1</a></li>
				    <li class="nav-item"><a class="nav-link scrollto" href="#item-9-2">Section Item 9.2</a></li>
				    <li class="nav-item"><a class="nav-link scrollto" href="#item-9-3">Section Item 9.3</a></li>
			    </ul>

		    </nav><!--//docs-nav-->
	    </div><!--//docs-sidebar-->
	    <div class="docs-content">
		    <div class="container">
			    <article class="docs-article" id="section-1">
				    <header class="docs-header">
					    <h1 class="docs-heading">Introduction <span class="docs-time">Dernière mise à jour : 2024-07-18</span></h1>
					     <section class="docs-intro">
							<p class="fw-medium">Explorez les fonctionnalités avancées et intuitives de ShapLocation pour une gestion immobilière et de transport efficace en Afrique.</p>
						</section>
	
				    </header>
				    <section class="docs-section" id="item-1-1">
						<div class="row">
							<div class="col-md-6">
								<h4 class="">Présentation de ShapLocation</h4>
								<p> <span class=" fw-medium">Shaplocation</span> est la plateforme de gestion immobilière de référence en Afrique, offrant une solution complète et intégrée pour la gestion de biens immobiliers et de services de transport. Confronté aux défis croissants du secteur immobilier, ShapLocation se distingue par son interface conviviale et ses fonctionnalités avancées qui centralisent les informations nécessaires et automatisent les tâches administratives. Que vous soyez propriétaire, gestionnaire de biens ou locataire, ShapLocation vous permet de gérer efficacement tous les aspects de l'immobilier, de l'achat à la vente, en passant par la location.</p>  
								<h4 class="">Objectifs de la documentation</h4>
								<p>Cette documentation a pour but de vous familiariser avec toutes les fonctionnalités essentielles de ShapLocation. Vous apprendrez à utiliser la plateforme pour gérer vos biens immobiliers, effectuer des locations et des ventes en toute sécurité, ainsi que pour louer ou acheter des voitures. En explorant cette documentation, vous serez en mesure de maximiser l'utilisation de ShapLocation et d'optimiser vos opérations immobilières et de transport.</p>
							</div>
							<div class="col-md-6 simplelightbox-gallery">
								<a href="/src/assets/images/shaplocation.png">
                   					 <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/shaplocation.png" alt="Image représentative de l'interface principale de ShapLocation" title="Shaplocation image"/>
                				</a>
							</div>
						</div>
						</section>				
			    </article>
			    
			   <article class="docs-article" id="section-2">
    <header class="docs-header">
        <h1 class="docs-heading">Prise en main</h1>
        <section class="docs-intro">
            <p>Découvrez comment démarrer avec ShapLocation pour tirer parti de ses fonctionnalités complètes. De la création de compte à la navigation intuitive, suivez ces étapes pour explorer facilement les possibilités offertes par notre plateforme.</p>
        </section>
    </header>
    
    <section class="docs-section" id="item-2-1">
        <div class=" row mb-3">
            <div class="col-md-6">
                <h4 class="">Connexion</h4>
                <ol>
                    <li>Entrez votre numéro de téléphone ou email et votre mot de passe.</li>
                    <li>Cliquez sur le bouton "Se connecter".</li>
                </ol>
            </div>
            <div class="col-md-6 simplelightbox-gallery">
				<a href="/src/assets/images/login.png" >
                   	<img class="figure-img img-fluid shadow rounded" src="/src/assets/images/login.png" alt="Image de la page de connexion" title="Page de connexion">
                </a>
			</div>
        </div>
    </section>

    <section class="docs-section" id="item-2-2">
        <div class="simplelightbox-gallery row mt-5">
            <div class="col-md-6">
                <h4 class="">Création de Compte</h4>
                <ol>
                    <li>Cliquez sur le bouton "Inscription" ou "Créer un compte".</li>
                    <li>Remplissez le formulaire avec vos informations personnelles (nom, email, mot de passe, etc.).</li>
                    <li>Sélectionnez votre type d'utilisateur (Utilisateur Standard, Démarcheur, Entreprise).</li>
                    <li>Cliquez sur le button "S'inscrire".</li>
                </ol>
                <h6>NB: Vous pouvez aussi vous connecter directement avec votre Gmail en cliquant sur le bouton "Se connecter avec Google".</h6>
            </div>
            <div class="col-md-6 simplelightbox-gallery">
                <a href="/src/assets/images/register.png">
                    <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/register.png" alt="Page de Création de Compte" title="Création de Compte"/>
                </a>
            </div>
        </div>
    </section>

    <section class="docs-section" id="item-2-3">
        <div class="simplelightbox-gallery row mt-5">
            <div class="col-md-6">
                <h4 class="">Configuration du Compte</h4>
                <ol>
                    <li>Accédez à la section "Profil" depuis le menu de navigation.</li>
                    <li>Ajoutez des informations supplémentaires telles que votre numéro de téléphone , une photo de profil et vous pouvez aussi changer le type de compte.</li>
                    <li>Enregistrez les modifications.</li>
                    <li>Vous pouvez aussi changer votre mot de passe en cliquant sur le button "Modifier le mot de passe".</li>
                </ol>
            </div>
            <div class="col-md-6 simplelightbox-gallery">
                <a href="/src/assets/images/profil.png">
                    <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/profil.png" alt="Imformation de profile" title="Configuration de profile"/>
                </a>
            </div>
        </div>
    </section>

    <section class="docs-section" id="item-2-4">
        <div class="simplelightbox-gallery row mt-5">
            <div class="col-md-12">
            <h4 class="">Barre de Navigation Principale</h4>
            <p>La barre de navigation principale se trouve en haut de chaque page et comprend les éléments suivants :</p>
            <ul>
                <li><strong>Barre de Recherche :</strong> Permet de rechercher des biens immobiliers ou des véhicules.</li>
                <li><strong>Bouton de Filtre :</strong> Ouvre une interface de filtres pour affiner les résultats de recherche par divers critères (prix, localisation, type de bien, etc.).</li>
                <li><strong>Panier d'Achat :</strong> Affiche les articles ajoutés au panier pour une éventuelle transaction.</li>
                <li><strong>Bouton de Messagerie :</strong> Redirige vers la page de discussions pour communiquer avec les propriétaires ou les agents.</li>
                <li><strong>Bouton de Sélection de Langue :</strong> Permet de choisir entre l'anglais et le français.</li>
                <li><strong>Bouton de Menu :</strong> Contient des liens vers les sections "À propos", "Contacts", "FAQ", "Profil", et "Se déconnecter".</li>
            </ul>
        </div>
            <!-- <div class="col-md-6 simplelightbox-gallery">
                <a href="/src/assets/images/navigation.png">
                    <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/navigation.png" alt="Navigation de Base" title="Navigation de Base"/>
                </a>
            </div> -->
        </div>
    </section>

    <section class="docs-section" id="item-2-5">
        <div class="simplelightbox-gallery row mt-5">
            <div class="col-md-12">
                <h4 class="">Types d'Utilisateurs et Fonctionnalités Spécifiques</h4>
                <p>ShapLocation propose des fonctionnalités spécifiques selon le type d'utilisateur :</p>
                <h5>1. Utilisateur Standard</h5>
                <ul>
                    <li>Fonctionnalités Principales : Faire des achats, louer des propriétés, contacter les démarcheurs et les entreprises.</li>
                    <li>Gestion des Achats : Visualisez et suivez vos commandes et locations.</li>
                    <li>Avis et Évaluations : Donnez des avis et évaluations sur les biens achetés ou loués.</li>
                </ul>
                <h5>2. Démarcheur</h5>
                <ul>
                    <li>Fonctionnalités Principales : Publier des annonces, organiser des visites, négocier des transactions.</li>
                    <li>Gestion des Annonces : Créez, modifiez et supprimez vos annonces.</li>
                    <li>Suivi des Interactions : Gérez les communications avec les utilisateurs standard et les entreprises.</li>
                </ul>
                <h5>3. Entreprise</h5>
                <ul>
                    <li>Fonctionnalités Principales : Publier des annonces, gérer plusieurs propriétés, accéder à des outils d'analyse avancés.</li>
                    <li>Gestion des Propriétés : Ajoutez et gérez un grand nombre de propriétés.</li>
                    <li>Statistiques et Rapports : Accédez à des rapports détaillés sur les performances de vos annonces et propriétés.</li>
                </ul>
            </div>
            <!-- <div class="col-md-6 simplelightbox-gallery">
                <a href="/src/assets/images/coderpro-features.png">
                    <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/coderpro-features-thumb.png" alt="Types d'Utilisateurs" title="Types d'Utilisateurs"/>
                </a> 
            </div>-->
        </div>
    </section>

    <section class="docs-section" id="item-2-6">
        <div class="simplelightbox-gallery row mt-5">
            <div class="col-md-12">
                <h4 class="">Exploration des Fonctionnalités Clés</h4>
                <ul>
                    <li>Gestion des Propriétés : Ajoutez des fiches détaillées pour chaque bien immobilier, incluant des photos, des descriptions et des documents juridiques. Suivez l'état de chaque propriété (disponible, en location, en vente, etc.).</li>
                    <li>Création d'Annonces : Publiez des annonces de location et de vente avec des descriptions complètes et des photos de haute qualité. Utilisez les outils de promotion pour augmenter la visibilité de vos annonces.</li>
                    <li>Gestion des Locations : Organisez des visites virtuelles pour vos propriétés. Gérez les demandes de location et les négociations de loyer via le chat en ligne.</li>
                    <li>Achats et Ventes : Achetez ou vendez des maisons, appartements et hôtels en toute sécurité. Utilisez les outils de vérification pour assurer la légalité des transactions.</li>
                    <li>Location de Voitures : Louez une voiture en ligne en choisissant parmi une variété de véhicules disponibles. Comparez les prix et les options disponibles.</li>
                    <li>Support et Assistance : Accédez à l'assistance professionnelle pour toute question ou problème technique. Utilisez la section FAQ pour trouver des réponses aux questions courantes.</li>
                </ul>
            </div>
            <!--<div class="col-md-6 simplelightbox-gallery">
                 <a href="/src/assets/images/coderpro-features.png">
                    <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/coderpro-features-thumb.png" alt="Fonctionnalités Clés" title="Fonctionnalités Clés"/>
                </a>
            </div> -->
        </div>
    </section>
               </article>

			    <article class="docs-article" id="section-9">
				    <header class="docs-header">
					    <h1 class="docs-heading">FAQs</h1>
					    <section class="docs-intro">
						    <p>Section intro goes here. You can list all your FAQs using the format below.</p>
						</section><!--//docs-intro-->
				    </header>
				     <section class="docs-section" id="item-9-1">
						<h2 class="section-heading">Section Item 9.1 <small>(FAQ Category One)</small></h2>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>What's sit amet quam eget lacinia?</h5>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How to ipsum dolor sit amet quam tortor?</h5>
						<p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Can I  bibendum sodales?</h5>
						<p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Where arcu sed urna gravida?</h5>
						<p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam libero, et elementum diam mollis ac. In dignissim aliquam est eget ullamcorper. Sed id sodales tortor, eu finibus leo. Vivamus dapibus sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec urna. </p>
					</section><!--//section-->
					
					<section class="docs-section" id="item-9-2">
						<h2 class="section-heading">Section Item 9.2 <small>(FAQ Category Two)</small></h2>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>What's sit amet quam eget lacinia?</h5>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How to ipsum dolor sit amet quam tortor?</h5>
						<p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Can I  bibendum sodales?</h5>
						<p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
						<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Where arcu sed urna gravida?</h5>
						<p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam libero, et elementum diam mollis ac. In dignissim aliquam est eget ullamcorper. Sed id sodales tortor, eu finibus leo. Vivamus dapibus sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec urna. </p>
					</section><!--//section-->
					
					<section class="docs-section" id="item-9-3">
							<h2 class="section-heading">Section Item 9.3 <small>(FAQ Category Three)</small></h2>
						    <h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How to dapibus sollicitudin justo vel fermentum?</h5>
							<p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
							<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How long bibendum sodales?</h5>
							<p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
							<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Where dapibus sollicitudin?</h5>
							<p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam libero, et elementum diam mollis ac. In dignissim aliquam est eget ullamcorper. Sed id sodales tortor, eu finibus leo. Vivamus dapibus sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec urna. </p>
					</section><!--//section-->
			    </article><!--//docs-article-->

			    <footer class="footer">
				    <div class="container text-center py-5">
				        <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
			            <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart" style="color: #fb866a;"></i> by <a class="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
				        <ul class="social-list list-unstyled pt-4 mb-0">
						    <li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li> 
				            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
				            <li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
				            <li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
				            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f fa-fw"></i></a></li>
				            <li class="list-inline-item"><a href="#"><i class="fab fa-instagram fa-fw"></i></a></li>
				        </ul><!--//social-list-->
				    </div>
			    </footer>
		    </div> 
	    </div>
    </div><!--//docs-wrapper-->
</template>

<style scoped>

</style>
