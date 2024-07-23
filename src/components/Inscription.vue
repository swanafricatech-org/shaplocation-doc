<script setup>

</script>
<template>

    <article class="docs-article pc" id="section-2">
        <header class="docs-header">
            <h1 class="docs-heading">Inscription</h1>
            <section class="docs-intro">
                <p>
                    Découvrez comment créer un compte sur ShapLocation pour profiter de toutes ses fonctionnalités.
                    Suivez ces
                    étapes simples pour vous inscrire et commencer à utiliser notre plateforme.
                </p>
            </section>
        </header>
        <section class="docs-section ">
            <h2 class="vt-doc pad-top">Comment s'inscrire ?</h2>
            <p>Pour s'inscrire sur ShapLocation, vous avez deux (02) modes d'inscription :
            <ul>
                <li><a href="#ins-mode-1" class="link-primary"> Incription complète</a></li>
                <li><a href="#ins-mode-2" class="link-primary">Inscription par Google</a></li>
            </ul>
            Voici comment procéder pour chaque méthode :
            </p>
            <div class="row mb-3 mt-5" id="ins-mode-1">
                <div class="col-md-6">
                    <h5><span>#</span> Inscription complète</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a>
                        </li>
                        <li>
                            Vous verrez le lien "Créer un compte" en bas de la page,
                            cliquer la dessus.
                        </li>
                        <li>
                            Fournissez les Informations Personnelles :
                            <ul>
                                <li>
                                    Nom et prénom : Entrez votre prénom et nom .
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

                    </ol>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class=" gallery  ">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/register-1.png"
                            alt="Image de la page d'inscription" title="Page de d'inscription" />
                    </div>
                </div>
            </div>
            <div class="row mb-3 mt-5" id="ins-mode-2">
                <div class="col-md-6">
                    <h5><span>#</span> Inscription par Google</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a>
                        </li>
                        <li>
                            Vous verrez le lien "Créer un compte" en bas de la page,
                            cliquer la dessus.
                        </li>
                        <li> vous verrez
                            le button "Se connecter avec
                            Google" juste en bas .</li>
                        <li>Cliquez sur le button "Se connecter avec Google".</li>
                        <li>Une fenêtre de connexion Google s'ouvrira. Entrez vos informations de connexion Google
                            (adresse email et mot de passe) et suivez les instructions pour vous authentifier.</li>
                        <li>Accordez les autorisations - Si c'est la première fois que vous utilisez votre compte Google
                            pour vous connecter à ShapLocation, vous serez invité à accorder certaines autorisations.
                            Cliquez sur "Accepter" ou "Autoriser".</li>
                        <li>Finalisez la Connexion - Une fois les autorisations accordées,vous serez inscrire
                            automatiquement
                            avec votre compte Google. Ensuite vous serez redirigé vers
                            la page de <RouterLink to="/profil" class="link-primary"> mise à jour de profil</RouterLink>
                        </li>


                    </ol>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class=" gallery  ">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/register-2.png"
                            alt="Image de la page d'inscription par google" title="Page de d'inscription" />
                    </div>
                </div>
            </div>
        </section>
    </article>

</template>

<style scoped></style>