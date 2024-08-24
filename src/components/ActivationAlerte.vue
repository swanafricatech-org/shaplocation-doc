<script setup>

</script>

<template>

    <article class="docs-article" id="section-2">
        <header class="docs-header">
            <h1 class="docs-heading">Alertes sur des Articles d'Intérêt</h1>
            <section class="docs-intro">
                <p>
                    Découvrez comment activer des alertes pour recevoir des notifications lorsque des articles qui vous
                    intéressent sont disponibles sur ShapLocation. Suivez ces étapes simples pour ne rien manquer.
                </p>
            </section>
        </header>

        <section class="docs-section">
            <h2 class="vt-doc pad-top">Comment activer les alertes ?</h2>
            <p>Pour activer les alertes sur des articles spécifiques, suivez les étapes suivantes :</p>
            <div class="row mb-4 mt-5">
                <h5><span>#</span> Activer une alerte pour un article</h5>
                <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
                    <div class="   mb-3 ">
                        <video controls class="shadow" width="700">
                            <source src="/src/assets/video/activation-alerte.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <!-- <div class="video-container switch-visible-up mt-3 mb-3 ">
                    <video controls class="video-fluid  shadow">
                        <source src="/src/assets/video/activation-alerte.mp4" type="video/mp4">
                    </video>
                </div> -->
                <div class="col-md-6">
                    <ol>
                        <li>Accédez à la page d'accueil de la plateforme <a class="link-primary"
                                href="https://shaplocation.com/" target="_blank">shaplocation.com</a>.</li>
                        <li>Cliquez sur l'icône en forme de cloche située à côté de l'article.</li>
                        <li>Vous serez rediriger sur la page affichant vos alertes si vous en en n'avez déja certains
                            sinon par defaut elle sera vide.Cliquez sur le button <span class="fw-medium">"Nouvelle
                                alerte"</span></li>
                        <li>Un modal s'affichera avec le titre <span class="fw-medium">"Ajouter une alerte"</span>.</li>
                        <li>Cliquer pour sélectioner les types d'articles pour lesquels vous souhaitez recevoir des
                            alertes :</li>
                        <ul class="li-custom">
                            <li>Terrain</li>
                            <li>Appartement</li>
                            <li>Maison</li>
                            <li>Véhicule</li>
                            <li>Guest-House</li>
                            <li>Hôtel</li>
                            <li>Villa</li>
                        </ul>
                        <li>Cliquez sur le bouton <span class="fw-medium">"Enregistrer"</span> pour confirmer votre
                            sélection.</li>
                    </ol>
                </div>

                <div class="col-md-6 d-flex flex-column gap-4 justify-content-center align-items-center">
                    <!-- <div class="video-container switch-visible-down">
                        <video controls class="video-fluid switch-visible shadow">
                            <source src="/src/assets/video/activation-alerte.mp4" type="video/mp4">
                        </video>
                    </div> -->
                    <div class="gallery">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/activation-1.png"
                            alt="Image du modal d'activation d'alerte" title="Button d'activation d'alerte" />
                    </div>
                    <div class="gallery">
                        <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/activation-2.png"
                            alt="Image du modal d'activation d'alerte" title="Modal d'activation d'alerte" />
                    </div>
                    <div class="gallery">
                        <img class="figure-img img-fluid shadow rounded" src="/src/assets/images/activation-3.png"
                            alt="Image du modal d'activation d'alerte" title="Modal d'activation d'alerte" />
                    </div>
                </div>
            </div>
        </section>
    </article>

</template>

<style >
.li-custom li{
    padding: 0 !important;
}
</style>
