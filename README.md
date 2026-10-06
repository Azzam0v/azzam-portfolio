# Azzam El Kettani — portfolio FR / EN

Portfolio d’un étudiant en génie informatique à uOttawa, développeur full-stack et cofondateur de RZO Sports. Trois projets principaux : **RZO Sports**, **Overy**, **Sports Facility Discovery**. Trois sites livrés et vendus à des clients : **Tacozzo**, **Lyz Barbier** et **Round Style**, chacun sur son propre domaine.

## Démarrer

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Sous PowerShell, utiliser `npm.cmd` si nécessaire. Le site utilise le préfixe `/azzam-portfolio/`. La version production est générée dans `dist/`.

## Présentation

- Profil et contact pour les recruteurs.
- Expérience CECCE : stage de développeur logiciel, mai 2025–janvier 2026, missions Python/SQL, Microsoft Fabric, Azure DevOps et Java, d’après le CV fourni. Section et menu disponibles en français et en anglais.
- RZO : présentation courte, puis étude de cas dépliable avec récit entrepreneurial, Startup Garage, deuxième place sur 40 équipes, Shopify Builders, captures et architecture.
- Overy : fondateur et développeur principal d’un réseau Minecraft Bedrock multi-serveurs ; proxy, données partagées en MySQL, core maison, centaines de plugins, anti-cheat, protection DDoS, boutique Tebex, panel web, bot Discord et équipe de plus de 50 personnes. Résultats du récit d’Azzam : 10 000+ joueurs (200 en simultané), 10 000 €+ de chiffre d’affaires, 7e mondial et 2e en France. Liens publics et capture réelle du catalogue mobile dans l’étude de cas.
- Sports Facility Discovery : prospection d’installations sportives, collecte multi-source, déduplication, scoring, classification locale Ollama et interface de validation React.
- Tacozzo, Lyz et Round Style : trois sites statiques vendus à des clients, chacun avec son identité, son aperçu, son étude de cas et un lien vers son domaine. Le code client reste privé.
- Les ambitions sont formulées comme des ambitions. Les résultats affichés (réservations de Lyz multipliées par deux en trois mois) viennent d’Azzam.
- Le développement de RZO est présenté comme un projet partagé entre cofondateurs.

## Organisation

| Fichier | Responsabilité |
| --- | --- |
| `src/App.jsx` | Structure, présentation RZO, menu mobile et contact |
| `src/components/ProjectCard.jsx` | Aperçu et étude de cas d’un site vitrine |
| `src/components/SoftwareProjects.jsx` | Overy et Sports Facility Discovery : synthèse, résultats, contributions et études de cas |
| `src/components/Experience.jsx` | Stage CECCE, synthèse et approfondissement : pipeline, Optania, investigation et collaboration |
| `src/data/projects.js` | Liens, fonctionnalités et descriptions des projets |
| `src/data/english.js` | Traductions anglaises des textes français |
| `src/i18n.jsx` | Langue, persistance, URL et métadonnées du navigateur |
| `src/styles.css` | Identité visuelle, responsive, focus et mouvement réduit |
| `public/images/` | Captures locales et carte de partage |
| `public/fonts/` | Inter auto-hébergée et licence |
| `index.html` | Métadonnées statiques de partage |

## Langues

Le sélecteur FR / EN reste visible sur ordinateur et mobile. Priorité au chargement : paramètre `?lang=fr` ou `?lang=en`, préférence `localStorage`, puis français.

- Français : `https://azzam0v.github.io/azzam-portfolio/?lang=fr`
- Anglais : `https://azzam0v.github.io/azzam-portfolio/?lang=en`

Le changement conserve la position et les sections ouvertes. Il actualise `html[lang]`, le titre et la description. Un stockage bloqué ne casse pas le site. Pour modifier un texte, mettre à jour le français et sa traduction dans `english.js`. Marques, identifiants et URL restent inchangés. Les captures gardent la langue de l’application source.

Les métadonnées Open Graph sont communes aux langues, car les messageries ne rendent généralement pas le JavaScript. La carte annonce donc un portfolio FR / EN.

## Interactions et accessibilité

Lien d’évitement, titres structurés, focus visible, boutons avec états ARIA, menu fermé par Échap avec restauration du focus, études de cas natives `details/summary`, captures agrandissables et respect de `prefers-reduced-motion`.

## Publication

Le workflow `.github/workflows/deploy.yml` compile et publie sur GitHub Pages lors d’un push sur `main`. Le préfixe existant `/azzam-portfolio/` préserve le lien du CV. Les composants utilisent `import.meta.env.BASE_URL` pour les images.

En cas de changement de domaine, actualiser le canonical et les URL absolues Open Graph / Twitter dans `index.html`. Cette intervention prépare les fichiers localement ; aucun déploiement n’est lancé.

## Documentation

- [Études de cas et preuves dans le code](docs/PROJECTS.md)
- [Sources éditoriales et visuelles](docs/SOURCES.md)
- [Vérifications et limites](docs/QA.md)

Stack du portfolio : React 18, Vite, CSS, Lucide React. Aucun backend, formulaire collectant des données ou service de traduction distant ajouté.
