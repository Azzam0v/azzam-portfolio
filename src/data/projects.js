// Sources: local repositories and the supplied CV; see docs/PROJECTS.md.
export const profile = {
  name: "Azzam El Kettani",
  github: "https://github.com/Azzam0v",
  linkedin: "https://www.linkedin.com/in/azzam-el-kettani-656b3b301/",
};
// RZO facts come from the RZO-SPORTS-CLIENT, -SERVER and -MOBILE repositories
// and from rzosports.com (October 2026). The repositories are private.
export const rzo = {
  live: "https://rzosports.com/",
  venues: "https://rzosports.com/complexes",
  technologies: [
    "React",
    "React Native",
    "Java 21",
    "Spring Boot",
    "MySQL",
    "Stripe Connect",
    "Docker",
  ],
  facts: [
    ["3", "applications : site web, API et app mobile"],
    ["0 $", "d’abonnement pour les complexes, 1 % de frais de service"],
    ["20", "permissions pour déléguer au personnel d’un complexe"],
    ["FR / EN", "plateforme, courriels et documents légaux bilingues"],
  ],
  // Screenshots exist in both languages: `{lang}` is replaced at render time.
  shots: [
    {
      image: "images/rzo-home-{lang}.webp",
      alt: "Page d’accueil de RZO Sports : réserver un terrain, rejoindre ou créer une partie, puis choisir son sport.",
      caption: "01 / ACCUEIL JOUEURS · RZOSPORTS.COM",
      wide: true,
    },
    {
      image: "images/rzo-venues-{lang}.webp",
      alt: "Page RZO pour les complexes : tableau de bord et notifications de nouvelle demande, réservation garantie et partie complète.",
      caption: "02 / L’OFFRE POUR LES COMPLEXES",
    },
    {
      image: "images/rzo-agenda-{lang}.webp",
      alt: "Agenda hebdomadaire des réservations d’un complexe de démonstration, avec les réservations par terrain.",
      caption: "03 / AGENDA D’UN COMPLEXE (DONNÉES DE DÉMO)",
    },
  ],
  mobile: {
    title: "L’app mobile, en route vers les stores.",
    text: "Une app iOS et Android pour les joueurs, construite avec React Native, Expo et TypeScript sur la même API que le site. On l’explore sans compte, on réserve et on paie avec Stripe, on se connecte avec Google, et on retrouve la carte des complexes, les avis et les parties à rejoindre. Elle est annoncée sur le site, sortie prévue sur l’App Store et Google Play.",
    points: [
      "Jeton JWT conservé dans le trousseau du téléphone, plutôt que le cookie HttpOnly du web",
      "Formulaire de paiement Stripe natif, qui enregistre la carte pour la préautorisation",
      "QR code d’entrée pour les joueurs et scanner pour l’accueil des complexes, en cours d’intégration",
    ],
    shots: [
      ["explore", "Explorer : sports et complexes d’Ottawa–Gatineau"],
      ["game", "Parties à venir et prix par joueur"],
      ["slots", "Créneaux libres d’un terrain"],
    ],
  },
  features: [
    [
      "01",
      "Réserver en quelques clics",
      "Recherche par sport et par proximité, seulement les créneaux vraiment libres, paiement par carte, Apple Pay, Google Pay ou Link, et alertes hebdomadaires de disponibilités.",
    ],
    [
      "02",
      "Remplir sa partie",
      "Parties publiques ou privées, demandes de participation et partage des frais : chacun voit et paie sa part, avec un prix par joueur affiché avant de rejoindre.",
    ],
    [
      "03",
      "Payer seulement ce qui est joué",
      "Les cartes sont préautorisées six jours avant la partie et débitées après. Annulation ou départ tardif suivent la politique du complexe, connue dès la réservation.",
    ],
    [
      "04",
      "Gérer son complexe",
      "Agenda hebdomadaire, réservations au comptoir, clients réguliers sur plages récurrentes, approbation manuelle ou automatique des demandes.",
    ],
    [
      "05",
      "Fixer ses règles",
      "Plages horaires, pas de temps, durées permises, délais, temps de nettoyage et fermetures. Rôles sur mesure et plusieurs complexes par compte.",
    ],
    [
      "06",
      "Piloter et encaisser",
      "Taux d’occupation, revenu par heure, heures de pointe et projections. Versements Stripe Connect, taxes de vente par complexe et courriels automatiques.",
    ],
  ],
  engineering: [
    {
      title: "Deux clients, une même API",
      text: "Le site React sépare les espaces joueur, complexe et administration, avec des appels réseau isolés dans des modules API. L’app React Native réutilise les mêmes routes : le serveur accepte un cookie HttpOnly sur le web et un jeton Bearer sur mobile.",
      tags: ["React Router", "Tailwind CSS", "Expo Router", "i18next"],
    },
    {
      title: "Un moteur de réservation",
      text: "Les disponibilités combinent horaires récurrents, fermetures, délais et temps de nettoyage. Les règles hebdomadaires restent sur l’heure locale du complexe, même lors des changements d’heure, et les demandes concurrentes sur un même créneau sont annulées automatiquement.",
      tags: ["Spring Boot", "Spring Data JPA", "MySQL"],
    },
    {
      title: "Des paiements par préautorisation",
      text: "Plutôt que débiter puis rembourser, le serveur pose une empreinte sur chaque carte, puis la capture ou la libère. Verrous sur la part de chaque joueur, protection contre le double débit, nouvelles tentatives lors d’une panne de Stripe et reçus par courriel.",
      tags: ["Stripe Connect", "Webhooks", "Transactions"],
    },
    {
      title: "Des accès et des permissions",
      text: "Spring Security, JWT et connexion Google OAuth2. Les services vérifient la propriété des ressources, et chaque rôle d’un complexe choisit parmi 20 permissions : la réception peut réserver sans voir les revenus.",
      tags: ["Spring Security", "JWT", "OAuth2"],
    },
    {
      title: "Une entreprise qui respecte ses obligations",
      text: "Consentements horodatés et versionnés, entente de partenariat exigée avant de gérer un complexe, suppression de compte anonymisée et déclaration des taxes de vente, en tenant compte de la LPRPDE et de la Loi 25 du Québec.",
      tags: ["Consentements", "Loi 25", "LPRPDE"],
    },
    {
      title: "Tester et exploiter",
      text: "Environ 300 tests JUnit, et des tests de mutation PIT sur les règles de prix et d’authentification. Docker Compose, Nginx et Let’s Encrypt en production, images sur Cloudflare R2, courriels bilingues avec Thymeleaf et tâches planifiées.",
      tags: ["JUnit", "PIT", "Docker", "Nginx"],
    },
  ],
};
export const projects = [
  {
    id: "tacozzo",
    number: "04",
    name: "Tacozzo",
    location: "Restaurant · Ottawa",
    headline: "Une identité qui ouvre l’appétit.",
    description:
      "Un site vitrine expressif, livré et vendu au restaurant, qui fait découvrir le menu, donne envie de passer au restaurant et guide vers la commande en ligne.",
    live: "https://tacozzo-on.ca/",
    image: "images/tacozzo-preview.jpg",
    alt: "Aperçu du site Tacozzo : identité jaune, menu et photographies des plats.",
    technologies: ["HTML", "CSS", "JavaScript", "Vite"],
    details: [
      [
        "Le besoin",
        "Rendre l’offre du restaurant immédiatement lisible sur mobile et faciliter le passage de la découverte à la commande.",
      ],
      [
        "La réalisation",
        "Direction visuelle jaune et noire, menu filtrable alimenté par un fichier JSON, galerie au clavier et navigation mobile. Les plats phares restent lisibles sans JavaScript.",
      ],
      [
        "Le parcours",
        "Commande sur Uber Eats, itinéraire Google Maps et contact téléphonique. Le paiement est assuré par la plateforme de commande externe.",
      ],
      [
        "Le soin du détail",
        "Polices locales, images WebP, chargement différé des médias secondaires et aperçu de partage Open Graph. Build statique adapté à GitHub Pages et Cloudflare.",
      ],
      [
        "Le client",
        "Projet commandé et acheté par le restaurant : cadrage, conception, développement et mise en ligne sur Cloudflare.",
      ],
    ],
  },
  {
    id: "lyz",
    number: "05",
    name: "Lyz Barbier",
    location: "Salon & barbier · Gatineau",
    headline: "Le sens du détail, à l’écran aussi.",
    description:
      "Une expérience éditoriale, vendue au salon, pour découvrir ses réalisations et son équipe, puis réserver auprès du bon barbier. Les réservations ont doublé dans les trois mois suivant la mise en ligne.",
    live: "https://lyzbarbier.ca/",
    image: "images/lyz-preview.jpg",
    alt: "Aperçu du site Lyz Barbier : accueil élégant et présentation des univers du salon.",
    technologies: ["HTML", "CSS", "JavaScript", "Vite"],
    details: [
      [
        "Le besoin",
        "Traduire l’identité du salon en une présence numérique soignée et rendre le choix du barbier plus naturel.",
      ],
      [
        "La réalisation",
        "Accueil Homme / Femme, espace Homme dédié, prestations, galerie filtrable, équipe et courts films du salon. L’espace Femme est clairement annoncé comme à venir.",
      ],
      [
        "Le parcours",
        "Les liens de réservation ouvrent les profils Squire correspondants. Le choix final de la prestation et la confirmation se font sur Squire.",
      ],
      [
        "Le soin du détail",
        "Vidéos locales chargées au clic, pause hors écran, polices locales, navigation au clavier et carte de partage avec le logo du salon.",
      ],
      [
        "Le résultat",
        "Site commandé et acheté par le salon. Dans les trois mois suivant la mise en ligne, ses réservations ont été multipliées par deux.",
      ],
    ],
  },
  {
    id: "roundstyle",
    number: "06",
    name: "Round Style",
    location: "Marque de vêtements · Ottawa",
    headline: "Une pièce. Une histoire.",
    description:
      "Une vitrine éditoriale, vendue à la marque, pour présenter sa première collection et le récit de son fondateur, puis transformer l’intérêt en demande d’achat.",
    live: "https://roundstyles.com/",
    image: "images/roundstyle-preview.jpg",
    alt: "Aperçu du site Round Style : nom de la marque en grand sur fond noir et logo circulaire Round Style 1960.",
    technologies: ["HTML", "CSS", "JavaScript", "Vite"],
    details: [
      [
        "Le besoin",
        "Donner à une jeune marque inspirée par ses racines africaines une présence à la hauteur de ses pièces, et permettre de les acheter sans boutique en ligne.",
      ],
      [
        "La réalisation",
        "Ouverture typographique sur fond noir, collection numérotée en grands formats, fiche détaillée pour chaque pièce et espace éditorial dédié au récit du fondateur.",
      ],
      [
        "Le parcours",
        "Chaque fiche propose une demande d’achat par courriel, préremplie avec le nom de la pièce. Pas de panier ni de paiement : la marque échange directement avec ses clients.",
      ],
      [
        "Le client",
        "Site commandé et acheté par la marque, mis en ligne sur son propre domaine avec Cloudflare.",
      ],
    ],
  },
];

