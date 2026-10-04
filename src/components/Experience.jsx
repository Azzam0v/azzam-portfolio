import { ArrowUpRight, Plus } from "lucide-react";
import { useLanguage } from "../i18n";

// Dates and contributions come from Azzam's CV and his detailed internship notes
// (October 2026): Aspen / StaffAllocator sources, Spark SQL transformations,
// Delta tables, Fabric User Data Functions and the Optania cache.
const contributions = [
  [
    "Pipelines Spark",
    "Pipelines Spark SQL et PySpark dans Microsoft Fabric qui croisent les dossiers élèves d’Aspen et les prévisions de StaffAllocator, puis matérialisent les résultats en tables Delta.",
  ],
  [
    "Règles métier et effectifs",
    "Calcul des effectifs par école, année et niveau (initial, préinscrits, arrivés) : dernière inscription avec ROW_NUMBER, bornes d’année avec LEAD, unpivot et comptages sans doublons.",
  ],
  [
    "Exposition en API",
    "Fonctions Microsoft Fabric User Data Functions en Python qui exposent les tables de l’entrepôt en JSON, avec requêtes paramétrées, sérialisation des types et identifiants MD5 stables.",
  ],
  [
    "Performance applicative",
    "Cache Java et optimisation SQL dans Optania : des recalculs de 10 à 15 minutes deviennent une consultation quasi instantanée, et l’outil remplace les rapports d’état envoyés à la main par courriel.",
  ],
];

