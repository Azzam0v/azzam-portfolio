import { useLanguage } from "../i18n";

// How a request travels through RZO, and the three technical decisions a
// recruiter is most likely to ask about. Sourced from the private server repo
// (BookingService, FieldRepository, BookingHoldService, Dockerfile, Compose).
export default function RzoArchitecture() {
  const { t } = useLanguage();

  return (
    <section className="rzo-tech" aria-labelledby="rzo-tech-title">
      <p className="eyebrow">{t("SOUS LE CAPOT / ARCHITECTURE")}</p>
      <h3 id="rzo-tech-title">
        {t("Deux applications, une API qui décide.")}
      </h3>

      <figure className="rzo-arch">
        <div
          className="rzo-arch-flow"
          role="img"
          aria-label={t(
            "Architecture RZO : le site React et l’app mobile appellent l’API Spring Boot, hébergée sur AWS EC2 derrière Nginx. L’API lit et écrit dans MySQL et échange avec Stripe, qui lui renvoie des webhooks.",
          )}
        >
          <div className="rzo-arch-col">
            <span className="rzo-arch-label">{t("CLIENTS")}</span>
            <div className="rzo-node">
              <strong>{t("Site web")}</strong>
              <small>React</small>
            </div>
            <div className="rzo-node">
              <strong>{t("App mobile")}</strong>
              <small>React Native · Expo</small>
            </div>
          </div>
          <div className="rzo-arch-link" aria-hidden="true">
            <span>{t("HTTPS")}</span>
          </div>
          <div className="rzo-arch-col">
            <span className="rzo-arch-label">AWS EC2 · DOCKER COMPOSE</span>
            <div className="rzo-server">
              <div className="rzo-node rzo-node-quiet">
                <strong>Nginx</strong>
                <small>{t("point d’entrée, reverse proxy")}</small>
              </div>
              <div className="rzo-node rzo-node-main">
                <strong>{t("API Spring Boot")}</strong>
                <small>
                  {t("droits, disponibilités, prix, confirmation, paiements")}
                </small>
              </div>
            </div>
          </div>
          <div className="rzo-arch-link rzo-arch-link-split" aria-hidden="true">
            <span>{t("SQL")}</span>
            <span>{t("appels · webhooks")}</span>
          </div>
          <div className="rzo-arch-col">
            <span className="rzo-arch-label">{t("DONNÉES & PAIEMENTS")}</span>
            <div className="rzo-node">
              <strong>MySQL</strong>
              <small>{t("utilisateurs, terrains, réservations")}</small>
            </div>
            <div className="rzo-node">
              <strong>Stripe Connect</strong>
              <small>{t("préautorisations, versements aux complexes")}</small>
            </div>
          </div>
        </div>
        <figcaption>
          {t(
            "Seule l’API parle à MySQL et à Stripe. Stripe la prévient de l’issue d’un paiement par webhook, dont la signature est vérifiée.",
          )}
        </figcaption>
      </figure>

      <p className="eyebrow rzo-tech-sub">{t("TROIS DÉCISIONS TECHNIQUES")}</p>
      <div className="rzo-decisions">
        <article className="rzo-decision">
          <span className="rzo-decision-n">01</span>
          <h4>{t("Deux joueurs, un même créneau")}</h4>
          <p>
            {t(
              "Alice et Karim veulent le même terrain de 18 h à 19 h. Sans protection, les deux vérifient « libre » avant que l’autre n’enregistre : deux réservations confirmées.",
            )}
          </p>
          <ol className="race">
            <li>
              <span>Alice</span> {t("prend le verrou du terrain")}
            </li>
            <li>
              <span>Karim</span> {t("attend son tour")}
            </li>
            <li>
              <span>Alice</span> {t("vérifie, confirme, libère")}
            </li>
            <li className="race-end">
              <span>Karim</span> {t("voit le conflit : refusé")}
            </li>
          </ol>
          <p>
            {t(
              "Vérification et confirmation se font dans une même transaction, avec un verrou pessimiste sur la ligne du terrain : elle existe même quand aucune réservation n’existe encore. Des tests lancent des demandes simultanées et vérifient qu’une seule est confirmée.",
            )}
          </p>
          <p className="rzo-tradeoff">
            {t(
              "Compromis : deux confirmations sur un même terrain passent l’une après l’autre, même pour des créneaux différents.",
            )}
          </p>
          <div className="tags">
            {["@Transactional", "PESSIMISTIC_WRITE", t("Tests de concurrence")].map(
              (tag) => (
                <span key={tag}>{tag}</span>
              ),
            )}
          </div>
        </article>

        <article className="rzo-decision">
          <span className="rzo-decision-n">02</span>
          <h4>{t("Réessayer sans débiter deux fois")}</h4>
          <p>
            {t(
              "Le serveur demande une opération à Stripe, la connexion coupe avant la réponse. A-t-elle réussi ? Pour pouvoir réessayer sans risque, chaque opération porte une clé stable, déduite de la réservation.",
            )}
          </p>
          <ul className="rzo-keys">
            <li>
              <code>booking-hold-42</code>
              <span>{t("préautoriser la carte")}</span>
            </li>
            <li>
              <code>booking-hold-capture-42</code>
              <span>{t("débiter après la partie")}</span>
            </li>
            <li>
              <code>booking-hold-release-42</code>
              <span>{t("libérer l’empreinte")}</span>
            </li>
          </ul>
          <p>
            {t(
              "Une même clé renvoyée, et Stripe restitue le résultat déjà enregistré au lieu de recommencer. Une clé aléatoire à chaque tentative supprimerait cette protection.",
            )}
          </p>
          <div className="tags">
            {[t("Clés d’idempotence"), "Stripe Connect"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <article className="rzo-decision">
          <span className="rzo-decision-n">03</span>
          <h4>{t("Mettre l’API en ligne")}</h4>
          <p>
            {t(
              "L’image Docker est construite en deux étapes : Java 21 et Gradle compilent, puis seul le JRE et l’application partent en production. Le conteneur tourne avec un utilisateur non-root.",
            )}
          </p>
          <p>
            {t(
              "Docker Compose décrit les services, le réseau et les redémarrages sur une instance AWS EC2. Nginx reçoit les requêtes publiques et les transmet à Spring Boot.",
            )}
          </p>
          <div className="tags">
            {["Docker", "AWS EC2", "Nginx", "Let’s Encrypt"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
