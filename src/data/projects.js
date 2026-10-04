// Sources: local repositories and the supplied CV; see docs/PROJECTS.md.
export const profile = {
  name: "Azzam El Kettani",
  github: "https://github.com/Azzam0v",
  linkedin: "https://www.linkedin.com/in/azzam-el-kettani-656b3b301/",
};
export const rzo = {
  live: "https://rzosports.com/",
  github: "https://github.com/RZO-SPORTS/RZO-SPORTS-CLIENT",
  technologies: [
    "React",
    "Java 21",
    "Spring Boot",
    "MySQL",
    "Stripe",
    "Docker",
  ],
  features: [
    [
      "01",
      "Trouver son terrain",
      "Découvrir les installations, réserver des créneaux récurrents et laisser un avis après son expérience.",
    ],
    [
      "02",
      "Se retrouver pour jouer",
      "Organiser des parties publiques ou privées, gérer les participants et partager les frais entre joueurs.",
    ],
    [
      "03",
      "Faire vivre son centre",
      "Gérer les paiements, les statistiques, les horaires, les plages bloquées et les permissions des employés.",
    ],
  ],
  engineering: [
    {
      title: "Une interface pour chaque parcours",
      text: "React et React Router structurent les espaces joueur et gestionnaire. Les appels réseau sont isolés dans des modules API. L’interface est disponible en français et en anglais avec i18next.",
      tags: ["React Router", "Tailwind CSS", "i18next"],
    },
    {
      title: "Une logique métier structurée",
      text: "Le serveur Spring Boot sépare contrôleurs REST, services métier et accès aux données. Les réservations prennent en compte les horaires récurrents, les fermetures exceptionnelles et les conflits de créneaux.",
      tags: ["API REST", "Spring Data JPA", "MySQL"],
    },
    {
      title: "Des accès et des paiements encadrés",
      text: "L’authentification utilise des JWT en cookies HttpOnly. Les contrôles de propriété et de permissions protègent les ressources. Stripe et ses webhooks participent au suivi des paiements.",
      tags: ["Spring Security", "JWT", "Stripe"],
    },
    {
      title: "Un projet pensé pour évoluer",
      text: "Docker Compose et Nginx structurent l’environnement. Le dépôt contient des tests sur les réservations, les disponibilités, les demandes de participation et les suppressions de ressources.",
      tags: ["Docker", "Nginx", "JUnit"],
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
    live: "https://azzam0v.github.io/tacozzo-landing/",
    github: "https://github.com/Azzam0v/tacozzo-landing",
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
    live: "https://azzam0v.github.io/lyz-barbier/",
    github: "https://github.com/Azzam0v/lyz-barbier",
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
];

export const softwareProjects = [
  {
    id: "overy",
    number: "02",
    name: "Overy",
    category: "BACKEND / PRODUIT EN PRODUCTION",
    role: "Fondateur & développeur principal",
    headline: "D’un serveur Minecraft à une plateforme multijoueur monétisée.",
    description:
      "J’ai fondé, développé et exploité Overy : un serveur Minecraft avec ses plugins, ses services backend, sa base de données et sa boutique. Je coordonnais l’équipe et utilisais les données d’activité pour faire évoluer le produit et ses offres.",
    technologies: ["Java", "PHP", "MySQL", "Node.js"],
    results: [
      ["Des milliers", "d’utilisateurs accueillis"],
      ["5 chiffres", "de chiffre d’affaires cumulé"],
      ["Top 7 mondial", "atteint dans son segment"],
    ],
    contributions: [
      "Plugins Java, services backend PHP et Node.js, conception et maintenance de la base MySQL.",
      "Boutique Tebex et outils statistiques pour analyser les achats et orienter les offres.",
      "Pilotage de la roadmap, revues de code et déploiements avec les développeurs et designers.",
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
        "Overy a commencé comme un projet de serveur Minecraft. Avec la croissance de la communauté, il fallait attirer et fidéliser les joueurs, développer des fonctionnalités, gérer les achats et corriger les problèmes techniques. J’assurais la direction du produit autant que son développement, dans un environnement utilisé au quotidien.",
      ],
      [
        "Relier les composants techniques",
        "J’ai développé des plugins Java et des services backend en PHP et Node.js. Je concevais et maintenais la base MySQL pour organiser les données des utilisateurs, des fonctionnalités et des achats. Chaque évolution demandait de préserver la cohérence de ces composants et de l’expérience de jeu.",
      ],
      [
        "Utiliser les données pour décider",
        "J’ai créé et utilisé des outils statistiques pour analyser les achats et l’activité des utilisateurs. Ces observations m’aidaient à repérer les produits et fonctionnalités qui suscitaient de l’intérêt, à adapter les offres de la boutique et à prioriser le développement. C’était ma première utilisation concrète de l’analyse de données dans un projet entrepreneurial.",
      ],
      [
        "Organiser la boutique et les offres",
        "J’ai mis en place et administré la boutique sur Tebex : organisation des produits, suivi des achats et évolution des offres à partir des résultats observés. Le chiffre d’affaires cumulé à cinq chiffres reliait directement mes décisions techniques et produit à une activité commerciale.",
      ],
      [
        "Faire évoluer un service en production",
        "Je définissais les priorités, répartissais les tâches entre développeurs et designers et révisais le code avant les mises à jour. En production, je surveillais le fonctionnement du service et traitais les problèmes après déploiement, en tenant compte de la stabilité, des erreurs et de la cohérence des données.",
      ],
      [
        "Des résultats et une responsabilité concrète",
        "Overy a accueilli des milliers d’utilisateurs et atteint le top 7 mondial dans son segment. J’y ai appris à suivre tout le cycle de vie d’un produit : développer, tester, déployer, maintenir et décider à partir des données. Cette expérience a renforcé mon intérêt pour le backend, l’ingénierie des données et le travail d’équipe.",
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
