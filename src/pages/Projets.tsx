import type { JSX } from "react";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { projects } from "../data/projects";

import "../styles/Projets.css";

export default function Projets(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <main className="projets-page">
      <header className="projets-page__header">
        <h1 className="projets-page__title">Projets</h1>
        <p className="projets-page__subtitle">
          Une sélection de mes projets (code, démos, UI/UX).
        </p>

        <nav className="projets-page__toc" aria-label="Aller à un projet">
          {projects.map((p) => {
            const articlePath = p.articleSlug
              ? `/articles/${p.articleSlug}`
              : undefined;

            return articlePath ? (
              <Link
                key={p.id}
                className="projets-page__toc-link"
                to={articlePath}
              >
                {p.title}
              </Link>
            ) : (
              <a
                key={p.id}
                className="projets-page__toc-link"
                href={`#${p.slug}`}
              >
                {p.title}
              </a>
            );
          })}
        </nav>
      </header>

      <section className="projets-list" aria-label="Liste des projets">
        {projects.map((p) => {
          const hasRepo = Boolean(p.repoUrl);
          const hasLive = Boolean(p.liveUrl);

          const articlePath = p.articleSlug
            ? `/articles/${p.articleSlug}`
            : undefined;

          return (
            <article key={p.id} className="projet" id={p.slug}>
              <div className="projet__content">
                <h2 className="projet__title">
                  {articlePath ? (
                    <Link to={articlePath} className="projet__titleLink">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h2>

                <p className="projet__desc">{p.shortDescription}</p>

                <div className="projet__links" aria-label="Liens du projet">
                  {hasRepo ? (
                    <a
                      className="projet__link"
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Dépôt GitHub
                    </a>
                  ) : null}

                  {hasLive ? (
                    <a
                      className="projet__link projet__link--primary"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le site
                    </a>
                  ) : null}

                  {!hasRepo && !hasLive ? (
                    <span className="projet__link projet__link--disabled">
                      Bientôt disponible
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="projet__media" aria-label={`Aperçu ${p.title}`}>
                {articlePath ? (
                  <Link to={articlePath} className="projet__imageLink">
                    <img
                      className="projet__image"
                      src={p.imageSrc}
                      alt={`Aperçu du projet ${p.title}`}
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <img
                    className="projet__image"
                    src={p.imageSrc}
                    alt={`Aperçu du projet ${p.title}`}
                    loading="lazy"
                  />
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