const pipelineSteps = [
  [
    "Partir du contrat d’API",
    "Identifier les champs attendus par l’application consommatrice, comme InfoDot, et les règles métier à respecter.",
  ],
  [
    "Explorer les sources",
    "Analyser les tables d’Aspen (élèves, inscriptions, écoles, horaires) et les prévisions de StaffAllocator dans leurs Lakehouses.",
  ],
  [
    "Transformer en Spark SQL",
    "Nettoyer, normaliser, joindre et agréger avec des CTE, des fonctions analytiques et des unpivot.",
  ],
  [
    "Matérialiser en tables Delta",
    "Persister le résultat dans l’entrepôt pour le rendre accessible depuis le SQL Endpoint.",
  ],
  [
    "Exposer par une fonction",
    "Développer la Fabric User Data Function en Python qui interroge la table et renvoie une réponse JSON paramétrée.",
  ],
  [
    "Valider et documenter",
    "Vérifier les résultats et le contrat, faire réviser dans Azure DevOps et documenter l’endpoint dans Confluence.",
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
            {t("Ingénierie des données, API")}
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
            {t("STAGE / INGÉNIERIE DES DONNÉES & BACKEND")}
          </p>
          <h3 id="cecce-role">{t("Stagiaire en développement logiciel")}</h3>
          <p className="experience-intro">
            {t(
              "Transformer les données scolaires de plusieurs systèmes en tables fiables et en API utilisées par les applications du conseil scolaire.",
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
            {[
              "Spark SQL",
              "PySpark",
              "Python",
              "Microsoft Fabric",
              "Delta Lake",
              "SQL",
              "Java",
              "Azure DevOps",
              "Confluence",
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </article>
      <div className="experience-highlight">
        <p className="eyebrow">{t("CONTRIBUTION CONCRÈTE / OPTANIA")}</p>
        <h3>{t("Consulter les résultats, sans tout recalculer.")}</h3>
        <p>
          {t(
            "Optania est l’outil de contrôle des données de l’équipe. J’ai développé un cache Java et optimisé des traitements SQL : les derniers résultats se consultent sans relancer des calculs de 10 à 15 minutes, avec la date de dernière actualisation et un recalcul à la demande. L’outil a remplacé les rapports d’état des bases de données rédigés et envoyés à la main par courriel.",
          )}
        </p>
      </div>
      <details className="engineering experience-details">
        <summary>
          <span>
            {t("Approfondir mon stage au CECCE")}
            <small>
              {t("Pipelines, API, optimisation & résolution de problèmes")}
            </small>
          </span>
          <Plus size={22} />
        </summary>
        <div className="engineering-content">
          <section aria-labelledby="pipeline-title">
            <p className="eyebrow">{t("01 / DES SOURCES À L’API")}</p>
            <h3 id="pipeline-title">
              {t("Une chaîne complète, d’Aspen jusqu’à l’application.")}
            </h3>
            <p className="experience-detail-intro">
              {t(
                "Les données d’Aspen et de StaffAllocator arrivaient dans plusieurs Lakehouses Microsoft Fabric. Mon travail couvrait la transformation en Spark SQL, la matérialisation en tables Delta et l’exposition par des fonctions consommées par des applications comme InfoDot.",
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
          <section className="internship-case" aria-labelledby="counts-title">
            <p className="eyebrow">{t("02 / COMPTER CHAQUE ÉLÈVE UNE FOIS")}</p>
            <h3 id="counts-title">
              {t("Des effectifs fiables malgré des données qui se recoupent.")}
            </h3>
            <div className="internship-case-grid">
              <div>
                <h4>{t("Le problème observé")}</h4>
                <p>
                  {t(
                    "Un même élève pouvait avoir plusieurs inscriptions dans Aspen, et les jointures entre élèves, écoles et horaires risquaient de le compter plusieurs fois. Les prévisions de StaffAllocator arrivaient en colonnes, une par niveau.",
                  )}
                </p>
              </div>
              <div>
                <h4>{t("Mon intervention")}</h4>
                <p>
                  {t(
                    "Garder la dernière inscription de chaque élève avec ROW_NUMBER, rattacher les inscriptions à la bonne année scolaire avec LEAD, passer les prévisions en lignes par unpivot et compter avec COUNT DISTINCT, y compris pour les classes distinctes.",
                  )}
                </p>
              </div>
              <div>
                <h4>{t("Le résultat")}</h4>
                <p>
                  {t(
                    "Des indicateurs initial, préinscrits et arrivés par école, année et niveau, alignés sur le contrat de l’API et identifiés par des clés MD5 stables.",
                  )}
                </p>
              </div>
            </div>
          </section>
          <section className="internship-case" aria-labelledby="optania-title">
            <p className="eyebrow">{t("03 / OPTIMISATION D’OPTANIA")}</p>
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
                    "Certains contrôles relançaient de nombreux traitements SQL, qui pouvaient prendre environ 10 à 15 minutes, même lorsque des résultats récents avaient déjà été calculés. L’état des bases de données était donc encore rédigé et envoyé à la main par courriel.",
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
                    "Une consultation quasi instantanée des résultats disponibles, et un outil assez utile pour remplacer les rapports envoyés à la main. L’utilisateur peut toujours demander des données actualisées.",
                  )}
                </p>
              </div>
            </div>
          </section>
          <section
            className="internship-case"
            aria-labelledby="investigation-title"
          >
            <p className="eyebrow">{t("04 / INVESTIGUER AVANT DE CONCLURE")}</p>
            <h3 id="investigation-title">
              {t("Comprendre où se trouve vraiment le problème.")}
            </h3>
            <div className="investigation-story">
              <p>
                {t(
                  "Face à des résultats inattendus, j’ai reproduit l’anomalie, revérifié la logique Python, examiné la requête SQL et comparé les résultats intermédiaires. En présentant mes recherches à un ingénieur, nous avons identifié un écart provenant des données sources.",
                )}
              </p>
              <p>
                {t(
                  "J’ai aussi diagnostiqué des échecs de matérialisation Spark, une vue temporaire utilisée comme objet persistant, des noms de tables mal qualifiés et une fonction qui exigeait un paramètre absent du contrat de l’API. Chaque cas m’a appris à isoler une étape à la fois.",
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
