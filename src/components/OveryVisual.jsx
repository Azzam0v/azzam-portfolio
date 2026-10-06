import { useLanguage } from "../i18n";

// A conceptual illustration of the network, not a screenshot of the game.
export default function OveryVisual() {
  const { t } = useLanguage();
  return (
    <figure className="overy-visual">
      <div className="overy-visual-heading">
        <span>OVERY NETWORK</span>
        <span>MINECRAFT BEDROCK · 2019–2023</span>
      </div>
      <svg viewBox="0 0 960 410" role="img" aria-label={t("Illustration du réseau Overy : un proxy relie le lobby, les mini-jeux et les modes de jeu à des données MySQL partagées.")}>
        <defs>
          <pattern id="overy-grid" width="48" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 12 24 0 48 12 24 24Z" fill="none" stroke="#b9d994" strokeOpacity=".08" />
          </pattern>
          <g id="overy-island">
            <path d="m0 0 100-50 100 50-100 50Z" fill="#b6d589" />
            <path d="m0 0 100 50v48L0 48Z" fill="#4b6343" />
            <path d="m100 50 100-50v48L100 98Z" fill="#314b35" />
            <path d="m0 0 100 50v12L0 12Z" fill="#80a966" />
            <path d="m100 50 100-50v12L100 62Z" fill="#648b51" />
            <path d="m50-25 100 50M100-50 0 0M150-25 50 25" stroke="#deebbd" strokeOpacity=".35" />
          </g>
          <g id="overy-block">
            <path d="m0 0 28-14 28 14-28 14Z" fill="#eef0d8" />
            <path d="m0 0 28 14v45L0 45Z" fill="#99ad8f" />
            <path d="m28 14 28-14v45L28 59Z" fill="#637e65" />
          </g>
        </defs>
        <path fill="url(#overy-grid)" d="M0 0h960v410H0z" />
        <g fill="none" stroke="#bbdf8d" strokeWidth="2" strokeDasharray="6 7" opacity=".7">
          <path d="M480 104 230 195M480 104v102M480 104 730 195" />
          <path d="m230 275 250 82 250-82M480 286v71" />
        </g>
        <g transform="translate(416 43)">
          <rect width="128" height="54" rx="4" fill="#bbdf8d" />
          <text x="64" y="33" textAnchor="middle" fill="#1b3026" fontSize="16" fontWeight="700">PROXY</text>
        </g>
        <use href="#overy-island" x="130" y="204" />
        <use href="#overy-island" x="380" y="234" />
        <use href="#overy-island" x="630" y="204" />
        <use href="#overy-block" x="202" y="133" />
        <use href="#overy-block" x="432" y="171" />
        <use href="#overy-block" x="475" y="193" />
        <use href="#overy-block" x="680" y="146" />
        <use href="#overy-block" x="722" y="125" />
        <g fill="#f0f1df" fontSize="15" textAnchor="middle" fontWeight="600">
          <text x="230" y="115">LOBBY</text>
          <text x="480" y="146">{t("MINI-JEUX")}</text>
          <text x="730" y="106">{t("MODES DE JEU")}</text>
        </g>
        <rect x="341" y="349" width="278" height="40" rx="4" fill="#243d31" stroke="#70946a" />
        <text x="480" y="374" fill="#d9e6cc" textAnchor="middle" fontSize="14">MySQL · {t("données partagées")}</text>
      </svg>
      <figcaption>
        <span>{t("Un univers de jeu. Tout un système derrière.")}</span>
        <span>{t("Illustration du réseau multi-serveurs")}</span>
      </figcaption>
    </figure>
  );
}
