import type { JSX } from "react";

import { Link } from "react-router-dom";

import type { Project } from "../data/projects";

import "../styles/ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps): JSX.Element {
  const articlePath = project.articleSlug
    ? `/articles/${project.articleSlug}`
    : undefined;

  return (
    <article className="project-card">
      {articlePath ? (
        <Link to={articlePath} className="project-card__imageLink">
          <img
            src={project.imageSrc}
            alt={`Aperçu du projet ${project.title}`}
            className="project-card__image"
            loading="lazy"
          />
        </Link>
      ) : (
        <img
          src={project.imageSrc}
          alt={`Aperçu du projet ${project.title}`}
          className="project-card__image"
          loading="lazy"
        />
      )}

      <div className="project-card__content">
        <h3 className="project-card__title">
          {articlePath ? (
            <Link to={articlePath} className="project-card__titleLink">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="project-card__desc">{project.shortDescription}</p>
      </div>
    </article>
  );
}
