// French is the editorial source. Keep complete sentences together so that
// the English version can read naturally instead of translating word by word.
export const english = {
  "9 mois au sein d’une équipe technique": "9 months within a technical team",
  "CONTRIBUTION CONCRÈTE / OPTANIA": "A CONCRETE CONTRIBUTION / OPTANIA",
  "Consulter les résultats, sans tout recalculer.":
    "Read the results without rerunning everything.",
  "Pour Optania, une application interne de contrôle des données, j’ai développé un cache Java et optimisé des traitements SQL. Les derniers résultats pouvaient être consultés sans relancer systématiquement les calculs, avec la date de dernière actualisation et une option de recalcul à la demande.":
    "For Optania, an internal data-checking application, I developed a Java cache and optimized SQL processing. Users could view the latest results without rerunning every calculation, see when they were last refreshed and request a new calculation when needed.",
  "Approfondir mon stage au CECCE": "A closer look at my CECCE internship",
  "Pipelines, optimisation & résolution de problèmes":
    "Pipelines, optimization & problem solving",
  "01 / DU BESOIN À LA DONNÉE VALIDÉE":
    "01 / FROM REQUIREMENTS TO VALIDATED DATA",
  "Des composants intégrés à un pipeline d’équipe.":
    "Components within a shared data pipeline.",
  "Ma contribution portait sur l’extraction, la préparation, la validation et le dépannage des données. Mes fonctions s’intégraient à l’architecture globale réalisée par l’équipe.":
    "My contribution focused on extracting, preparing, validating and troubleshooting data. The functions I developed were components of the broader architecture built by the team.",
  "Comprendre le besoin": "Understand the requirement",
  "Identifier les données nécessaires, leur structure et le résultat attendu avec l’équipe.":
    "Identify the required data, its structure and the expected result with the team.",
  "Préparer la requête SQL": "Prepare the SQL query",
  "Développer ou adapter la requête qui extrait les données pertinentes des systèmes internes.":
    "Develop or adapt a query to extract the relevant data from internal systems.",
  "Intégrer la fonction Python": "Integrate the Python function",
  "Suivre le modèle commun de l’équipe pour faciliter la maintenance et la révision du composant.":
    "Follow the team’s shared pattern to make the component easier to maintain and review.",
  "Exécuter dans Microsoft Fabric": "Run in Microsoft Fabric",
  "Récupérer et préparer les données avant leur chargement dans l’environnement analytique.":
    "Retrieve and prepare data before loading it into the analytics environment.",
  "Valider et investiguer": "Validate and investigate",
  "Comparer les résultats aux attentes et rechercher les écarts dans le Python, le SQL ou les données sources.":
    "Compare results against expectations and trace discrepancies through Python, SQL or the source data.",
  "Faire réviser et intégrer": "Review and integrate",
  "Versionner dans Azure DevOps, intégrer les commentaires et participer au chargement dans un Lakehouse ou un entrepôt de données.":
    "Version code in Azure DevOps, incorporate feedback and contribute to loading data into a Lakehouse or data warehouse.",
  "02 / OPTIMISATION D’OPTANIA": "02 / OPTIMIZING OPTANIA",
  "Réutiliser les résultats. Garder le contrôle sur leur fraîcheur.":
    "Reuse results. Stay in control of their freshness.",
  "Le problème observé": "The observed problem",
  "Certains contrôles relançaient de nombreux traitements SQL, qui pouvaient prendre environ 10 à 15 minutes, même lorsque des résultats récents avaient déjà été calculés.":
    "Some checks reran numerous SQL operations that could take approximately 10 to 15 minutes, even when recent results had already been calculated.",
  "Mon intervention": "My contribution",
  "Optimiser une partie de la logique SQL et développer un cache Java des derniers résultats, avec une indication de la dernière actualisation et un recalcul déclenché volontairement par l’utilisateur.":
    "Optimize part of the SQL logic and develop a Java cache of the latest results, displaying the last refresh time and letting the user explicitly trigger a recalculation.",
  "Le résultat": "The outcome",
  "Une consultation plus réactive des résultats disponibles et moins de traitements redondants. L’utilisateur conservait la possibilité de demander des données actualisées lorsque nécessaire.":
    "More responsive access to available results and fewer redundant operations. Users retained the ability to request refreshed data whenever needed.",
  "03 / INVESTIGUER AVANT DE CONCLURE": "03 / INVESTIGATE BEFORE CONCLUDING",
  "Quand l’anomalie vient des données sources.":
    "When the issue comes from the source data.",
  "Face à des résultats inattendus, j’ai reproduit l’anomalie, revérifié la logique Python, examiné la requête SQL et comparé les résultats intermédiaires. En présentant mes recherches à un ingénieur, nous avons identifié un écart provenant des données sources.":
    "When results did not match expectations, I reproduced the issue, rechecked the Python logic, examined the SQL query and compared intermediate results. After I shared my investigation with an engineer, we identified a discrepancy originating in the source data.",
  "J’en ai retenu l’importance de documenter mes essais, de distinguer un défaut de code d’un problème de qualité des données et de solliciter un collègue quand le problème dépasse mon composant.":
    "This taught me to document my attempts, distinguish code defects from data-quality issues and involve a colleague when the problem extends beyond my component.",
  "Une méthode de travail que je garde aujourd’hui":
    "A way of working I still use today",
  "Comprendre le besoin, respecter les conventions d’une base de code existante, expliquer mes choix, intégrer les retours de revue et refaire les validations avant l’intégration. Ce stage m’a appris à conjuguer autonomie et collaboration avec des développeurs et des ingénieurs.":
    "Understand the requirement, follow an existing codebase’s conventions, explain my decisions, incorporate review feedback and validate again before integration. This internship taught me to balance independence with collaboration alongside developers and engineers.",
  Expérience: "Experience",
  "02 / EXPÉRIENCE PROFESSIONNELLE": "02 / PROFESSIONAL EXPERIENCE",
  "03 / MA FAÇON DE TRAVAILLER": "03 / HOW I WORK",
  "04 / LA SUITE S’ÉCRIT ENSEMBLE": "04 / LET’S BUILD WHAT’S NEXT",
  "Au sein d’une équipe.": "Working with a team.",
  "Sur des besoins réels.": "Solving real needs.",
  "Développement logiciel, données": "Software development, data",
  "et amélioration d’outils internes.": "and better internal tools.",
  "Mai 2025": "May 2025",
  "Janvier 2026": "January 2026",
  "Le CECCE": "About CECCE",
  "STAGE / DÉVELOPPEMENT LOGICIEL & DONNÉES":
    "INTERNSHIP / SOFTWARE DEVELOPMENT & DATA",
  "Stagiaire en développement logiciel": "Software Developer Intern",
  "Contribuer à des données fiables et à des applications internes plus réactives, dans un environnement de développement collaboratif.":
    "Contributing to reliable data and more responsive internal applications in a collaborative development environment.",
  "Pipelines de données": "Data pipelines",
  "Contribution à des pipelines Python et SQL dans Microsoft Fabric pour extraire, préparer et centraliser les données de systèmes internes.":
    "Contributed to Python and SQL pipelines in Microsoft Fabric to extract, prepare and centralize data from internal systems.",
  "Qualité et validation": "Quality and validation",
  "Contrôle des données, comparaison aux résultats attendus et investigation des anomalies avant leur chargement dans un Lakehouse ou un entrepôt de données.":
    "Checked data quality, compared results against expected outputs and investigated anomalies before loading data into a Lakehouse or data warehouse.",
  "Développement en équipe": "Collaborative development",
  "Développement de fonctions Python et adaptation de requêtes SQL selon les pratiques de l’équipe, avec gestion des versions, revue et validation dans Azure DevOps.":
    "Developed Python functions and adapted SQL queries following team practices, with version control, code review and validation in Azure DevOps.",
  "Performance applicative": "Application performance",
  "Optimisation de traitements SQL et développement d’un mécanisme de cache Java avec actualisation des résultats pour améliorer la réactivité d’une application interne.":
    "Optimized SQL processing and developed a Java caching mechanism with result refresh logic to improve an internal application’s responsiveness.",
  "Technologies utilisées pendant le stage":
    "Technologies used during the internship",
  "Aller au contenu": "Skip to content",
  "Azzam El Kettani, accueil": "Azzam El Kettani, home",
  "Navigation principale": "Main navigation",
  "Langue du site": "Website language",
  "Fermer le menu": "Close menu",
  "Ouvrir le menu": "Open menu",
  "Les projets": "Selected work",
  "À propos": "About",
  Discutons: "Let’s talk",
  "DÉVELOPPEUR FULL-STACK": "FULL-STACK DEVELOPER",
  "Ouvert aux opportunités": "Open to opportunities",
  "Du code.": "Code.",
  "Du sens.": "Purpose.",
  "De l’impact.": "Impact.",
  "Moi, c’est": "I’m",
  "Développeur full-stack et cofondateur de RZO Sports. Je construis des expériences web soignées et des produits qui rapprochent les gens.":
    "Full-stack developer and RZO Sports co-founder. I build thoughtful web experiences and products that bring people together.",
  "Explorer mes projets": "Explore my work",
  "01 / PROJETS SÉLECTIONNÉS": "01 / SELECTED WORK",
  "Trois projets.": "Three projects.",
  "Trois intentions.": "Three purposes.",
  "Un produit au service du sport.": "A product built around sport.",
  "Deux présences web singulières.": "Two distinct web experiences.",
  "La même attention à l’expérience.": "The same care for the experience.",
  "PROJET PHARE": "FEATURED PROJECT",
  "01 / PLATEFORME FULL-STACK": "01 / FULL-STACK PLATFORM",
  "Le sport nous rassemble.": "Sport brings us together.",
  "La technologie": "Technology",
  "crée le lien.": "makes the connection.",
  "Une plateforme pour trouver un terrain, organiser une partie et connecter les joueurs aux centres sportifs d’Ottawa et de Gatineau.":
    "A platform to find a field, organize a game and connect players with sports venues across Ottawa and Gatineau.",
  "Découvrir RZO": "Discover RZO",
  "L’histoire du projet": "The story behind it",
  "Un terrain de football, au cœur de l’expérience sportive RZO":
    "A soccer field at the heart of the RZO sports experience",
  "LE MÊME TERRAIN.": "ONE SHARED FIELD.",
  "DE NOUVELLES RENCONTRES.": "NEW CONNECTIONS.",
  "COFONDATEUR & DÉVELOPPEUR FULL-STACK": "CO-FOUNDER & FULL-STACK DEVELOPER",
  "Plus qu’un projet": "More than a",
  "de programmation.": "coding project.",
  "Un problème réel.": "A real problem.",
  "Deux cofondateurs.": "Two co-founders.",
  "Une entreprise incorporée.": "An incorporated company.",
  "Notre ambition : révolutionner la façon de vivre le sport et de créer du lien à Ottawa–Gatineau.":
    "Our ambition: transform how people play sports and build community in Ottawa–Gatineau.",
  "J’ai cofondé RZO Sports avec mon ami Mehdi Semmar à partir d’un constat simple : les joueurs et les centres sportifs avaient besoin d’un même espace pour se retrouver, réserver et organiser le jeu.":
    "I co-founded RZO Sports with my friend Mehdi Semmar around a simple observation: players and sports venues needed one place to connect, book and organize games.",
  "Nous avons rencontré des gestionnaires, au téléphone et sur place. Certains fonctionnaient encore par courriel, d’autres avec des outils peu adaptés. Ces échanges ont guidé la création d’un premier produit, testé auprès de vrais utilisateurs.":
    "We spoke with venue managers over the phone and in person. Some still relied on email; others were working with tools that did not meet their needs. Those conversations shaped our first product, tested with real users.",
  "Je m’investis dans ce projet sur la durée, de la réflexion produit au développement full-stack. Aujourd’hui, RZO est une entreprise incorporée, et nous développons notre réseau de centres partenaires, une rencontre à la fois.":
    "I’m committed to this project for the long term, from product thinking to full-stack development. RZO is now an incorporated company, and we are growing our network of venue partners, one conversation at a time.",
  "De l’idée au modèle d’affaires": "From idea to business model",
  "Accélérateur de l’Université d’Ottawa : étude de marché, plan d’affaires et identité de marque.":
    "University of Ottawa accelerator: market research, business planning and brand identity.",
  "Au concours de pitch": "At the pitch competition",
  "Deuxième place sur 40 équipes, devant un jury de quatre investisseurs.":
    "Second place out of 40 teams, pitching to a panel of four investors.",
  "Le produit face à son public": "Putting the product out there",
  "Présentation de RZO et échanges avec d’autres personnes qui construisent leurs entreprises.":
    "A live RZO demo and conversations with fellow founders and builders.",
  "DU CONCEPT AU PRODUIT": "FROM CONCEPT TO PRODUCT",
  "Un aperçu de l’application RZO Sports.": "A look inside the RZO Sports app.",
  "Agrandir la première capture RZO": "Enlarge the first RZO screenshot",
  "Capture de l’application RZO Sports":
    "RZO Sports app: homepage and sports discovery",
  "01 / L’EXPÉRIENCE RZO": "01 / THE RZO EXPERIENCE",
  "Agrandir la deuxième capture RZO": "Enlarge the second RZO screenshot",
  "Capture d’un espace de gestion RZO Sports":
    "RZO Sports venue workspace: scheduling configuration",
  "02 / LE PRODUIT EN DÉTAIL": "02 / INSIDE THE PRODUCT",
  "L’aventure racontée par Mehdi, mon cofondateur":
    "The story in my co-founder Mehdi’s words",
  "Sous le capot de RZO": "Under the hood of RZO",
  "Architecture, choix techniques & qualité":
    "Architecture, engineering decisions & quality",
  "Architecture RZO": "RZO architecture",
  "Interface & parcours": "Interface & user journeys",
  "API & règles métier": "API & business logic",
  "Données persistantes": "Persistent data",
  "Fonctionnalités et architecture décrites à partir du code du projet.":
    "Features and architecture documented from the project’s source code.",
  "Explorer le code client": "Explore the frontend code",
  "SITES VITRINES / DÉVELOPPEMENT STATIQUE":
    "BUSINESS WEBSITES / STATIC DEVELOPMENT",
  "Des univers qui": "Distinct identities.",
  "font la différence.": "Thoughtfully built.",
  "Identité visuelle, contenu et parcours.":
    "Visual identity, content and user journeys.",
  "Des sites légers, avec des interactions ciblées":
    "Lightweight sites with purposeful interactions",
  "et des services de réservation externes.": "and external booking services.",
  "02 / MA FAÇON DE TRAVAILLER": "02 / HOW I WORK",
  "Penser au-delà": "Thinking beyond",
  "de l’écran.": "the screen.",
  "J’aime comprendre ce qu’une personne cherche à accomplir, puis construire le chemin le plus clair pour y arriver.":
    "I like understanding what someone is trying to achieve, then building the clearest path to get there.",
  "Un site de restaurant, l’identité d’un salon ou une plateforme sportive : chaque projet demande ses propres choix. J’accorde autant d’attention à la lisibilité d’une interface qu’à la structure du code qui la fait fonctionner.":
    "A restaurant website, a salon’s identity or a sports platform: every project calls for its own decisions. I care as much about making an interface easy to understand as I do about the code behind it.",
  "Je souhaite rejoindre une équipe où je peux contribuer à des produits utiles, apprendre au contact d’autres développeurs et prendre des responsabilités concrètes.":
    "I’m looking to join a team where I can contribute to useful products, learn from other developers and take on meaningful responsibilities.",
  "Faisons connaissance sur LinkedIn": "Let’s connect on LinkedIn",
  "Soigner l’interface": "Craft the interface",
  "React, JavaScript, HTML et CSS. Des parcours responsives, une hiérarchie claire et une attention au clavier.":
    "React, JavaScript, HTML and CSS. Responsive journeys, clear hierarchy and attention to keyboard navigation.",
  "Structurer le produit": "Structure the product",
  "Java, Spring Boot, API REST et MySQL. Relier l’expérience utilisateur à une logique métier cohérente.":
    "Java, Spring Boot, REST APIs and MySQL. Connecting the user experience to consistent business logic.",
  "Partir du besoin": "Start with the need",
  "Comprendre le contexte, choisir les bons outils et améliorer le produit à partir de situations concrètes.":
    "Understand the context, choose the right tools and improve the product around real situations.",
  "03 / LA SUITE S’ÉCRIT ENSEMBLE": "03 / LET’S BUILD WHAT’S NEXT",
  "À l’écoute d’opportunités": "Open to opportunities",
  "Du concret.": "Real things.",
  Ensemble: "Together",
  "Vous cherchez un développeur impliqué,": "Looking for a committed developer",
  "avec le goût du produit et du travail soigné ?":
    "who cares about the product and the details?",
  "Parlons de votre équipe.": "Let’s talk about your team.",
  "Me contacter": "Get in touch",
  "Conçu avec intention. Développé avec soin.":
    "Designed with purpose. Developed with care.",
  "Retour en haut": "Back to top",
  "Voir le site": "Visit website",
  "nouvel onglet": "new tab",
  "Code source": "Source code",
  "Dans les coulisses du projet": "Behind the project",
  "Trouver son terrain": "Find your field",
  "Découvrir les installations, réserver des créneaux récurrents et laisser un avis après son expérience.":
    "Discover venues, make recurring bookings and leave a review after your visit.",
  "Se retrouver pour jouer": "Find people to play with",
  "Organiser des parties publiques ou privées, gérer les participants et partager les frais entre joueurs.":
    "Organize public or private games, manage participants and split the cost between players.",
  "Faire vivre son centre": "Run your venue",
  "Gérer les paiements, les statistiques, les horaires, les plages bloquées et les permissions des employés.":
    "Manage payments, statistics, schedules, blocked slots and employee permissions.",
  "Une interface pour chaque parcours": "An interface for every journey",
  "React et React Router structurent les espaces joueur et gestionnaire. Les appels réseau sont isolés dans des modules API. L’interface est disponible en français et en anglais avec i18next.":
    "React and React Router structure the player and manager workspaces. Network requests live in dedicated API modules. The interface supports French and English through i18next.",
  "Une logique métier structurée": "Structured business logic",
  "Le serveur Spring Boot sépare contrôleurs REST, services métier et accès aux données. Les réservations prennent en compte les horaires récurrents, les fermetures exceptionnelles et les conflits de créneaux.":
    "The Spring Boot backend separates REST controllers, business services and data access. Bookings account for recurring schedules, exceptional closures and conflicting time slots.",
  "Des accès et des paiements encadrés": "Access control and payment workflows",
  "L’authentification utilise des JWT en cookies HttpOnly. Les contrôles de propriété et de permissions protègent les ressources. Stripe et ses webhooks participent au suivi des paiements.":
    "Authentication uses JWTs stored in HttpOnly cookies. Ownership and permission checks protect resources. Stripe and its webhooks support payment tracking.",
  "Un projet pensé pour évoluer": "Built to keep evolving",
  "Docker Compose et Nginx structurent l’environnement. Le dépôt contient des tests sur les réservations, les disponibilités, les demandes de participation et les suppressions de ressources.":
    "Docker Compose and Nginx structure the environment. The repository includes tests for bookings, availability, join requests and resource deletion.",
  "Restaurant · Ottawa": "Restaurant · Ottawa",
  "Une identité qui ouvre l’appétit.": "An identity that builds an appetite.",
  "Un site vitrine expressif qui fait découvrir le menu, donne envie de passer au restaurant et guide vers la commande en ligne.":
    "An expressive restaurant website that showcases the menu, invites people in and guides visitors toward online ordering.",
  "Aperçu du site Tacozzo : identité jaune, menu et photographies des plats.":
    "Tacozzo website preview: yellow brand identity, menu and food photography.",
  "Le besoin": "The need",
  "Rendre l’offre du restaurant immédiatement lisible sur mobile et faciliter le passage de la découverte à la commande.":
    "Make the restaurant’s offering immediately clear on mobile and smooth the path from discovery to ordering.",
  "La réalisation": "The build",
  "Direction visuelle jaune et noire, menu filtrable alimenté par un fichier JSON, galerie au clavier et navigation mobile. Les plats phares restent lisibles sans JavaScript.":
    "Yellow and black art direction, a filterable menu powered by JSON, a keyboard-accessible gallery and mobile navigation. Featured dishes remain readable without JavaScript.",
  "Le parcours": "The journey",
  "Commande sur Uber Eats, itinéraire Google Maps et contact téléphonique. Le paiement est assuré par la plateforme de commande externe.":
    "Uber Eats ordering, Google Maps directions and phone contact. Checkout is handled by the external ordering platform.",
  "Le soin du détail": "The details",
  "Polices locales, images WebP, chargement différé des médias secondaires et aperçu de partage Open Graph. Build statique adapté à GitHub Pages et Cloudflare.":
    "Local fonts, WebP images, lazy-loaded secondary media and an Open Graph sharing preview. A static build for GitHub Pages and Cloudflare.",
  "Salon & barbier · Gatineau": "Salon & barbershop · Gatineau",
  "Le sens du détail, à l’écran aussi.": "Attention to detail, on screen too.",
  "Une expérience éditoriale pour découvrir le salon, ses réalisations et son équipe, puis réserver auprès du bon barbier.":
    "An editorial experience to explore the salon, its work and its team, then book with the right barber.",
  "Aperçu du site Lyz Barbier : accueil élégant et présentation des univers du salon.":
    "Lyz Barbier website preview: an elegant welcome and the salon’s two spaces.",
  "Traduire l’identité du salon en une présence numérique soignée et rendre le choix du barbier plus naturel.":
    "Bring the salon’s identity to a polished digital presence and make choosing a barber feel natural.",
  "Accueil Homme / Femme, espace Homme dédié, prestations, galerie filtrable, équipe et courts films du salon. L’espace Femme est clairement annoncé comme à venir.":
    "A Men / Women landing page, dedicated men’s section, services, filterable gallery, team profiles and short salon films. The women’s section is clearly marked as coming soon.",
  "Les liens de réservation ouvrent les profils Squire correspondants. Le choix final de la prestation et la confirmation se font sur Squire.":
    "Booking links open the matching Squire profiles. Final service selection and confirmation take place on Squire.",
  "Vidéos locales chargées au clic, pause hors écran, polices locales, navigation au clavier et carte de partage avec le logo du salon.":
    "Local videos loaded on click and paused off screen, local fonts, keyboard navigation and a sharing card featuring the salon’s logo.",
};