export const softwareProjects = [
  {
    id: "overy",
    number: "02",
    name: "Overy",
    category: "BACKEND / SYSTÈMES DISTRIBUÉS / PRODUIT EN PRODUCTION",
    role: "Fondateur & développeur principal",
    headline: "D’un serveur Minecraft à un réseau multijoueur classé 7e mondial.",
    description:
      "J’ai fondé, développé et exploité Overy : un réseau de serveurs Minecraft Bedrock interconnectés, avec son core maison, ses centaines de plugins, ses services backend, sa base de données, sa boutique et ses outils internes. J’ai dirigé une équipe de plus de 50 personnes et utilisé les données d’activité pour faire évoluer le produit.",
    technologies: ["Java", "PHP", "MySQL", "Node.js", "Linux"],
    results: [
      ["10 000+", "joueurs, jusqu’à 200 connectés en même temps"],
      ["10 000 €+", "de chiffre d’affaires"],
      ["7e mondial", "et 2e en France"],
    ],
    contributions: [
      "Réseau multi-serveurs derrière un proxy : données, monnaie et grades partagés en MySQL, messagerie entre serveurs et matchmaking des mini-jeux.",
      "Core de serveur maison, centaines de plugins Java et PHP, anti-cheat, requêtes asynchrones et cache pour éviter le lag.",
      "Boutique Tebex à livraison automatique, panel web pour le staff, bot Discord et outils statistiques pour orienter les offres.",
    ],
    links: [
      { label: "Voir la boutique", href: "https://overy.tebex.io/" },
      {
        label: "Fiche publique du serveur",
        href: "https://minecraftpocket-servers.com/server/119622/",
      },
    ],
    showcase: {
      image: "images/overy-shop-mobile.jpg",
      alt: "Capture mobile de la boutique Overy sur Tebex : présentation des OveryCoins et offre de 500 pièces.",
      title: "Une boutique reliée à l’expérience de jeu.",
      text: "Les joueurs achètent des OveryCoins sur la boutique Tebex, puis les utilisent en jeu pour obtenir des grades, des clés et des éléments de personnalisation. La boutique annonce une livraison automatique sur le serveur à partir du pseudo renseigné.",
      caption: "Boutique Tebex · capture mobile du 17 septembre 2026",
    },
    details: [
      [
        "Construire pour des joueurs",
        "Overy a commencé comme un serveur Minecraft quand j’avais 12 ou 13 ans. Avec la croissance de la communauté, il fallait attirer et fidéliser les joueurs, développer des fonctionnalités, gérer les achats et corriger les problèmes techniques. J’assurais la direction du produit autant que son développement, dans un environnement utilisé au quotidien par des milliers de joueurs.",
      ],
      [
        "Un réseau de serveurs interconnectés",
        "Overy n’était pas un serveur unique : plusieurs serveurs (lobby, mini-jeux, modes de jeu) fonctionnaient derrière un proxy. Les données des joueurs, leur monnaie et leurs grades étaient partagés en MySQL entre tous les serveurs, une messagerie reliait les serveurs entre eux, et un système de matchmaking répartissait les joueurs dans les parties de mini-jeux.",
      ],
      [
        "Un core maison et des centaines de plugins",
        "Les fonctionnalités reposaient sur un core de serveur maison et sur des centaines de plugins Java et PHP développés par l’équipe. Je concevais et maintenais la base MySQL qui organisait les données des joueurs, des fonctionnalités et des achats, en préservant la cohérence entre tous ces composants.",
      ],
      [
        "Tenir la charge en production",
        "Pour garder une expérience fluide jusqu’à 200 joueurs connectés en même temps, les accès à la base de données passaient par des requêtes asynchrones et du cache plutôt que de bloquer le jeu. Nous avons développé un anti-cheat maison et mis en place une protection qui a tenu face à de vraies attaques DDoS.",
      ],
      [
        "Des outils autour du jeu",
        "La boutique Tebex livrait automatiquement les achats en jeu. Un panel web permettait au staff de gérer les joueurs, les sanctions et les statistiques, et un bot Discord reliait la communauté au serveur. J’ai créé et utilisé des outils statistiques pour analyser les achats et l’activité, adapter les offres et prioriser le développement.",
      ],
      [
        "Diriger une équipe de plus de 50 personnes",
        "Au fil du projet, j’ai recruté et dirigé plus de 50 personnes réparties entre le développement, la modélisation 3D et les textures. Je définissais les priorités, répartissais les tâches, révisais le code avant les mises à jour et traitais les problèmes en production.",
      ],
      [
        "Des résultats et une responsabilité concrète",
        "Overy a rassemblé plus de 10 000 joueurs, atteint la 7e place mondiale et la 2e en France, et généré plus de 10 000 € de chiffre d’affaires. J’y ai appris tout le cycle de vie d’un produit : développer, tester, déployer, maintenir et décider à partir des données.",
      ],
    ],
  },
  {
    id: "sports-discovery",
    number: "03",
    name: "Sports Facility Discovery",
    category: "DATA / AUTOMATISATION / IA LOCALE",
    role: "Projet personnel · développement full-stack",
    headline: "Transformer des sources dispersées en installations qualifiées.",
    description:
      "Une plateforme de prospection qui identifie, enrichit et qualifie des installations sportives à partir de Google Places, d’OpenStreetMap et de sources web publiques.",
    technologies: ["React", "Node.js", "Express", "Web scraping", "Ollama"],
    results: [
      ["Des centaines", "d’installations identifiées et qualifiées"],
      ["Ollama", "classification par IA locale"],
      ["Validation humaine", "depuis l’interface React"],
    ],
    contributions: [
      "Collecte et enrichissement depuis les API géographiques et les sources web publiques.",
      "Pipeline de déduplication, score de confiance et classification avec Ollama.",
      "Validation des résultats, export CSV et génération de courriels de prise de contact personnalisés.",
    ],
    details: [
      [
        "Le besoin",
        "Identifier des installations pertinentes sans refaire manuellement les mêmes recherches. J’ai construit une plateforme qui rassemble les informations de plusieurs sources pour faciliter la qualification et préparer la prise de contact.",
      ],
      [
        "De la collecte à la qualification",
        "Le pipeline combine Google Places, OpenStreetMap et des sources web publiques. La déduplication rapproche les résultats, un score de confiance aide à les qualifier et une classification locale avec Ollama filtre les installations pertinentes.",
      ],
      [
        "Un résultat exploitable",
        "Une interface React permet de valider les résultats, de les exporter en CSV et de générer des courriels personnalisés. Node.js et Express composent la stack backend. Le projet relie collecte de données, automatisation et contrôle humain dans un même outil.",
      ],
    ],
  },
];
