import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

const skills = [
  ['01', 'Front-end', 'React, JavaScript, interfaces responsives et accessibles.'],
  ['02', 'Back-end', 'APIs, logique métier, authentification et intégrations.'],
  ['03', 'Produit', 'Des parcours clairs, utiles et pensés pour de vrais utilisateurs.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-nav">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Accueil">
          AE<span>K</span>
        </a>
        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Navigation principale">
          <a href="#projects" onClick={closeMenu}>Projets</a>
          <a href="#about" onClick={closeMenu}>À propos</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a
          className="nav-social"
          href="https://github.com/Azzam0v"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-content">
            <div className="availability">
              <span />
              Disponible pour de nouveaux projets
            </div>
            <p className="hero-intro">Salut, moi c’est Azzam.</p>
            <h1>
              Je construis des produits numériques
              <em>qui ont du caractère.</em>
            </h1>
            <p className="hero-copy">
              Développeur full-stack, j’aime transformer une idée en produit
              fluide, solide et franchement agréable à utiliser — de
              l’interface jusqu’à la logique serveur.
            </p>
            <div className="hero-actions">
              <a className="button button--light" href="#projects">
                Découvrir mes projets <ArrowDown size={18} />
              </a>
              <a
                className="button button--ghost"
                href="https://www.linkedin.com/in/azzam-el-kettani-656b3b301/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-side">
            <div className="code-card">
              <div className="code-card__top">
                <span /><span /><span />
                <small>azzam.jsx</small>
              </div>
              <pre>
                <code>
                  <i>const</i> developer = {'{\n'}
                  {'  '}name: <b>'Azzam'</b>,{'\n'}
                  {'  '}focus: <b>'Digital products'</b>,{'\n'}
                  {'  '}tools: [<b>'React'</b>, <b>'Java'</b>, <b>'APIs'</b>],{'\n'}
                  {'  '}mindset: <b>'ship & improve'</b>{'\n'}
                  {'}'};
                </code>
              </pre>
              <div className="code-result">
                <Sparkles size={17} />
                <span>Building something useful...</span>
              </div>
            </div>
            <div className="hero-stamp">
              <span>DESIGN</span> × <span>CODE</span> × <span>IMPACT</span>
            </div>
          </div>
          <a className="scroll-hint" href="#projects" aria-label="Faire défiler vers les projets">
            <span>Scroll</span><ArrowDown size={16} />
          </a>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="section-index">01 / PROJETS SÉLECTIONNÉS</p>
            <h2>Une sélection<br />de projets.</h2>
            <p>
              Des produits aux univers différents qui montrent ma manière de
              réfléchir, concevoir et construire. La collection continuera
              naturellement de grandir.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-heading">
            <p className="section-index">02 / À PROPOS</p>
            <h2>Curieux par nature.<br />Exigeant dans le code.</h2>
          </div>
          <div className="about-copy">
            <p>
              J’aime les projets où l’interface, le backend, la logique métier
              et le besoin utilisateur se rencontrent. Mon objectif : livrer
              quelque chose de propre techniquement, mais surtout de simple à
              comprendre.
            </p>
            <p>
              Je travaille sur tout le parcours — de la première maquette au
              déploiement — avec une préférence assumée pour les interfaces
              vivantes et les produits qui résolvent un vrai problème.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(([number, title, copy]) => (
              <article key={title}>
                <span>{number}</span>
                {number === '01' && <Code2 />}
                {number === '02' && <Layers3 />}
                {number === '03' && <Sparkles />}
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="stack-marquee" aria-label="Technologies utilisées">
            <div>
              <span>REACT</span><i>✦</i><span>JAVASCRIPT</span><i>✦</i>
              <span>JAVA</span><i>✦</i><span>SPRING BOOT</span><i>✦</i>
              <span>CSS</span><i>✦</i><span>GIT</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-index">03 / ON SE PARLE ?</p>
            <h2>Une idée en tête ?<br /><em>Construisons-la.</em></h2>
          </div>
          <div className="contact-actions">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/azzam-el-kettani-656b3b301/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> Me contacter sur LinkedIn <ArrowRight />
            </a>
            <a
              className="contact-link"
              href="https://github.com/Azzam0v"
              target="_blank"
              rel="noreferrer"
            >
              <Github /> Explorer mon GitHub <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#top">AE<span>K</span></a>
        <p>Conçu et développé par Azzam El Kettani.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
