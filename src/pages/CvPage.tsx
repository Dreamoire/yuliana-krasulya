// src/pages/CvPage.tsx
import { Link } from "react-router-dom";
import "../styles/CvPage.css";
import photo from "../assets/images/yuliana-krasulya.jpg";
import pdfUrl from "./Developpeur-full-stack-Yuliana Krasulya.pdf";

export default function CvPage() {
  return (
    <main className="cv" aria-label="CV">
      <div className="page">
        <div className="layout">
          {/* ================= LEFT COLUMN (IDENTITY + CONTACT) ================= */}
          <aside aria-label="Informations">
            <div className="id" aria-label="Identité">
              <div>
                <h2 className="id-name">Yuliana Krasulya</h2>
                <img src={photo} alt="Photo de Yuliana Krasulya" />
              </div>
            </div>

            <div className="aside-block contact">
              <h2>COORDONNÉES</h2>

              <p>
                Tél. : <strong>07 68 91 45 77</strong>
              </p>

              <p>
                Email :{" "}
                <a href="mailto:krasulyayuliana@gmail.com">
                  krasulyayuliana@gmail.com
                </a>
              </p>

              <p>
                Portfolio :{" "}
                <a
                  href="https://www.dreamoire.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  dreamoire.fr
                </a>
              </p>

              <p>
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/yuliana-krasulya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  yuliana-krasulya
                </a>
              </p>

              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/Dreamoire"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dreamoire
                </a>
              </p>

              <p>Mobilité : Île-de-France</p>

              <a className="pdfBtn" href={pdfUrl} download>
                CV en PDF
              </a>
            </div>

            <div className="line" aria-hidden="true" />

            <div>
              <h2>Formation</h2>
              <ul className="split">
                <li>
                  <strong>CDA Éco-conception — RNCP 6 (Bac+3/4)</strong>
                  <p>
                    Simplon · démarrage octobre 2026 · alternance 18 mois ·
                    3 sem. entreprise / 1 sem. formation.
                  </p>
                </li>
                <li>
                  <strong>2025 – 2026 · Wild Code School / Simplon</strong>
                  <p>
                    DWWM RNCP 5 (Bac+2) · Full Stack React / Node.js.
                  </p>
                </li>
                <li>
                  <strong>EDAA — Design graphique</strong>
                  <p>Design visuel, mise en page, retouche, composition.</p>
                </li>
                <li>
                  <strong>Beaux-Arts</strong>
                </li>
              </ul>
            </div>

            <div>
              <h2>Langues</h2>
              <ul className="dots">
                <li>Français</li>
                <li>Anglais</li>
                <li>Russe</li>
              </ul>
            </div>

            <div>
              <h2>Centres d'intérêt</h2>
              <ul className="dots">
                <li>Art, design graphique, illustration</li>
                <li>UI/UX et créativité numérique</li>
                <li>Photographie</li>
                <li>IA générative</li>
                <li>Veille technologique</li>
              </ul>
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <section aria-label="Contenu principal">
            <h1>Développeuse Web Full Stack</h1>
            <p className="role">React / TypeScript / Node.js</p>

            <div className="cv-profil">
              <h2>Profil</h2>
              <p className="introText">
                <strong>Développeuse Full Stack React / TypeScript / Node.js</strong>,
                diplômée <strong>DWWM RNCP 5</strong> (Wild Code School /
                Simplon), avec expérience concrète d'applications déployées en
                production sur VPS OVHcloud.
              </p>
              <p>
                <strong>L'accessibilité</strong> n'est pas un sujet traité en
                fin de projet, mais intégrée dès la conception des interfaces :
                HTML5 sémantique, conformité RGAA et WCAG 2.1, attributs ARIA,
                responsive design et attention particulière à la lisibilité des
                contenus. Cette sensibilité s'appuie sur des convictions
                professionnelles et sur une expérience personnelle du handicap{" "}
                <strong>(RQTH)</strong>.
              </p>
              <p>
                Formée au design graphique et aux arts visuels, j'apporte une
                double culture design / intégration qui me permet de dialoguer
                naturellement avec les équipes UX/UI, de comprendre les
                contraintes visuelles d'une maquette et de produire des
                interfaces cohérentes, accessibles et fidèles aux intentions
                produit. Figma et Adobe Suite font partie de mes outils de
                travail habituels.
              </p>
              <p>
                Lors de ma <strong>PMSMP chez Formly (EdTech / LMS)</strong>,
                j'ai travaillé sur l'analyse et la documentation de trois
                codebases en production sans documentation préexistante. Reverse
                engineering de modules Auth JWT, Stripe Connect, LMS, RBAC et
                Mux Video, cartographie technique des flux applicatifs, rédaction
                de livrables destinés à accélérer l'onboarding développeur :
                cette expérience a renforcé ma capacité à comprendre rapidement
                une architecture existante et à évoluer dans des environnements
                techniques complexes.
              </p>
              <p>
                Je recherche un environnement engineering structuré, orienté
                qualité logicielle, collaboration et amélioration continue :
                revues de code, standards partagés, accessibilité numérique,
                méthodes Agile/Scrum et culture produit solide. Mon objectif est
                de <strong>progresser durablement au sein d'une équipe
                expérimentée</strong>, de monter en responsabilité sur des
                projets full-stack modernes et de devenir à terme une
                développeuse fiable sur laquelle une équipe peut réellement
                compter.
              </p>
              <p className="profil-note">
                <em>
                  Disponible immédiatement en{" "}
                  <strong>CDI junior</strong> ou en{" "}
                  <strong>alternance CDA RNCP 6</strong> à partir d'octobre
                  2026.{" "}
                  <strong>RQTH : autonomie complète</strong>, sans aménagement
                  spécifique.
                </em>
              </p>
            </div>

            <div className="block">
              <h2>Compétences techniques</h2>
              <dl className="skills-list">
                <dt>Frontend</dt>
                <dd>
                  React 19 · TypeScript · JavaScript · HTML5 sémantique · CSS3 ·
                  Responsive design · Context API · Hooks · Next.js (notions)
                </dd>

                <dt>Backend</dt>
                <dd>
                  Node.js · Express.js · REST API · JWT · Argon2id · MySQL ·
                  Architecture MVC
                </dd>

                <dt>DevOps &amp; Infrastructure</dt>
                <dd>
                  VPS OVHcloud · Nginx · PM2 · SSH · Docker (en cours) · Git ·
                  GitHub · GitLab
                </dd>

                <dt>Accessibilité &amp; Qualité</dt>
                <dd>RGAA · WCAG 2.1 · ARIA · Biome · Jest · Swagger</dd>

                <dt>Design &amp; Maquettage</dt>
                <dd>
                  UI/UX design · Figma · Adobe Suite · Wireframes · Charte
                  graphique
                </dd>

                <dt>Méthodes</dt>
                <dd>Scrum · Agile · Kanban</dd>
              </dl>
            </div>

            <div className="block experience">
              <h2>Expériences professionnelles</h2>
              <ul className="exp-list">
                <li>
                  <div className="exp-header">
                    <strong>
                      Stagiaire — Documentation Technique Full Stack
                    </strong>
                    <span className="exp-meta">
                      Formly · EdTech / LMS · Paris · PMSMP (France Travail)
                    </span>
                  </div>
                  <p>
                    Mission : créer from scratch la documentation technique
                    exhaustive d'une plateforme EdTech full-stack en production.
                     Objectif :
                    permettre l'onboarding d'un nouveau développeur en moins de
                    24 heures.
                  </p>
                  <p>
                    <strong>Analyse de codebase —</strong> lecture et
                    cartographie de 3 repos en production sans doc préexistante :
                    backend (Node.js · Fastify · TypeScript · Prisma ORM · MySQL ·
                    Redis · Docker · Nginx), frontend web (React · Next.js · App
                    Router) et mobile (React Native).
                  </p>
                  <p>
                    <strong>5 modules documentés —</strong> Authentification
                    (JWT · Passport.js · Zod · cookies httpOnly · flux Web vs
                    Mobile) · Paiement (Stripe Connect · webhooks · distribution
                    marketplace) · LMS (accès aux cours · progression utilisateur ·
                    contrôle d'accès) · Médias (upload · streaming HLS via Mux) ·
                    Rôles &amp; Admin (RBAC · permissions granulaires).
                  </p>
                  <p>
                    <strong>Livrables —</strong> diagrammes de séquence SVG
                    (code pur · convention couleur par couche) · fichiers Markdown
                    structurés en 10 sections (style Stripe Docs) · inventaires de
                    codebase · livrables validés par le lead développeur.
                  </p>
                </li>
                <li>
                  <div className="exp-header">
                    <strong>Designer graphique &amp; plasticienne — Freelance</strong>
                  </div>
                  <p>
                    Création visuelle, illustration, design éditorial et mise en
                    page. Gestion autonome de projets créatifs de A à Z, de la
                    conception à la livraison client.
                  </p>
                </li>
                <li>
                  <div className="exp-header">
                    <strong>
                      Graphiste maquettiste &amp; illustratrice — Maison
                      d'édition de livres
                    </strong>
                  </div>
                  <p>
                    Mise en page de textes longs, choix typographiques, design
                    de couvertures, création d'illustrations originales, retouche
                    photographique, préparation à l'impression (prépresse).
                  </p>
                </li>
                <li>
                  <div className="exp-header">
                    <strong>
                      Graphiste maquettiste &amp; illustratrice — Édition d'un
                      journal pédagogique
                    </strong>
                  </div>
                  <p>
                    Mise en page de contenus éditoriaux, choix typographiques
                    adaptés au lectorat, design de couvertures, illustrations,
                    retouche photographique, préparation prépresse.
                  </p>
                </li>
                <li>
                  <div className="exp-header">
                    <strong>
                      Expérience opérationnelle — Grande distribution &amp;
                      restauration
                    </strong>
                  </div>
                  <p>
                    Environnements à forte cadence. Coordination d'équipe,
                    rigueur opérationnelle, anticipation des besoins sous flux
                    intensif.
                  </p>
                </li>
              </ul>
            </div>

            <div className="projets">
              <h2>Projets réalisés</h2>
              <p>
                <strong>
                  P'tit Cahier — Application web de communication école-parents
                </strong>
              </p>
              <p>
                Projet full stack déployé en production — Wild Code School.
                Stack : React 19 · TypeScript · Vite · CSS Modules · Node.js ·
                Express · MySQL 8.0 · JWT · Argon2id · Nginx · PM2 · VPS
                OVHcloud.
              </p>
              <p>
                Points différenciants : déploiement VPS en totale autonomie
                (SSH · Nginx · PM2, sans Vercel ni Heroku) · authentification
                complète JWT + Argon2id · contrôle d'accès par rôle avec layouts
                adaptatifs · requêtes SQL complexes (jointures multi-tables,
                GROUP_CONCAT) · accessibilité RGAA / WCAG 2.1 intégrée dès la
                conception (initiative personnelle) · audit éco-conception en
                cours (WebP/AVIF, lazy loading, gzip, bundle optimization).
              </p>
              <p>
                Autres projets : applications React (TypeScript, APIs externes,
                gestion d'état), jeux en canvas, pages HTML/CSS. Maquettes Figma
                et collaboration Agile.
              </p>
              <div className="project-chips">
                <Link
                  to="/articles/14-04-2026-ptit-cahier"
                  className="project-chip"
                >
                  P'tit Cahier ↗
                </Link>
                <Link
                  to="/articles/31-12-2025-epic-battle"
                  className="project-chip"
                >
                  TS Epic Battle ↗
                </Link>
                <Link to="/projets#chromosphere" className="project-chip">
                  Chromosphère ↗
                </Link>
                <Link
                  to="/projets"
                  className="project-chip project-chip--all"
                >
                  Tous les projets ↗
                </Link>
              </div>
            </div>

            <div className="pro-skills">
              <h2>Soft Skills &amp; Compétences transversales</h2>
              <dl className="skills-list">
                <dt>Autonomie &amp; initiative</dt>
                <dd>
                  déploiement VPS en production en totale autonomie · proposition
                  architecturale (layouts par rôle) adoptée par l'équipe ·
                  intégration de l'accessibilité numérique (initiative personnelle).
                </dd>

                <dt>Rigueur &amp; attention au détail</dt>
                <dd>
                  vérification systématique · zéro livrable "à peu près bon" ·
                  chaque composant aria-labellisé, chaque requête SQL testée.
                </dd>

                <dt>Esprit d'équipe &amp; collaboration</dt>
                <dd>
                  communication proactive · transmission de connaissances · revues
                  de code GitHub · méthodes Agiles (Scrum, Kanban).
                </dd>

                <dt>Sensibilité UX &amp; accessibilité</dt>
                <dd>
                  lecture de maquettes Figma · conception d'interfaces inclusives ·
                  responsive design · veille design active.
                </dd>
              </dl>
            </div>
          </section>

          {/* ================= SECONDARY (empty, kept for grid) ================= */}
          <section
            className="secondary"
            aria-label="Informations complémentaires"
          />
        </div>
      </div>
    </main>
  );
}
