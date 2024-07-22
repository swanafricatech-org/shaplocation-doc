<script setup>

</script>
<template>

    <article class="docs-article " id="section-2">
        <header class="docs-header">
            <h1 class="docs-heading">Réinitialisation de mot de passe</h1>
            <section class="docs-intro">
                <p>
                    Vous avez oublié votre mot de passe ? Pas de souci ! Suivez ces étapes simples pour réinitialiser
                    votre mot de passe et accéder à nouveau à votre compte ShapLocation en toute sécurité.
                </p>
            </section>
        </header>

        <section class="docs-section">
            <h2 class="vt-doc pad-top">Que faire en cas d'oubli de mot de passe ?</h2>
            <p>Pour réinitialiser son mot de passe sur ShapLocation, vous avez deux modes de réinitialisation :</p>
            <ul>
                <li><a href="#rin-mode-1" class="link-primary">Réinitialisation par numéro de téléphone</a></li>
                <li><a href="#rin-mode-2" class="link-primary">Réinitialisation par email</a></li>
            </ul>
            Voici comment procéder pour chaque méthode :
            <div class="row mb-4 mt-5" id="rin-mode-1">
                <div class="col-md-6">
                    <h5><span>#</span> Réinitialisation par numéro de téléphone</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a></li>
                        <li>Vous trouverez le lien "Mot de passe oublié ?", cliquez dessus et vous serez redirigé vers
                            la page de réinitialisation.</li>
                        <li>Cliquez sur l'endroit où c'est écrit <span class="fw-medium">"Numéro"</span>, vous verrez un
                            formulaire de vérification juste en bas.</li>
                        <li>Entrez votre numéro de téléphone enregistré sur la plateforme lors de l'inscription.</li>
                        <li>Cliquez sur le bouton "Envoyer".
                            <ol type="">
                                <li>Un code de vérification sera envoyé par SMS à votre numéro de téléphone.</li>
                                <li>Entrez le code de vérification reçu dans le champ approprié.</li>
                                <li>Créez un nouveau mot de passe et confirmez-le.</li>
                                <li>Cliquez sur "Réinitialiser le mot de passe" pour valider.</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class="gallery">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/login-1.png"
                            alt="Image de la page la page de réinitialisation de mot de passe par numéro de téléphone"
                            title="la page de réinitialisation de mot de passe par numéro de téléphone" />
                    </div>
                </div>
            </div>
            <div class="row mb-3 mt-5" id="rin-mode-2">
                <div class="col-md-6">
                    <h5><span>#</span> Réinitialisation par email</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a></li>
                        <li>Vous trouverez le lien "Mot de passe oublié ?", cliquez dessus et vous serez redirigé vers
                            la page de réinitialisation.</li>
                        <li>Cliquez sur l'endroit où c'est écrit <span class="fw-medium">"Email"</span>, vous verrez un
                            formulaire de vérification juste en bas.</li>
                        <li>Entrez votre adresse email enregistrée sur la plateforme lors de l'inscription.</li>
                        <li>Cliquez sur le bouton "Envoyer".
                            <ol >
                                <li>Un email contenant un lien de réinitialisation du mot de passe sera envoyé à votre
                                    adresse email.</li>
                                <li>Ouvrez l'email de réinitialisation et cliquez sur le lien fourni.</li>
                                <li>Créez un nouveau mot de passe et confirmez-le.</li>
                                <li>Cliquez sur "Réinitialiser le mot de passe" pour valider.</li>
                            </ol>
                        </li>

                    </ol>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class="gallery">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/login-2.png"
                            alt="Image de la page de réinitialisation de mot de passe par email"
                            title="la page de réinitialisation de mot de passe par email" />
                    </div>
                </div>
            </div>
        </section>

    </article>
</template>