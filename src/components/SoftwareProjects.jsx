import { ArrowUpRight, Plus } from "lucide-react";
import { useLanguage } from "../i18n";
import { softwareProjects } from "../data/projects";
import OveryVisual from "./OveryVisual";

export default function SoftwareProjects() {
  const { t, translate } = useLanguage();
  return (
    <div className="software-projects">
      {translate(softwareProjects).map((project) => (
        <article
          className="software-project"
          id={project.id}
          key={project.id}
          aria-labelledby={`${project.id}-title`}
        >
          <div className="software-heading">
            <p className="eyebrow">{project.category}</p>
            <span className="project-number">/ {project.number}</span>
          </div>
          <div className="software-intro">
            <div>
              <h3 id={`${project.id}-title`}>{project.name}</h3>
              <p className="software-role">{project.role}</p>
            </div>
            <div>
              <p className="story-lead">{project.headline}</p>
              <p className="muted">{project.description}</p>
            </div>
          </div>
          {project.id === "overy" && <OveryVisual />}
          <dl className="project-results">
            {project.results.map(([value, label]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <ul className="software-contributions">
            {project.contributions.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
          <div className="tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          {project.links && (
            <div className="project-links software-links">
              {project.links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label} <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
          <details className="project-details">
            <summary>
              <span>
                {t("Voir l’étude de cas")} — {project.name}
              </span>
              <Plus size={19} aria-hidden="true" />
            </summary>
            <div className="details-content software-details">
              {project.details.map(([title, text]) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            {project.showcase && (
              <figure className="software-showcase">
                <a
                  href={`${import.meta.env.BASE_URL}${project.showcase.image}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("Agrandir la capture de la boutique Overy")}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${project.showcase.image}`}
                    alt={project.showcase.alt}
                    width="390"
                    height="1000"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  <p className="eyebrow">{t("LE PRODUIT EN IMAGES")}</p>
                  <h4>{project.showcase.title}</h4>
                  <p className="muted">{project.showcase.text}</p>
                  <p className="showcase-caption">{project.showcase.caption}</p>
                  <span className="showcase-zoom">
                    {t("Cliquer sur la capture pour l’agrandir")}{" "}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </figcaption>
              </figure>
            )}
          </details>
        </article>
      ))}
    </div>
  );
}
