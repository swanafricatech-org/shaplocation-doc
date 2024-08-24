<script setup>

</script>
<template>

    <article class="docs-article" id="section-2">
        <header class="docs-header">
            <h1 class="docs-heading">Configuration de profil</h1>
            <section class="docs-intro">
                <p>
                    Découvrez comment mettre à jour et gérer votre profil sur ShapLocation. Assurez-vous que vos
                    informations personnelles, telles que votre nom, prénom, photo de profil, adresse email et numéro de
                    téléphone, sont à jour pour une expérience utilisateur optimale.
                </p>
            </section>
        </header>
        <section class="docs-section" id="profil-config">
            <h2 class="vt-doc pad-top">Comment mettre à jour le profil ?</h2>
            <p>Pour mettre à jour son profil sur ShapLocation, suivez les étapes suivantes :</p>
            <div class="row">
                <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
                    <div class="   mb-3 ">
                        <video controls class="shadow" width="700">
                            <source src="/src/assets/video/profil-config.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
            <div class="row mb-3 ">
                <div class="col-md-6">
                    <ol>
                        <li>Accédez à la Plateforme <a class="link-primary" href="https://shaplocation.com/"
                                target="_blank">shaplocation.com</a></li>
                        <li>Connectez-vous à votre compte si ce n'est pas encore déja fait en cliquant <a
                                class="link-primary" href="https://shaplocation.com/auth/signin"
                                target="_blank">ici</a>. <br>Si
                            vous ne savez pas comment faire,consultez notre guide de
                            <RouterLink to="/connexion" class="link-primary">connexion</RouterLink> pour plus
                            d'instructions.
                        </li>
                        <li>Accédez à votre profil en cliquant sur profil en haut à droite.</li>
                        <li>
                            Mettez à jour vos informations :
                            <ul>
                                <li><span class="fw-medium">Nom et Prénom :</span> Modifiez votre prénom et nom de
                                    famille si nécessaire.</li>
                                <li><span class="fw-medium">Photo de Profil :</span> Téléchargez une nouvelle photo de
                                    profil en cliquant sur la photo présente sur la page pour une meilleure
                                    identification visuelle.</li>
                                <li><span class="fw-medium">Adresse Email :</span> Changez votre adresse email pour
                                    recevoir des notifications à la bonne adresse.</li>
                                <li><span class="fw-medium">Numéro de Téléphone :</span> Mettez à jour votre numéro de
                                    téléphone pour les vérifications et les notifications par SMS.</li>
                                <li><span class="fw-medium">Type de compte :</span> Modifiez le type de compte si
                                    nécessaire.</li>
                            </ul>
                        </li>
                        <li>Enregistrez les modifications en cliquant sur le bouton "Modifier le profil".</li>
                        <li>Vérifiez les mises à jour - Assurez-vous que les modifications ont été correctement
                            enregistrées en consultant votre profil.</li>
                    </ol>
                    <p>
                        <span class="fw-medium">NB:</span> Si vous rencontrez des difficultés, contactez-nous par email,
                        par téléphone ou en écrivant dans ce forum.
                    </p>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">

                    <div class=" gallery  ">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/profil.png"
                            alt="Image de la page de profil" title="Page de profil" />
                    </div>
                </div>
            </div>
        </section>
    </article>


</template>

<style scoped></style>