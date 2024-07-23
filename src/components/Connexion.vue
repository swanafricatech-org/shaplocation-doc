<script setup>
    
</script>
<template>

    <article class="docs-article" id="section-2">
        <header class="docs-header">
            <h1 class="docs-heading">Connexion</h1>
            <section class="docs-intro">
                <p>
                    Découvrez comment vous connecter à ShapLocation pour accéder à toutes ses fonctionnalités. Que ce
                    soit par numéro de téléphone, email, ou directement par Google, suivez ces étapes pour vous
                    authentifier facilement sur notre plateforme.
                </p>
            </section>
        </header>

        <section class="docs-section">
            <h2 class="vt-doc pad-top">Comment se connecter ?</h2>
            <p>Pour se connecter à ShapLocation, vous avez trois (03) modes de connexion :
            <ul>
                <li><a href="#mode-1" class="link-primary">connexion par numéro de téléphone et mot de passe</a></li>
                <li><a href="#mode-2" class="link-primary">connexion par email et mot de passe</a></li>
                <li><a href="#mode-3" class="link-primary">connexion directe par gmail</a></li>
            </ul>
            Voici comment procéder pour chaque méthode :
            </p>
            <div class="row mb-4 mt-5" id="mode-1">
                <div class="col-md-6">
                    <h5><span>#</span> Connexion par numéro de téléphone et mot de passe</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a>
                        </li>
                        <li>Cliquez sur l'endoit ou c'est écris le <span class="fw-medium">"Numero"</span>, vous verrez
                            un formulaire de connexion juste en bas .
                        </li>
                        <li>
                            Entrez votre numéro de téléphone et votre mot de passe.
                            <ul>
                                <li>Assurez-vous que votre numéro de téléphone est enregistré sur la plateforme.</li>
                                <li>Le mot de passe doit correspondre à celui que vous avez défini lors de votre
                                    inscription.</li>
                            </ul>
                        </li>
                        <li>Cliquez sur le bouton "Connexion".</li>
                    </ol>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class=" gallery  ">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/login-1.png"
                            alt="Image de la page de connexion" title="Page de connexion" />
                    </div>
                </div>
            </div>
            <div class="row mb-3 mt-5" id="mode-2">
                <div class="col-md-6">
                    <h5><span>#</span> Connexion par email et mot de passe</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a>
                        </li>
                        <li>Cliquez sur l'endoit ou c'est écris le <span class="fw-medium">"Email"</span>, vous verrez
                            un formulaire de connexion juste en bas .</li>
                        <li>
                            Entrez votre adresse email et votre mot de passe.
                            <ul>
                                <li>Utilisez l'adresse email que vous avez enregistrée sur la plateforme.</li>
                                <li>Le mot de passe doit correspondre à celui que vous avez défini lors de votre
                                    inscription.</li>
                            </ul>
                        </li>
                        <li>Cliquez sur le bouton "Connexion".</li>
                    </ol>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class=" gallery  ">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/login-2.png"
                            alt="Image de la page de connexion" title="Page de connexion" />
                    </div>
                </div>
            </div>
            <div class="row mb-3 mt-5" id="mode-3">
                <div class="col-md-6">
                    <h5><span>#</span> Connexion par Google</h5>
                    <ol>
                        <li>Accédez à la Plateforme - Allez sur la page de connexion <a class="link-primary"
                                href="https://shaplocation.com/auth/signin" target="_blank">shaplocation.com</a>
                        </li>
                        <li>Cliquez sur l'endroit ou c'est écris le <span class="fw-medium">"Email"</span>, vous verrez
                            le button "Se connecter avec
                            Google" juste en bas .</li>
                        <li>Cliquez sur le button "Se connecter avec Google".</li>
                        <li>Une fenêtre de connexion Google s'ouvrira. Entrez vos informations de connexion Google
                            (adresse email et mot de passe) et suivez les instructions pour vous authentifier.</li>
                        <li>Accordez les autorisations - Si c'est la première fois que vous utilisez votre compte Google
                            pour vous connecter à ShapLocation, vous serez invité à accorder certaines autorisations.
                            Cliquez sur "Accepter" ou "Autoriser".</li>
                        <li>Finalisez la Connexion - Une fois les autorisations accordées,vous serez connecté
                            automatiquement
                            avec votre compte Google. Ensuite vous serez redirigé vers
                            la page de <RouterLink to="/profil" class="link-primary"> mise à jour de profil</RouterLink>
                        </li>

                        <!-- <li>Complétez le Profil :
                            <ul>
                                <li>Photo de profil : Pour une identification visuelle.</li>
                                <li>Ajouter un numéro de téléphone : Pour être contacté et/ou recevoir des notifications
                                    par SMS.</li>
                            </ul>
                        </li> -->
                    </ol>
                    <p>
                        <span class="fw-medium">NB:</span> Assurez-vous que votre compte Google est bien sécurisé et
                        que vous avez accès à l'adresse email associée pour toute vérification ultérieure.
                    </p>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class=" gallery  ">
                        <img class="figure-img img-fluid shadow rounded" src="@/assets/images/login-3.png"
                            alt="Image de la page de connexion" title="Page de connexion" />

                    </div>
                </div>
            </div>
        </section>
    </article>

</template>
    
<style scoped>

</style>
    