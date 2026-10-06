import { useLanguage } from "../i18n";

export default function OveryVisual() {
  const { t } = useLanguage();
  return (
    <figure className="overy-visual">
      <div className="overy-visual-heading">
        <span>OVERY NETWORK</span>
        <span>{t("ARCHITECTURE · MINECRAFT BEDROCK · 2019–2023")}</span>
      </div>
      <div className="overy-flow">
        <div className="overy-node overy-node-ghost">
          <strong>{t("Joueurs")}</strong>
        </div>
        <span className="overy-connector" aria-hidden="true">
          ↓
        </span>
        <div className="overy-node overy-node-key">
          <strong>Proxy / Gateway</strong>
          <small>{t("connexion unique et transfert")}</small>
        </div>
        <span className="overy-connector" aria-hidden="true">
          ↓
        </span>
        <div className="overy-game-servers">
          {["Lobby", "Skyblock", t("Mini-jeux")].map((name) => (
            <div className="overy-node" key={name}>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
        <span className="overy-connector" aria-hidden="true">
          ↓
        </span>
        <div className="overy-bus">{t("Messagerie interserveurs")}</div>
        <span className="overy-connector" aria-hidden="true">
          ↓
        </span>
        <div className="overy-node">
          <strong>{t("Cache + accès asynchrones")}</strong>
        </div>
        <span className="overy-connector" aria-hidden="true">
          ↓
        </span>
        <div className="overy-node overy-node-key">
          <strong>MySQL</strong>
          <small>{t("comptes · monnaie · grades · sanctions")}</small>
        </div>
      </div>
      <div className="overy-integrations">
        <div className="overy-tools">
          <span>Tebex</span>
          <span>{t("Panel staff")}</span>
          <span>{t("Bot Discord")}</span>
        </div>
        <span className="overy-integration-arrow" aria-hidden="true">
          →
        </span>
        <div className="overy-node">
          <strong>{t("Services Overy")}</strong>
        </div>
        <span className="overy-integration-arrow" aria-hidden="true">
          →
        </span>
        <div className="overy-node overy-node-key">
          <strong>{t("Réseau de jeu")}</strong>
        </div>
      </div>
      <figcaption>
        {t("Achats, administration et communauté reliés au réseau.")}
      </figcaption>
    </figure>
  );
}
