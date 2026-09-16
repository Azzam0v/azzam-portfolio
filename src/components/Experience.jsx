import { ArrowUpRight, Plus } from "lucide-react";
import { useLanguage } from "../i18n";

// Dates and contributions come from Azzam's CV and detailed internship account.
// The original internship posting could not be identified online.
const contributions = [
  [
    "Pipelines de données",
    "Contribution à des pipelines Python et SQL dans Microsoft Fabric pour extraire, préparer et centraliser les données de systèmes internes.",
  ],
  [
    "Qualité et validation",
    "Contrôle des données, comparaison aux résultats attendus et investigation des anomalies avant leur chargement dans un Lakehouse ou un entrepôt de données.",
  ],
  [
    "Développement en équipe",
    "Développement de fonctions Python et adaptation de requêtes SQL selon les pratiques de l’équipe, avec gestion des versions, revue et validation dans Azure DevOps.",
  ],
  [
    "Performance applicative",
    "Optimisation de traitements SQL et développement d’un mécanisme de cache Java avec actualisation des résultats pour améliorer la réactivité d’une application interne.",
  ],
];

const pipelineSteps = [
  [
    "Comprendre le besoin",
    "Identifier les données nécessaires, leur structure et le résultat attendu avec l’équipe.",
  ],
  [
    "Préparer la requête SQL",
    "Développer ou adapter la requête qui extrait les données pertinentes des systèmes internes.",
  ],
  [
    "Intégrer la fonction Python",
    "Suivre le modèle commun de l’équipe pour faciliter la maintenance et la révision du composant.",
  ],
  [
    "Exécuter dans Microsoft Fabric",
    "Récupérer et préparer les données avant leur chargement dans l’environnement analytique.",
  ],
  [
    "Valider et investiguer",
    "Comparer les résultats aux attentes et rechercher les écarts dans le Python, le SQL ou les données sources.",
  ],
  [
    "Faire réviser et intégrer",
    "Versionner dans Azure DevOps, intégrer les commentaires et participer au chargement dans un Lakehouse ou un entrepôt de données.",
  ],
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      className="experience-section wrap"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="eyebrow">{t("02 / EXPÉRIENCE PROFESSIONNELLE")}</p>
        <div className="heading-row">
          <h2 id="experience-title">
            {t("Au sein d’une équipe.")}
            <br />
            <span className="muted-heading">{t("Sur des besoins réels.")}</span>
          </h2>
          <p>
            {t("Développement logiciel, données")}
            <br />
            {t("et amélioration d’outils internes.")}
          </p>
        </div>
      </div>
      <article className="experience-card" aria-labelledby="cecce-role">
        <div className="experience-employer">
          <div className="experience-monogram" aria-hidden="true">
            CECCE
            <ArrowUpRight size={19} aria-hidden="true" />
          </div>
          <p className="experience-organization">
            Conseil des écoles catholiques du Centre-Est
          </p>
          <p className="experience-location">Ottawa, Ontario</p>
          <p className="experience-period">
            <time dateTime="2025-05">{t("Mai 2025")}</time>
            <span aria-hidden="true"> — </span>
            <time dateTime="2026-01">{t("Janvier 2026")}</time>
          </p>
          <p className="experience-location">
            {t("9 mois au sein d’une équipe technique")}
          </p>
          <a
            className="experience-employer-link"
            href="https://www.ecolecatholique.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Le CECCE")}
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="experience-work">
          <p className="eyebrow">
            {t("STAGE / DÉVELOPPEMENT LOGICIEL & DONNÉES")}
          </p>
          <h3 id="cecce-role">{t("Stagiaire en développement logiciel")}</h3>
          <p className="experience-intro">
            {t(
              "Contribuer à des données fiables et à des applications internes plus réactives, dans un environnement de développement collaboratif.",
            )}
          </p>
          <ul className="experience-contributions">
            {contributions.map(([title, description]) => (
              <li key={title}>
                <h4>{t(title)}</h4>
                <p>{t(description)}</p>
              </li>
            ))}
          </ul>
          <div
            className="tags"
            aria-label={t("Technologies utilisées pendant le stage")}
          >
            {["Python", "SQL", "Microsoft Fabric", "Azure DevOps", "Java"].map(
              (tech) => (
                <span key={tech}>{tech}</span>
              ),
            )}
          </div>
        </div>
      </article>
      <div className="experience-highlight">
        <p className="eyebrow">{t("CONTRIBUTION CONCRÈTE / OPTANIA")}</p>
        <h3>{t("Consulter les résultats, sans tout recalculer.")}</h3>
        <p>
          {t(
            "Pour Optania, une application interne de contrôle des données, j’ai développé un cache Java et optimisé des traitements SQL. Les derniers résultats pouvaient être consultés sans relancer systématiquement les calculs, avec la date de dernière actualisation et une option de recalcul à la demande.",
          )}
        </p>
      </div>
      <details className="engineering experience-details">
        <summary>
          <span>
            {t("Approfondir mon stage au CECCE")}
            <small>
              {t("Pipelines, optimisation & résolution de problèmes")}
            </small>
          </span>
          <Plus size={22} />
        </summary>
        <div className="engineering-content">
          <section aria-labelledby="pipeline-title">
            <p className="eyebrow">{t("01 / DU BESOIN À LA DONNÉE VALIDÉE")}</p>
            <h3 id="pipeline-title">
              {t("Des composants intégrés à un pipeline d’équipe.")}
            </h3>
            <p className="experience-detail-intro">
              {t(
                "Ma contribution portait sur l’extraction, la préparation, la validation et le dépannage des données. Mes fonctions s’intégraient à l’architecture globale réalisée par l’équipe.",
              )}
            </p>
            <ol className="pipeline-steps">
              {pipelineSteps.map(([title, text], index) => (
                <li key={title}>
                  <span className="pipeline-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h4>{t(title)}</h4>
                    <p>{t(text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className="internship-case" aria-labelledby="optania-title">
            <p className="eyebrow">{t("02 / OPTIMISATION D’OPTANIA")}</p>
            <h3 id="optania-title">
              {t(
                "Réutiliser les résultats. Garder le contrôle sur leur fraîcheur.",
              )}
            </h3>
            <div className="internship-case-grid">
              <div>
                <h4>{t("Le problème observé")}</h4>
                <p>
                  {t(
                    "Certains contrôles relançaient de nombreux traitements SQL, qui pouvaient prendre environ 10 à 15 minutes, même lorsque des résultats récents avaient déjà été calculés.",
                  )}
                </p>
              </div>
              <div>
                <h4>{t("Mon intervention")}</h4>
                <p>
                  {t(
                    "Optimiser une partie de la logique SQL et développer un cache Java des derniers résultats, avec une indication de la dernière actualisation et un recalcul déclenché volontairement par l’utilisateur.",
                  )}
                </p>
              </div>
              <div>
                <h4>{t("Le résultat")}</h4>
                <p>
                  {t(
                    "Une consultation plus réactive des résultats disponibles et moins de traitements redondants. L’utilisateur conservait la possibilité de demander des données actualisées lorsque nécessaire.",
                  )}
                </p>
              </div>
            </div>
          </section>
          <section
            className="internship-case"
            aria-labelledby="investigation-title"
          >
            <p className="eyebrow">{t("03 / INVESTIGUER AVANT DE CONCLURE")}</p>
            <h3 id="investigation-title">
              {t("Quand l’anomalie vient des données sources.")}
            </h3>
            <div className="investigation-story">
              <p>
                {t(
                  "Face à des résultats inattendus, j’ai reproduit l’anomalie, revérifié la logique Python, examiné la requête SQL et comparé les résultats intermédiaires. En présentant mes recherches à un ingénieur, nous avons identifié un écart provenant des données sources.",
                )}
              </p>
              <p>
                {t(
                  "J’en ai retenu l’importance de documenter mes essais, de distinguer un défaut de code d’un problème de qualité des données et de solliciter un collègue quand le problème dépasse mon composant.",
                )}
              </p>
            </div>
          </section>
          <div className="experience-takeaway">
            <h4>{t("Une méthode de travail que je garde aujourd’hui")}</h4>
            <p>
              {t(
                "Comprendre le besoin, respecter les conventions d’une base de code existante, expliquer mes choix, intégrer les retours de revue et refaire les validations avant l’intégration. Ce stage m’a appris à conjuguer autonomie et collaboration avec des développeurs et des ingénieurs.",
              )}
            </p>
          </div>
        </div>
      </details>
    </section>
  );
}
