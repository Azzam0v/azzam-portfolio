# Vérifications — 15 septembre 2026

## Architecture RZO et Overy — 6 octobre 2026

- RZO : schéma d’architecture corrigé (site et app → API Spring Boot sur EC2 derrière Nginx → MySQL ; Stripe relié à l’API, webhooks en retour) et trois décisions techniques visibles dans l’étude de cas : verrou pessimiste contre les doubles réservations, clés d’idempotence Stripe, déploiement Docker. Source : analyse du dépôt serveur privé fournie par Azzam.
- Overy : l’illustration est remplacée par un vrai schéma du réseau avec le parcours d’une connexion en six étapes, trois défis techniques et l’exemple des raids persistants. L’étude de cas est réduite à quatre blocs pour éviter les répétitions.
- Titre de la section projets : « Du produit à la production ».
- Compilation production réussie. Contrôle Playwright en FR à 1280 px et en EN à 390 px : aucun débordement, aucune erreur JavaScript.

## Capstone et illustration Overy — 6 octobre 2026

- Sports Facility Discovery remplacé par le capstone drone autonome à partir du CV fourni. Rôle, équipe, technologies et état en cours traduits en anglais ; introduction et métadonnées adaptées.
- Illustration vectorielle Overy visible sans ouvrir l’étude de cas, avec description accessible et libellés FR / EN. Capture de boutique conservée dans l’étude de cas.
- Build production réussi. Contrôle du rendu à 1280 et 390 px dans les deux langues : projet capstone présent, ancien projet absent, études de cas fonctionnelles, capture boutique chargée, aucun débordement horizontal ni erreur JavaScript ou HTTP.

## Nouvelle interface RZO — 6 octobre 2026

- Captures RZO remplacées par la nouvelle interface (accueil, offre complexes, agenda) et trois écrans de l’app mobile, en FR et EN selon la langue choisie.
- Étude de cas enrichie : modèle sans abonnement (1 %), chiffres clés du produit, app mobile React Native, six parcours, préautorisations Stripe, moteur de réservation, conformité, tests et exploitation. Faits relevés dans les trois dépôts RZO et sur rzosports.com.
- Lien « Explorer le code client » retiré : le dépôt est privé (404 pour un visiteur). Remplacé par l’offre publique pour les complexes.
- Compilation production réussie. Contrôle Playwright, étude de cas et « Sous le capot » ouverts, en FR à 1280 et 900 px et en EN à 390 px : aucun débordement, aucune image cassée, aucune erreur JavaScript ou HTTP.

## Round Style et domaines clients — 6 octobre 2026

- Ajout de Round Style (site vendu à la marque, roundstyles.com) avec aperçu capturé depuis la version compilée du site, étude de cas et traductions.
- Liens « Voir le site » de Tacozzo et Lyz remplacés par leurs domaines réels (tacozzo-on.ca, lyzbarbier.ca). Liens « Code source » retirés pour les sites clients, dont les dépôts sont privés.
- Grille des sites : trois colonnes sur ordinateur, deux colonnes avec la dernière carte en pleine largeur entre 761 et 1100 px, une colonne sur mobile.
- Compilation production réussie. Contrôle Playwright en FR à 1280 et 390 px et en EN à 900 px : aucun débordement, aucune erreur JavaScript, liens vérifiés.

## Stage CECCE détaillé et sites clients — 4 octobre 2026

- Section CECCE réécrite à partir des notes de stage d’Azzam : sources Aspen et StaffAllocator, transformations Spark SQL / PySpark, tables Delta, Fabric User Data Functions, documentation Confluence et cache Optania remplaçant les rapports envoyés par courriel. Nouvelle étude de cas sur le comptage des effectifs sans doublons.
- Tacozzo et Lyz présentés comme sites vendus à des clients ; résultat de Lyz (réservations multipliées par deux en trois mois) fourni par Azzam.
- Overy mis à jour avec les chiffres et réalisations confirmés par Azzam : 10 000+ joueurs, 10 000 €+, 7e mondial et 2e en France, réseau multi-serveurs, core maison, anti-cheat, protection DDoS, outils internes et équipe de 50+ personnes.
- Toutes les nouvelles chaînes couvertes par le dictionnaire anglais.
- Compilation production réussie. Contrôle Playwright de la version compilée en FR à 1280 px et en EN à 390 px, études ouvertes : aucun débordement horizontal, aucune erreur JavaScript.

## Récit détaillé et boutique Overy — 17 septembre 2026

