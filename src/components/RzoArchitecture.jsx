import { useLanguage } from "../i18n";

// How a request travels through RZO, and the three technical decisions a
// recruiter is most likely to ask about. Sourced from the private server repo
// (BookingService, FieldRepository, BookingHoldService, Dockerfile, Compose).
export default function RzoArchitecture() {
  const { t } = useLanguage();

  return (
    <section className="rzo-tech" aria-labelledby="rzo-tech-title">
      <p className="eyebrow">{t("SOUS LE CAPOT / ARCHITECTURE")}</p>
      <h3 id="rzo-tech-title">{t("Deux applications, une API qui décide.")}</h3>

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
          <h4>{t("Réservation et concurrence")}</h4>
          <p>
            {t(
              "Calcul des disponibilités et gestion des fuseaux horaires. La vérification et la confirmation partagent une transaction avec verrou sur le terrain pour empêcher les doubles réservations.",
            )}
          </p>
          <div className="tags">
            <span>{t("Spring Boot")}</span>
            <span>{t("MySQL")}</span>
            <span>{t("Tests de concurrence")}</span>
          </div>
        </article>
        <article className="rzo-decision">
          <span className="rzo-decision-n">02</span>
          <h4>{t("Paiements distribués")}</h4>
          <p>
            {t(
              "Préautorisations, partage des frais et webhooks Stripe vérifiés. Des clés d’idempotence permettent de réessayer une opération sans débiter deux fois.",
            )}
          </p>
          <div className="tags">
            <span>{t("Stripe Connect")}</span>
            <span>{t("Idempotence")}</span>
          </div>
        </article>
        <article className="rzo-decision">
          <span className="rzo-decision-n">03</span>
          <h4>{t("Sécurité et qualité")}</h4>
          <p>
            {t(
              "Permissions, JWT et OAuth2 encadrent les accès. Environ 300 tests JUnit et des tests de mutation vérifient les règles métier ; Docker et Nginx assurent le déploiement sur AWS EC2.",
            )}
          </p>
          <div className="tags">
            <span>{t("JUnit")}</span>
            <span>{t("PIT")}</span>
            <span>{t("Docker")}</span>
            <span>{t("AWS EC2")}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
