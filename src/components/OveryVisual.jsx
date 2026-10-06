import { useLanguage } from "../i18n";

// The Overy network as it actually worked: one entry point, specialized game
// servers, shared state in MySQL behind a cache and async writes, and services
// around the game. Steps 1–6 follow a player's connection through it.
export default function OveryVisual() {
  const { t } = useLanguage();

  const servers = [
    ["Lobby", t("accueil et navigation")],
    ["Skyblock", t("mode de jeu persistant")],
    [t("Mini-jeux"), t("instances de partie")],
  ];
  const journey = [
    t("Le joueur se connecte au proxy, point d’entrée unique."),
    t("Le matchmaking forme une partie et réserve une instance libre."),
    t("Le proxy l’y transfère, sans reconnexion."),
    t("Le serveur charge son état partagé : compte, monnaie, grades."),
    t("Ses changements passent par le cache, puis sont écrits en arrière-plan."),
    t("La messagerie prévient les autres serveurs d’actualiser leurs données."),
  ];

  return (
    <figure className="overy-visual">
      <div className="overy-visual-heading">
        <span>OVERY NETWORK</span>
        <span>{t("ARCHITECTURE · MINECRAFT BEDROCK · 2019–2023")}</span>
      </div>
      <div
        className="overy-arch"
        role="img"
        aria-label={t(
          "Architecture Overy : les joueurs passent par un proxy vers le lobby, Skyblock ou les mini-jeux. Ces serveurs partagent leur état dans MySQL via un cache et des écritures asynchrones, et sont reliés par une messagerie. Des services gèrent achats, sanctions, matchmaking et statistiques, avec la boutique Tebex, le panel du staff et le bot Discord.",
        )}
      >
        <div className="overy-main">
          <span className="overy-layer">{t("ENTRÉE")}</span>
          <div className="overy-row">
            <div className="overy-node overy-node-ghost">
              <strong>{t("Joueurs")}</strong>
              <small>{t("jusqu’à 200 en même temps")}</small>
            </div>
            <span className="overy-arrow" aria-hidden="true">
              <i>1</i>
            </span>
            <div className="overy-node overy-node-key">
              <strong>Proxy</strong>
              <small>{t("transfère d’un serveur à l’autre")}</small>
            </div>
          </div>
          <span className="overy-down" aria-hidden="true">
            <i>3</i>
          </span>

          <span className="overy-layer">{t("SERVEURS DE JEU")}</span>
          <div className="overy-servers">
            {servers.map(([name, role]) => (
              <div className="overy-node" key={name}>
                <strong>{name}</strong>
                <small>{role}</small>
              </div>
            ))}
          </div>
          <div className="overy-bus">
            <i>6</i>
            {t("Messagerie entre serveurs : événements, grades, commandes, cache à actualiser")}
          </div>
          <span className="overy-down" aria-hidden="true">
            <i>4</i>
            <i>5</i>
          </span>

          <span className="overy-layer">{t("PERSISTANCE")}</span>
          <div className="overy-row">
            <div className="overy-node">
              <strong>{t("Cache + écritures asynchrones")}</strong>
              <small>{t("regroupées, une à la fois par joueur")}</small>
            </div>
            <span className="overy-arrow" aria-hidden="true" />
            <div className="overy-node overy-node-key">
              <strong>MySQL</strong>
              <small>{t("état partagé, source de vérité")}</small>
            </div>
          </div>
        </div>

        <div className="overy-side">
          <span className="overy-layer">{t("SERVICES")}</span>
          <div className="overy-node overy-node-key">
            <strong>{t("Services Overy")}</strong>
            <small>{t("achats, sanctions, matchmaking, statistiques")}</small>
            <i className="overy-tag">2</i>
          </div>
          <span className="overy-side-link" aria-hidden="true">
            {t("reliés au proxy et aux serveurs")}
          </span>
          {[
            ["Tebex", t("achats livrés en jeu")],
            [t("Panel staff"), t("joueurs et sanctions")],
            [t("Bot Discord"), t("communauté et commandes")],
          ].map(([name, role]) => (
            <div className="overy-node overy-node-ghost" key={name}>
              <strong>{name}</strong>
              <small>{role}</small>
            </div>
          ))}
        </div>
      </div>
      <figcaption>
        <span className="overy-journey-title">
          {t("Le parcours d’une connexion")}
        </span>
        <ol className="overy-journey">
          {journey.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
