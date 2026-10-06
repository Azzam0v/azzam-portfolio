import { useLanguage } from "./i18n";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Layers3,
  Linkedin,
  MapPin,
  Menu,
  Plus,
  Users,
  X,
} from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import SoftwareProjects from "./components/SoftwareProjects";
import { profile, projects, rzo, softwareProjects } from "./data/projects";

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export default function App() {
  const { t, translate, language, setLanguage } = useLanguage();
  const localizedRzo = translate(rzo);
  const localizedProjects = translate(projects);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t("Aller au contenu")}
      </a>
      <header className="site-nav wrap">
        <a
          className="wordmark"
          href="#top"
          aria-label={t("Azzam El Kettani, accueil")}
          onClick={() => setMenuOpen(false)}
        >
          {t("azzam")}
          <span className="brand-dot">{t(".")}</span>
          <span className="wordmark-sub">{t("EL KETTANI")}</span>
        </a>
        <div className="nav-tools">
          <div
            className="language-switch"
            role="group"
            aria-label={t("Langue du site")}
          >
            <button
              type="button"
              lang="fr"
              aria-label="Français"
              aria-pressed={language === "fr"}
              onClick={() => setLanguage("fr")}
            >
              FR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              lang="en"
              aria-label="English"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <button
            ref={menuButton}
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navigation"
            aria-label={menuOpen ? t("Fermer le menu") : t("Ouvrir le menu")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="navigation"
          className={menuOpen ? "is-open" : ""}
          aria-label={t("Navigation principale")}
        >
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            {t("Les projets")}{" "}
            <span>
              {String(1 + softwareProjects.length + projects.length).padStart(
                2,
                "0",
              )}
            </span>
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            {t("Expérience")}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("À propos")}
          </a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {t("Discutons")} <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <p className="eyebrow">{t("DÉVELOPPEUR FULL-STACK")}</p>
            <span>
              <span className="status-dot" /> {t("Ouvert aux opportunités")}
            </span>
          </div>
          <h1 id="hero-title">
            {t("Du code.")}
            <br />
            {t("Du sens.")}
            <span className="hero-asterisk" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                focusable="false"
              >
                <path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8 19.8 4.2" />
              </svg>
            </span>
            <br />
            <span className="muted-heading">{t("De l’impact.")}</span>
          </h1>
          <div className="hero-bottom">
            <p>
              {t("Moi, c’est")} <strong>{t("Azzam El Kettani.")}</strong>
              <br />
              {t(
                "Étudiant en génie informatique à uOttawa et cofondateur de RZO Sports. Du backend Java à une plateforme multijoueur monétisée, je construis des produits et les fais vivre en production.",
              )}
            </p>
            <a className="button button-dark" href="#projects">
              {t("Explorer mes projets")} <ArrowDown size={18} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> {t("Ottawa — Gatineau")}
            </span>
            <span>{t("GÉNIE INFORMATIQUE · UOTTAWA")}</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              {t("GitHub")} <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
        <section
          className="work-section wrap"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <p className="eyebrow">{t("01 / PROJETS SÉLECTIONNÉS")}</p>
            <div className="heading-row">
              <h2 id="work-title">
                {t("Trois projets.")}
                <br />
                <span className="muted-heading">
                  {t("Du logiciel concret.")}
                </span>
              </h2>
              <p>
                {t("Produit full-stack. Backend en production.")}
                <br />
                {t("Données, automatisation et IA locale.")}
                <br />
                {t("Et trois sites livrés à des clients.")}
              </p>
            </div>
          </div>
          <article className="rzo-project" id="rzo">
            <div className="rzo-top">
              <span>
                <span className="status-dot" /> {t("PROJET PHARE")}
              </span>
              <span>{t("01 / WEB · MOBILE · API")}</span>
            </div>
            <div className="rzo-grid">
              <div className="rzo-copy">
                <p className="rzo-wordmark">
                  {t("RZO")}
                  <span>{t("SPORTS")}</span>
                </p>
                <h3>
                  {t("Le sport nous rassemble.")}
                  <br />
                  {t("La technologie")}
                  <br />
                  <em>{t("crée le lien.")}</em>
                </h3>
                <p>
                  {t(
                    "Les joueurs réservent un terrain, remplissent leur partie et partagent les frais. Les complexes sportifs d’Ottawa–Gatineau gèrent agenda, équipe et paiements, sans abonnement. Un site, une API et une app mobile.",
                  )}
                </p>
                <div className="rzo-actions">
                  <ExternalLink className="button button-lime" href={rzo.live}>
                    {t("Découvrir RZO")}
                  </ExternalLink>
                  <a
                    className="light-link"
                    href="#rzo-story"
                    onClick={() => {
                      document.getElementById("rzo-story").open = true;
                    }}
                  >
                    {t("Voir l’étude de cas")} <ArrowDown size={16} />
                  </a>
                </div>
              </div>
              <div className="rzo-visual">
                <img
                  src={`${import.meta.env.BASE_URL}images/rzo-football.jpg`}
                  alt={t(
                    "Un terrain de football, au cœur de l’expérience sportive RZO",
                  )}
                  width="1200"
                  height="800"
                  loading="lazy"
                />
                <div className="rzo-visual-overlay" />
                <div className="rzo-map-label">
                  <MapPin size={14} /> {t("OTTAWA / GATINEAU")}
                </div>
                <div className="court" aria-hidden="true">
                  <div className="court-center" />
                  <div className="court-box court-box-left" />
                  <div className="court-box court-box-right" />
                  <span className="player player-one" />
                  <span className="player player-two" />
                  <span className="player player-three" />
                </div>
                <div className="rzo-visual-caption">
                  <span>
                    {t("LE MÊME TERRAIN.")}
                    <br />
                    {t("DE NOUVELLES RENCONTRES.")}
                  </span>
                  <Users size={30} />
                </div>
              </div>
            </div>
            <div className="rzo-stack">
              {rzo.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
          <details className="rzo-case-study project-details" id="rzo-story">
            <summary>
              <span>{t("Voir l’étude de cas")} — RZO Sports</span>
              <Plus size={19} aria-hidden="true" />
            </summary>
            <div className="rzo-story">
              <div>
                <p className="eyebrow">
                  {t("COFONDATEUR & DÉVELOPPEUR FULL-STACK")}
                </p>
                <h3>
                  {t("Plus qu’un projet")}
                  <br />
                  {t("de programmation.")}
                </h3>
                <div className="founder-note">
                  {t("Un problème réel.")}
                  <br />
                  {t("Deux cofondateurs.")}
                  <br />
                  {t("Une entreprise incorporée.")}
                </div>
              </div>
              <div>
                <p className="story-lead">
                  {t(
                    "Notre ambition : révolutionner la façon de vivre le sport et de créer du lien à Ottawa–Gatineau.",
                  )}
                </p>
                <p className="muted">
                  {t(
                    "J’ai cofondé RZO Sports avec mon ami Mehdi Semmar à partir d’un constat simple : les joueurs et les centres sportifs avaient besoin d’un même espace pour se retrouver, réserver et organiser le jeu.",
                  )}
                </p>
                <p className="muted">
                  {t(
                    "Nous avons rencontré des gestionnaires, au téléphone et sur place. Certains fonctionnaient encore par courriel, d’autres avec des outils peu adaptés. Ces échanges ont guidé la création d’un premier produit, testé auprès de vrais utilisateurs.",
                  )}
                </p>
                <p className="muted">
                  {t(
                    "Le premier prototype est devenu un vrai produit : une réservation pensée d’abord pour le joueur, un logiciel de gestion complet pour les complexes et un modèle simple. Les complexes ne paient aucun abonnement ; des frais de service de 1 % s’ajoutent au prix payé par les joueurs.",
                  )}
                </p>
                <p className="muted">
                  {t(
                    "Je m’investis dans ce projet sur la durée, de la réflexion produit au développement full-stack. Aujourd’hui, RZO Sports Inc. est une entreprise incorporée, et nous développons notre réseau de centres partenaires, une rencontre à la fois.",
                  )}
                </p>
              </div>
            </div>
            <dl className="rzo-facts">
              {localizedRzo.facts.map(([value, label]) => (
                <div key={value}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="milestones">
              <div>
                <span className="milestone-value">{t("Startup Garage")}</span>
                <h4>{t("De l’idée au modèle d’affaires")}</h4>
                <p>
                  {t(
                    "Accélérateur de l’Université d’Ottawa : étude de marché, plan d’affaires et identité de marque.",
                  )}
                </p>
              </div>
              <div>
                <span className="milestone-value">{t("2 / 40")}</span>
                <h4>{t("Au concours de pitch")}</h4>
                <p>
                  {t(
                    "Deuxième place sur 40 équipes, devant un jury de quatre investisseurs.",
                  )}
                </p>
              </div>
              <div>
                <span className="milestone-value">{t("Shopify Builders")}</span>
                <h4>{t("Le produit face à son public")}</h4>
                <p>
                  {t(
                    "Présentation de RZO et échanges avec d’autres personnes qui construisent leurs entreprises.",
                  )}
                </p>
              </div>
            </div>
            <div className="product-gallery">
              <div className="product-gallery-heading">
                <p className="eyebrow">{t("DU CONCEPT AU PRODUIT")}</p>
                <p>{t("La nouvelle interface de RZO Sports, en ligne.")}</p>
              </div>
              <div className="product-shots">
                {localizedRzo.shots.map((shot) => {
                  const src = `${import.meta.env.BASE_URL}${shot.image.replace("{lang}", language)}`;
                  return (
                    <figure
                      key={shot.image}
                      className={shot.wide ? "is-wide" : undefined}
                    >
                      <a
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("Agrandir la capture")} : ${shot.caption}`}
                      >
                        <img
                          src={src}
                          alt={shot.alt}
                          width="1440"
                          height="900"
                          loading="lazy"
                        />
                      </a>
                      <figcaption>{shot.caption}</figcaption>
                    </figure>
                  );
                })}
              </div>
              <div className="rzo-mobile">
                <div className="rzo-mobile-copy">
                  <p className="eyebrow">{t("APP MOBILE · iOS & ANDROID")}</p>
                  <h4>{localizedRzo.mobile.title}</h4>
                  <p>{localizedRzo.mobile.text}</p>
                  <ul>
                    {localizedRzo.mobile.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {["React Native", "Expo", "TypeScript", "Stripe"].map(
                      (tag) => (
                        <span key={tag}>{tag}</span>
                      ),
                    )}
                  </div>
                </div>
                <div className="rzo-phones">
                  {localizedRzo.mobile.shots.map(([screen, label]) => (
                    <figure key={screen}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/rzo-mobile-${screen}-${language}.webp`}
                        alt={`${t("Écran de l’app mobile RZO Sports")} : ${label}`}
                        width="600"
                        height="1162"
                        loading="lazy"
                      />
                      <figcaption>{label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <a
                className="story-source"
                href="https://mehdisemmar.me/blog/rzo"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("L’aventure racontée par Mehdi, mon cofondateur")}{" "}
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="feature-grid">
              {localizedRzo.features.map(([n, title, text]) => (
                <div key={n}>
                  <span className="feature-number">
                    {n} {t("/")}
                  </span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <details className="engineering">
              <summary>
                <span>
                  <Code2 size={20} /> {t("Sous le capot de RZO")}{" "}
                  <small>{t("Architecture, choix techniques & qualité")}</small>
                </span>
                <Plus size={22} />
              </summary>
              <div className="engineering-content">
                <div
                  className="architecture"
                  aria-label={t("Architecture RZO")}
                >
                  <span>
                    {t("React · React Native")}
                    <small>{t("Site web & app mobile")}</small>
                  </span>
                  <ArrowRight />
                  <span>
                    {t("Spring Boot")}
                    <small>{t("API & règles métier")}</small>
                  </span>
                  <ArrowRight />
                  <span>
                    {t("MySQL")}
                    <small>{t("Données persistantes")}</small>
                  </span>
                  <span className="architecture-side">
                    {t("Stripe Connect · R2")}
                    <small>{t("Paiements & images")}</small>
                  </span>
                </div>
                <div className="engineering-grid">
                  {localizedRzo.engineering.map((item) => (
                    <div key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <div className="tags">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="engineering-footer">
                  <p>
                    {t(
                      "Décrit à partir du code des trois dépôts, privés, de RZO Sports. Visite technique possible en entretien.",
                    )}
                  </p>
                  <ExternalLink href={rzo.venues}>
                    {t("Voir l’offre pour les complexes")}
                  </ExternalLink>
                </div>
              </div>
            </details>
          </details>
          <SoftwareProjects />
          <div className="sites-heading">
            <div>
              <p className="eyebrow">
                {t("AUTRES RÉALISATIONS / SITES CLIENTS")}
              </p>
              <h3>
                {t("Des univers qui")}
                <br />
                {t("font la différence.")}
              </h3>
            </div>
            <p>
              {t("Identité visuelle, contenu et parcours.")}
              <br />
              {t("Des sites légers, avec des interactions ciblées")}
              <br />
              {t("et un parcours clair vers la réservation ou l’achat.")}
            </p>
          </div>
          <div className="sites-grid">
            {localizedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <Experience />
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap">
            <div className="about-grid">
              <div>
                <p className="eyebrow">{t("03 / MA FAÇON DE TRAVAILLER")}</p>
                <h2 id="about-title">
                  {t("Penser au-delà")}
                  <br />
                  <span className="muted-heading">{t("de l’écran.")}</span>
                </h2>
              </div>
              <div className="about-copy">
                <p>
                  {t(
                    "J’étudie le génie informatique à l’Université d’Ottawa, avec l’option gestion et entrepreneuriat. J’aime relier la technique à un besoin réel, puis suivre le produit au-delà de sa première version.",
                  )}
                </p>
                <p>
                  {t(
                    "Overy m’a appris à développer et exploiter une plateforme avec une communauté et une équipe. Au CECCE, j’ai contribué à une base de code existante, aux pipelines de données et à l’optimisation d’une application Java. Avec RZO Sports, je poursuis cette démarche comme cofondateur et développeur full-stack.",
                  )}
                </p>
                <p>
                  {t(
                    "Je souhaite rejoindre une équipe où je peux contribuer à des produits utiles, apprendre au contact d’autres développeurs et prendre des responsabilités concrètes.",
                  )}
                </p>
                <ExternalLink href={profile.linkedin}>
                  {t("Faisons connaissance sur LinkedIn")}
                </ExternalLink>
              </div>
            </div>
            <div className="skills-grid">
              {[
                [
                  Code2,
                  "01",
                  "Soigner l’interface",
                  "React, JavaScript, HTML et CSS. Des parcours responsives, une hiérarchie claire et une attention au clavier.",
                ],
                [
                  Layers3,
                  "02",
                  "Structurer le produit",
                  "Java, Spring Boot, API REST et MySQL. Relier l’expérience utilisateur à une logique métier cohérente.",
                ],
                [
                  Users,
                  "03",
                  "Partir du besoin",
                  "Comprendre le contexte, choisir les bons outils et améliorer le produit à partir de situations concrètes.",
                ],
              ].map(([Icon, n, title, text]) => (
                <div key={n}>
                  <div className="skill-top">
                    <Icon size={23} />
                    <span>{n}</span>
                  </div>
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact wrap" id="contact">
          <div className="contact-top">
            <p className="eyebrow">{t("04 / LA SUITE S’ÉCRIT ENSEMBLE")}</p>
            <span>
              <Check size={15} /> {t("À l’écoute d’opportunités")}
            </span>
          </div>
          <h2>
            {t("Du concret.")}
            <br />
            {t("Ensemble")}
            <span className="brand-dot">{t(".")}</span>
          </h2>
          <div className="contact-bottom">
            <p>
              {t("Vous cherchez un développeur impliqué,")}
              <br />
              {t("avec le goût du produit et du travail soigné ?")}
              <br />
              <strong>{t("Parlons de votre équipe.")}</strong>
            </p>
            <ExternalLink
              className="button button-dark"
              href={profile.linkedin}
            >
              <Linkedin size={19} /> {t("Me contacter")}
            </ExternalLink>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>
          {t("©")} {new Date().getFullYear()} {t("Azzam El Kettani")}
        </span>
        <span>{t("Conçu avec intention. Développé avec soin.")}</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <Github size={15} /> {t("GitHub")} <ArrowUpRight size={14} />
        </a>
        <a href="#top" aria-label={t("Retour en haut")}>
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