- Capture réelle du catalogue Tebex en vue mobile 390 × 1000, JPEG de 62 Ko, servie localement dans l’étude de cas ; lien d’agrandissement et dimensions vérifiés.
- Les deux liens publics pointent vers les adresses fournies : boutique Tebex et fiche MinecraftPocket-Servers. Aucune action de panier ou de paiement effectuée.
- Traductions vérifiées pour le récit, les contributions, les résultats, les liens, la légende et le texte alternatif de la capture.
- Compilation production réussie. Contrôles Playwright FR/EN, de 320 à 1440 px, études ouvertes et fermées : aucun débordement, aucune erreur JavaScript ou HTTP locale. Image décodée avec sa largeur native attendue.
- Audit axe WCAG 2 A/AA et 2.1 AA, études ouvertes sur ordinateur en FR/EN : aucune violation détectée. Présentation de la capture contrôlée visuellement sur ordinateur et mobile.
- Boutique externe : rendu mobile chargé ; vue ordinateur arrêtée par un challenge Cloudflare avec une erreur DNS sur une ressource de vérification. Le problème précis du PC de l’utilisateur n’a pas été reproduit ni corrigé.

Les prix de la capture sont datés et ne sont pas synchronisés. Les contrôles concernent le portfolio local ; aucun déploiement lancé.

## Ajout d’Overy et de Sports Facility Discovery — 17 septembre 2026

- Compilation production réussie avec la base GitHub Pages existante.
- Vérification dans Microsoft Edge sans fenêtre avec Playwright sur la version compilée : ordre RZO, Overy, Sports Facility Discovery, Tacozzo, Lyz.
- Études de cas fermées au chargement ; le lien de RZO ouvre son récit avant la navigation vers l’ancre.
- Ouverture d’Overy et de Sports Facility Discovery, changement FR/EN avec conservation de l’état ouvert, langue après rechargement et liens directs vérifiés.
- Textes éditoriaux des deux nouveaux projets couverts par le dictionnaire anglais.
- Aucun débordement horizontal à 320, 390, 768, 1024 et 1440 px en FR et EN, détails ouverts et fermés.
- Audit axe WCAG 2 A/AA et 2.1 AA, toutes les études de cas ouvertes sur ordinateur : aucune violation détectée en FR et EN.
- Menu mobile : fermeture par Échap et restauration du focus vérifiées.
- Aucune erreur JavaScript ou réponse HTTP en erreur observée pendant ces parcours.
- Captures d’Overy contrôlées visuellement sur ordinateur en français et sur mobile en anglais. Script, captures et rapport locaux dans `.tmp/`, exclus du site et du suivi Git.

Les affirmations d’Overy et de Sports Facility Discovery proviennent du CV fourni et confirmé par Azzam. Ces contrôles portent sur le portfolio, pas sur les systèmes de ces projets. Aucun déploiement lancé.

## Résultats

- Compilation production du portfolio réussie avec son préfixe GitHub Pages.
- Tacozzo compilé avec les bases `/` et `/tacozzo-landing/`.
- Version compilée contrôlée : lien anglais direct, chemins des images et polices, ancres internes et métadonnées Tacozzo sans JavaScript. Le serveur renvoie bien le PNG 1200 × 630.
- Rendu ordinateur FR / EN et accueil mobile vérifiés visuellement.
- Aucun débordement horizontal à 320, 375, 390, 768, 1024 et 1440 px.
- Aucune erreur JavaScript ou HTTP locale observée pendant les parcours.
- Images toutes chargées après défilement et décodage.
- FR / EN, traduction des détails, `html[lang]` et persistance après rechargement validés.
- Menu mobile : ouverture, fermeture par Échap et après navigation validées.
- Études de cas et détails techniques : ouverture validée.
- Audit axe FR et EN, règles WCAG 2 A/AA et 2.1 AA : aucune violation détectée dans les états testés, après correction du contraste des numéros de fonctionnalités.

## Méthode

Playwright et Microsoft Edge sans fenêtre. Le navigateur intégré n’a pas pu démarrer dans cette session. Les captures et le rapport sont conservés dans le dossier de travail `output/`, hors du site publié.

## Limites

Un audit automatisé ne remplace pas une évaluation complète avec lecteurs d’écran. Les validations sont locales ; aucun déploiement n’est lancé. L’aperçu réel dans iMessage ou WhatsApp dépend de la publication et des caches. Les tests métier, paiements et serveur RZO n’ont pas été exécutés ou modifiés. Aucun score Lighthouse n’est annoncé.

## Après publication

## Ajout de l’expérience CECCE

Section vérifiée en français et en anglais : dates, quatre contributions, six étapes du pipeline, ouverture des détails et conservation de leur état au changement de langue. Navigation mobile vers l’expérience et fermeture du menu validées. Aucun débordement aux largeurs 320, 390, 768, 900 et 1440 px. Aucun problème détecté par axe sur la section ouverte en FR ordinateur et EN mobile, aucune erreur JavaScript observée. Compilation finale réussie. Les exemples métier proviennent du récit de l’utilisateur et ne sont pas des résultats reproduits sur les systèmes du CECCE.

## Vérification après publication

1. Ouvrir le lien du CV sur ordinateur et téléphone.
2. Tester FR / EN et un lien direct `?lang=en`.
3. Ouvrir chaque lien de site et de code source.
4. Vérifier l’accès public aux PNG de partage.
5. Envoyer un nouveau message avec le lien Tacozzo ; laisser le cache se réactualiser si nécessaire.
