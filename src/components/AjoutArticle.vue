<script setup>

</script>
<template>

    <article class="docs-article" id="section-3">
        <header class="docs-header">
            <h1 class="docs-heading">Publication d'articles</h1>
            <section class="docs-intro">
                <p>
                    Découvrez comment ajouter des articles à vendre sur ShapLocation. Suivez ces étapes simples pour
                    publier vos articles et les rendre visibles aux acheteurs potentiels.
                </p>
            </section>
        </header>
        <section class="docs-section">
            <h2 class="vt-doc pad-top">Comment ajouter un article ?</h2>
            <p>Pour ajouter un article sur ShapLocation, suivez les étapes suivantes :</p>
            <div class="row mb-3 mt-3">
                <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
                    <div class="   mb-3 ">
                        <video controls class="shadow" width="700">
                            <source src="/src/assets/video/connexion-email.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="col-md-12">
                    <h3 class="d-flex align-items-center step-title text-primary">
                        <span class="mx-1">Les Préliminaires</span>
                    </h3>
                    <ol>
                        <li>Accédez à la Plateforme <a class="link-primary" href="https://shaplocation.com/"
                                target="_blank">shaplocation.com</a></li>
                        <li>Connectez-vous à votre compte si ce n'est pas encore le cas en cliquant <a
                                class="link-primary" href="https://shaplocation.com/auth/signin"
                                target="_blank">ici</a>. <br>Si
                            vous ne savez pas comment faire,consultez notre guide sur
                            <RouterLink to="/connexion" class="link-primary">la connexion</RouterLink> pour plus
                            d'instructions.
                        </li>
                        <li>
                            Assurez-vous que vous êtes inscrit en tant que marchand ou propriétaire. Si ce n'est pas le
                            cas, allez dans votre profil <a href="https://shaplocation.com/dashboard/user/profile"
                                target="_blank" rel="noopener noreferrer" class="link-primary">ici</a> et changez le
                            type de compte en
                            suivant les instructions. <br>
                            <p>Si vous ne savez pas comment faire,consultez notre guide sur<RouterLink
                                    to="/devenir-commercant" class="link-primary mx-2">comment devenir commerçant
                                </RouterLink> pour plus d'instructions.</p>

                        </li>
                        <li>
                            Accédez au tableau de bord en cliquant sur l'icône de tableau de bord en forme de carré en
                            haut ou accedez directement en cliquant <a
                                href="https://shaplocation.com/dashboard/articles" target="_blank"
                                rel="noopener noreferrer" class="link-primary">Ici</a> . Vous serez redirigé vers votre
                            tableau
                            de bord où vos articles seront affichés. Par
                            défaut, il n'y a aucun article.
                        </li>
                        <li>
                            Ajoutez un article en cliquant sur le bouton "Ajouter un article" en haut à droite. Suivez
                            les instructions pour publier un article.
                        </li>
                        <li>
                            Publiez l'article en choisissant le type d'article que vous souhaitez publier et en suivant
                            les instructions restantes.
                            <p><span class="fw-medium">NB:</span> Si vous ne voyez pas les types d'articles à ce niveau,
                                alors vous devez compléter les informations de votre profil d'abord. Après avoir mis à
                                jour vos informations, les types d'articles apparaîtront.</p>
                            <RouterLink to="/profil" class="link-primary">Decouvrez comment completer les informations
                                de profile ici</RouterLink>
                        </li>
                        <li>
                            Après avoir choisi le type d'article, validez et entrez les informations générales, de
                            localisation, de caractéristiques, et les images.
                        </li>
                        <li>Avant de publier, vous devrez payer les frais de publication. Les frais sont calculés en
                            pourcentage du prix de vente de l'article.
                            <ol type="a">
                                <li>Cliquez sur le bouton affichant le montant à payer.</li>
                                <li>Vous serez redirigé vers la page de paiement.</li>
                                <li>Sélectionnez le mode de paiement et validez le paiement.</li>
                            </ol>
                        </li>
                        <li>Une fois les frais de publication payés, votre article sera automatiquement publié sur la
                            plateforme et sera disponible sur le marché.
                        </li>
                    </ol>
                </div>
            </div>
            <div class="row mb-3 mt-5">
                <div class="col-md-12">
                    <h3 class="d-flex align-items-center step-title text-primary">
                        <span class="mx-1">Formulaire d'enregistrement</span>
                    </h3>
                    <ol class="numbered-list">
                        <li><strong>Informations générales</strong>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Ajoutez quelques informations de base telles que le titre, la description, et le
                                        prix.
                                        Commencez par sélectionner l'option de mise en vente ou de mise en location :
                                    </p>
                                    <p>
                                        <span class="fw-semibold">- Mettre en vente :</span> Sélectionnez cette option
                                        pour
                                        vendre l'article.
                                        Ensuite, indiquez le prix auquel vous souhaitez vendre l'article, ainsi que le
                                        titre
                                        et
                                        la description.
                                    </p>
                                    <p>
                                        <span class="fw-semibold">- Mettre en location :</span> Sélectionnez cette
                                        option
                                        pour
                                        louer l'article.
                                        Ensuite, indiquez le prix de location, le titre, et la description. Si vous
                                        choisissez
                                        cette option, un champ supplémentaire apparaîtra pour spécifier la périodicité
                                        de la
                                        location (jour, mois, ou année). Assurez-vous d'indiquer clairement la durée de
                                        location
                                        ainsi que le tarif correspondant à chaque période.
                                    </p>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class=" gallery  ">
                                        <img class="figure-img img-fluid shadow rounded"
                                            src="@/assets/images/infogenerale.png"
                                            alt="Image du button de changement de mot de passe"
                                            title="Information générale" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><strong class="">Localisation</strong>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Indiquez l'emplacement exact, y compris l'adresse, quartier, la ville et
                                        toute information géographique pertinente :
                                    </p>
                                    <p><span class="fw-semibold">- Pays :</span> Sélectionnez le pays où se trouve
                                        l'article.
                                    </p>
                                    <p><span class="fw-semibold">- Départements :</span> Indiquez le département
                                        correspondant.
                                    </p>
                                    <p><span class="fw-semibold">- Communes :</span> Sélectionnez la commune appropriée.
                                    </p>
                                    <p><span class="fw-semibold">- Arrondissements :</span> Indiquez l'arrondissement
                                        spécifique.
                                    </p>
                                    <p><span class="fw-semibold">- Quartiers :</span> Précisez le quartier.</p>
                                    <p><span class="fw-semibold">- Adresse :</span> Fournissez l'adresse complète
                                        incluant le
                                        numéro de rue,
                                        le nom de la rue, et toute autre information pertinente.</p>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class=" gallery  ">
                                        <img class="figure-img img-fluid shadow rounded"
                                            src="@/assets/images/localisation.png" alt="Localisation"
                                            title="Localisation page" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><strong class="">Caractéristiques</strong>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Donnez quelques informations principales concernant votre article. Vous pourrez
                                        ajouter
                                        d'autres informations plus tard.</p>
                                    <p>Pour chaque caractéristique, utilisez les boutons <span
                                            class="fw-medium  bg-transparent span-custom">-</span> et <span
                                            class="fw-medium  bg-transparent span-custom">+</span> pour ajuster la
                                        quantité. Si
                                        une caractéristique ne s'applique pas à votre article, vous pouvez la supprimer
                                        avec le
                                        button de suppression <i class="fas fa-trash"></i> :</p>
                                    <span class="fw-medium pt-2 ">NB: Les caractéristiques de bases qui s'affiche tienne
                                        compte
                                        du type d'article.Ici nous avons un examples des caractéristiques d'un
                                        appartement.</span>
                                    <div class="row pt-3">
                                        <div class="col-md-4">
                                            <p class="fw-semibold">- Superficie</p>
                                            <p class="fw-semibold">- Chambres</p>
                                            <p class="fw-semibold">- Nombre de salons</p>
                                            <p class="fw-semibold">- Cuisine</p>
                                            <p class="fw-semibold">- Salle de Bain</p>
                                            <p class="fw-semibold">- Salle à Manger</p>
                                            <p class="fw-semibold">- Studio</p>
                                            <p class="fw-semibold">- Type de construction (Simple sans dalle, Dallé sans
                                                étage,
                                                R+1, R+2,etc…)</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p class="fw-semibold">- Duplex</p>
                                            <p class="fw-semibold">- Loft</p>
                                            <p class="fw-semibold">- Électricité et Eau</p>
                                            <p class="fw-semibold">- Chauffage et Climatisation</p>
                                            <p class="fw-semibold">- Internet et Télévision</p>
                                            <p class="fw-semibold">- Source d’énergie électrique (SBEE, Panneau solaire,
                                                Groupe
                                                électrogène, autre)</p>
                                            <p class="fw-semibold">- Sécurité</p>
                                            <p class="fw-semibold">- Balcon/Terrasse</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p class="fw-semibold">- Jardin Commun</p>
                                            <p class="fw-semibold">- Piscine</p>
                                            <p class="fw-semibold">- Urbain</p>
                                            <p class="fw-semibold">- Suburbain</p>
                                            <p class="fw-semibold">- Rural</p>
                                            <p class="fw-semibold">- Ascenseur</p>
                                            <p class="fw-semibold">- Escaliers</p>
                                            <p class="fw-semibold">- Parking</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class=" gallery  ">
                                        <img class="figure-img img-fluid shadow rounded"
                                            src="@/assets/images/caracteristiques.png" alt="caracteristiques"
                                            title="Caractéristiques image" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><strong class="">Images et video(facultatif)</strong>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Téléchargez des photos ou des courtes video de haute qualité pour illustrer
                                        l'article.Pour commencer, vous aurez besoin au minimum
                                        de 3 photos. Vous pourrez en ajouter d'autres ou faire des modifications plus
                                        tard.
                                        Assurez-vous d'inclure
                                        des vues détaillées et variées pour donner une meilleure compréhension visuelle.
                                    </p>
                                    <p><span class="fw-semibold">- Photos :</span> Glissez et déposez des fichiers ici
                                        ou
                                        cliquez
                                        pour sélectionner.
                                    </p>
                                    <p><span class="fw-semibold">- Fichiers acceptés :</span> jpeg, png, jpg
                                    </p>
                                    <p><span class="fw-semibold">- Taille maximale :</span> 2Mo</p>
                                    <span class="fw-medium pt-2 ">NB: Si vous choissez vos fichier , vous aurez un
                                        aperçu de
                                        chaque images que vous aviez choisir . Au cas ou vous voulez supprimmer ou
                                        changer il
                                        suffit de faire juste un survol sur l'image et vous aller voir un button en
                                        croix que
                                        vous aller appuyer pour supprimmer l'image.</span>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class=" gallery  ">
                                        <img class="figure-img img-fluid shadow rounded"
                                            src="@/assets/images/images.png" alt="" title="images pages" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><strong>Résumé</strong>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>
                                        Un résumé de toutes les informations fournies, incluant les détails clés comme
                                        le titre,
                                        la description, le prix, la localisation, et les images. Ce résumé vous
                                        permettra
                                        d'avoir une vue d'ensemble de l'article avec toutes les informations que vous
                                        avez
                                        enregistrées avant de publier l'article.
                                    </p>
                                    <p>
                                        Si vous souhaitez modifier quelque chose, vous pouvez utiliser les boutons
                                        "Suivant" et
                                        "Précédent" pour naviguer vers la section correspondante et apporter les
                                        corrections
                                        nécessaires avant de publier.
                                    </p>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class=" gallery  ">
                                        <img class="figure-img img-fluid shadow rounded"
                                            src="@/assets/images/resume.png"
                                            alt="Image du button de changement de mot de passe" title="Résumé" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>

                </div>
            </div>
            <div class="row mb-3 mt-5">
                <div class="col-md-12">
                    <h3 class="d-flex align-items-center step-title text-primary">
                        <span class="mx-1">Processus de Paiement</span>
                    </h3>
                    <ol>
                        <li>
                            Cliquez sur le bouton affichant le montant à payer.
                        </li>
                        <li>
                            Vous serez redirigé vers la page de paiement.
                        </li>
                        <li>
                            Sélectionnez le mode de paiement souhaité (carte bancaire, mobile money, etc.) et
                            validez le paiement.
                        </li>
                        <li>
                            Une fois le paiement effectué, vous recevrez une confirmation et votre article sera
                            automatiquement publié sur la plateforme.
                        </li>
                        <li>
                            En cas de difficultés, contactez le support via l'option d'aide sur la plateforme ou en
                            envoyant un email à support@shaplocation.com.
                        </li>
                    </ol>
                </div>
            </div>
            <p>
                <span class="fw-medium">NB:</span> Si vous rencontrez des difficultés, contactez-nous par email,
                par téléphone ou en écrivant dans ce forum.
            </p>
        </section>
    </article>

</template>

<style scoped></style>