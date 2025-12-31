import type { JSX } from "react";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { getArticleBySlug } from "../data/articles";

import "../styles/ArticlePage.css";

export default function ArticlePage(): JSX.Element {
  const { slug } = useParams();

  const article = typeof slug === "string" ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <p>Article introuvable</p>;
  }

  return (
    <main className="article-page">
      <article className="article">
        <div className="article__media">
          <img
            className="article__cover"
            src={article.meta.cover}
            alt={article.meta.title}
          />
        </div>

        <div className="article__body">
          <h1 className="article__title">{article.meta.title}</h1>

          {article.meta.subtitle ? (
            <h2 className="article__subtitle">{article.meta.subtitle}</h2>
          ) : null}

          {article.meta.intro ? (
            <p className="article__intro">{article.meta.intro}</p>
          ) : null}

          <div className="article__content">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}
