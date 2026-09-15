// Descriptions verified against the local repositories; evidence: docs/PROJECTS.md.
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
    number: "02",
    name: "Tacozzo",
    location: "Restaurant · Ottawa",
    headline: "Une identité qui ouvre l’appétit.",
    description:
      "Un site vitrine expressif qui fait découvrir le menu, donne envie de passer au restaurant et guide vers la commande en ligne.",
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
    ],
  },
  {
    id: "lyz",
    number: "03",
    name: "Lyz Barbier",
    location: "Salon & barbier · Gatineau",
    headline: "Le sens du détail, à l’écran aussi.",
    description:
      "Une expérience éditoriale pour découvrir le salon, ses réalisations et son équipe, puis réserver auprès du bon barbier.",
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
    ],
  },
];
