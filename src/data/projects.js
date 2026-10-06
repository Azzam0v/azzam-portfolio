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
    headline:
      "D’un serveur Minecraft à un réseau multijoueur classé 7e mondial.",
    description:
      "Un réseau Minecraft Bedrock composé de plusieurs serveurs reliés par un proxy, avec données partagées, matchmaking, boutique automatisée et outils d’administration.",
    technologies: ["Java", "PHP", "MySQL", "Node.js", "Linux"],
    results: [
      ["10 000+", "joueurs accueillis"],
      ["200", "joueurs simultanés au pic"],
      ["10 000 €+", "de chiffre d’affaires"],
      ["50+", "personnes dans l’équipe"],
    ],
    challenges: [
      [
        "Cohérence",
        "Cohérence des données",
        "Sérialisation des écritures d’un même joueur et fusion des modifications concurrentes, avec MySQL comme source de vérité.",
      ],
      [
        "Performance",
        "Performance temps réel",
        "Requêtes asynchrones, cache write-behind et regroupement des mises à jour pour ne pas bloquer la boucle de jeu.",
      ],
      [
        "Fiabilité",
        "Exploitation en production",
        "Livraison automatisée des achats, anti-cheat, gestion des erreurs et protection face à de véritables attaques DDoS.",
      ],
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
    leadership:
      "J’ai piloté la roadmap, les mises en production et une équipe de plus de 50 développeurs, modélisateurs 3D et artistes. Le panel du staff, le bot Discord et les statistiques d’activité permettaient d’exploiter et de faire évoluer le réseau.",
    details: [
      [
        "Les débuts",
        "Overy a commencé comme un serveur Minecraft quand j’avais 12 ou 13 ans. Avec la croissance de la communauté, il est devenu un produit dont j’assurais la direction et le développement.",
      ],
    ],
  },
  {
    id: "capstone",
    number: "03",
    name: "Drone autonome — Capstone",
    category: "ROBOTIQUE / COMMANDES DE VOL / SYSTÈMES EMBARQUÉS",
    role: "Commandes de vol & intégration · depuis septembre 2026",
    headline: "De la simulation au contrôle d’un drone autonome.",
    description:
      "Un projet de fin d’études mené à cinq : un drone autonome combinant vision accélérée sur FPGA et imagerie thermique. Je suis responsable des commandes de vol, de la simulation et de leur intégration avec le Raspberry Pi 5.",
    technologies: [
      "PX4",
      "Gazebo",
      "MAVLink",
      "ROS 2",
      "Raspberry Pi 5",
      "FPGA",
    ],
    results: [
      ["5", "membres dans l’équipe"],
      ["PX4 / Gazebo", "simulation de vol SITL"],
      ["En cours", "projet de fin d’études · 2026"],
    ],
    contributions: [
      "Responsabilité des commandes de vol et de la simulation PX4 en mode SITL dans Gazebo.",
      "Intégration MAVLink / ROS 2 avec le Raspberry Pi 5 embarqué.",
      "Travail au sein d’une équipe de cinq sur un drone intégrant vision accélérée sur FPGA et imagerie thermique.",
    ],
    details: [
      [
        "Le projet",
        "Depuis septembre 2026, notre équipe de cinq travaille sur un drone autonome dans le cadre du capstone en génie informatique. Le projet associe commandes de vol, vision accélérée sur FPGA et imagerie thermique.",
      ],
      [
        "Mon rôle : commandes et simulation",
        "Je suis responsable des commandes de vol et de la simulation avec PX4 SITL dans Gazebo. Cet environnement permet de travailler sur le comportement du drone en simulation avant les essais physiques.",
      ],
      [
        "L’intégration embarquée",
        "Mon périmètre comprend les échanges MAVLink / ROS 2 avec le Raspberry Pi 5. Le travail d’intégration relie la partie vol aux autres sous-systèmes développés par l’équipe. Le projet est en cours de développement.",
      ],
    ],
  },
];
