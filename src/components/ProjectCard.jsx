import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Dumbbell,
  ExternalLink,
  Github,
  Scissors,
} from 'lucide-react';

const projectIcons = {
  rzo: Dumbbell,
  nova: Scissors,
  memory: BrainCircuit,
};

function ProjectCard({ project }) {
  const ProjectIcon = projectIcons[project.id] ?? ExternalLink;

  return (
    <article className="project">
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
      <a
        className="project-icon"
        href={project.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ouvrir ${project.name}`}
      >
        <ProjectIcon aria-hidden="true" />
        <span>{project.number}</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}

export default ProjectCard;
