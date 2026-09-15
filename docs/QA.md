# Vérifications — 15 septembre 2026

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

1. Ouvrir le lien du CV sur ordinateur et téléphone.
2. Tester FR / EN et un lien direct `?lang=en`.
3. Ouvrir chaque lien de site et de code source.
4. Vérifier l’accès public aux PNG de partage.
5. Envoyer un nouveau message avec le lien Tacozzo ; laisser le cache se réactualiser si nécessaire.
