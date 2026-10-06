import { useLanguage } from "../i18n";
import { ArrowUpRight, Plus } from "lucide-react";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();
  return (
    <article
      className={`site-project site-project--${project.id}`}
      id={project.id}
    >
      <a
        className="project-preview"
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("Voir le site")} ${project.name} (${t("nouvel onglet")})`}
      >
        <div className="preview-top">
          <span>{project.location}</span>
          <ArrowUpRight size={19} />
        </div>
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.alt}
          width="1440"
          height="1000"
          loading="lazy"
        />
      </a>
      <div className="project-title">
        <h3>{project.name}</h3>
        <span className="project-number">
          {t("/")}
          {project.number}
        </span>
      </div>
      <p className="project-headline">{project.headline}</p>
      <p className="muted">{project.description}</p>
      <div className="tags">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          {t("Voir le site")} <ArrowUpRight size={17} />
        </a>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {t("Code source")} <ArrowUpRight size={17} />
          </a>
        )}
      </div>
      <details className="project-details">
        <summary>
          {t("Dans les coulisses du projet")} <Plus size={19} />
        </summary>
        <div className="details-content">
          {project.details.map(([title, text]) => (
            <div key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </details>
    </article>
  );
}
