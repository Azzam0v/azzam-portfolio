# Vérifications — 15 septembre 2026

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
