import { ArrowUpRight, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

function ProjectCard({ project }) {
  return (
    <article className={`project project--${project.tone}`}>
      <div className="project__content">
        <div className="project__meta">
          <span>{project.number}</span>
          <p>{project.category}</p>
        </div>
        <h3>{project.name}</h3>
        <p className="project__description">{project.description}</p>
        <ul className="project__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 size={16} />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-actions">
          <a
            className="project-link project-link--primary"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} />
            Voir le projet
            <ArrowUpRight size={17} />
          </a>
          <a
            className="project-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            Voir le code
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

export default ProjectCard;
