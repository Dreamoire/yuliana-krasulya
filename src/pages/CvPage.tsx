// src/pages/CvPage.tsx
import "../styles/CvPage.css";
import photo from "../assets/images/yuliana-krasulya.jpg";
import pdfUrl from "./CV-Yuliana-Krasulya.pdf";

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

            <div className="line" aria-hidden="true" />

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

            <div>
              <h2>Parcours pro</h2>
              <ul className="split">
                <li>
                  <strong>
                    2019 – 2025 • Expérience opérationnelle orientée performance
                    &amp; expérience utilisateur
                  </strong>
                  <p>
                    Travail en environnements à forte cadence (grande
                    distribution, restauration) anticipation des besoins et
                    optimisation des flux de travail amélioration de l'efficacité
                    opérationnelle et de la coordination des équipes
                  </p>
                </li>

                <li>
                  <strong>
                    2006 – 2019 • Designer graphique et plasticienne — Freelance
                  </strong>
                  <p>
                    Création visuelle, illustration, design éditorial et mise en
                    page pour l'édition. Conception de maquettes, gestion
                    autonome de projets créatifs de A à Z.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2>Langues</h2>
              <ul className="dots">
                <li>Français</li>
                <li>Anglais</li>
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
                <strong>Développeuse Web Full Stack</strong> (React / TypeScript
                / Node.js), diplômée de la{" "}
                <strong>Wild Code School / Simplon (DWWM, RNCP 5).</strong> À la
                croisée du design UX/UI et du développement front-end /
                back-end, formée aux Beaux-Arts et au design graphique, engagée
                dans l'accessibilité numérique (RGAA, WCAG 2.1).
              </p>
              <p>
                <strong>Recherche contrat d'apprentissage</strong> —  18 mois à partir d'octobre 2026. 
                Formation visée : CDA (Concepteur Développeur d'Applications, RNCP 6) 
                chez Simplon – 686 h en téléprésentiel. Rythme : 3 semaines en entreprise / 
                1 semaine en formation. Flexible sur l'école, le calendrier et la spécialisation, 
                dans le périmètre du développement web / mobile.
              </p>
              <p>
                Bénéficiaire de la{" "}
                <strong>
                  RQTH — éligible à l'apprentissage sans limite d'âge.
                </strong>{" "}
                Autonomie complète, sans aucun aménagement spécifique. Embauche
                ouvrant droit aux aides AGEFIPH employeur.
              </p>
              <p>
                Dans l'attente du démarrage de l'alternance, disponible
                immédiatement pour une{" "}
                <strong>PMSMP (immersion professionnelle)</strong> afin de
                découvrir le fonctionnement d'une équipe technique et de
                démontrer ma capacité d'intégration sur le terrain.
              </p>
            </div>

            <div className="block">
              <h2>Compétences techniques</h2>

              <div className="skills-table" aria-label="Compétences techniques">
                <div className="skills-col">
                  <h3>Frontend</h3>
                  <p>
                    HTML · CSS · Responsive design · JavaScript · TypeScript ·
                    React · Context API · Hooks
                  </p>
                </div>
                <div className="skills-col">
                  <h3>Backend</h3>
                  <p>
                    Node.js · Express.js · MySQL · Architecture MVC · API REST ·
                    JSON
                  </p>
                </div>
                <div className="skills-col">
                  <h3>Accessibilité &amp; Qualité</h3>
                  <p>
                    RGAA · WCAG 2.1 · attributs ARIA · Typographie accessible
                  </p>
                </div>
                <div className="skills-col">
                  <h3>Design &amp; Maquettage</h3>
                  <p>
                    UI/UX design · Wireframes · Figma · Charte graphique · Adobe
                    Suite
                  </p>
                </div>
                <div className="skills-col">
                  <h3>Outils &amp; Méthodes</h3>
                  <p>
                    Git · GitHub · Méthodes Agiles · Scrum · Kanban / Trello ·
                    Vercel
                  </p>
                </div>
              </div>
            </div>

            {/* ---- Soft skills + Projets side by side ---- */}
            <div className="two-columns">
              <div className="pro-skills">
                <h2>SOFT SKILLS &amp; COMPÉTENCES TRANSVERSALES</h2>
                <ul>
                  <li>
                    <h3>Autonomie &amp; initiative</h3>
                    {" "}– déploiement VPS en production réalisé en totale
                    autonomie (hors programme de formation). Proposition
                    architecturale (layouts par rôle) adoptée par l'équipe.
                    Intégration de l'accessibilité numérique hors cahier des
                    charges.
                  </li>

                  <li>
                    <h3>Rigueur &amp; performance</h3>
                    {" "}– travail en environnements à forte cadence sous
                    contrainte de temps. Anticipation des besoins, vérification
                    systématique, attention au détail.
                  </li>

                  <li>
                    <h3>Esprit d'équipe &amp; collaboration</h3>
                    {" "}– communication proactive, transmission de
                    connaissances, formation de nouveaux collaborateurs. Travail
                    en téléprésentiel, revues de code (GitHub), méthodes Agiles
                    (Scrum, Kanban).
                  </li>

                  <li>
                    <h3>Sensibilité UX et accessibilité :</h3>
                    {" "}– culture visuelle nourrie par une veille design
                    permanente et l'analyse de références UI/UX, identification
                    des facteurs de réussite (ergonomie, lisibilité, hiérarchie
                    visuelle). Conception d'interfaces inclusives, responsive
                    design, maquettage Figma.
                  </li>
                </ul>
              </div>

              <div className="projets">
                <h2>PROJETS réalisés</h2>
                <p>
                  <strong>
                    P'tit Cahier — Application web de communication
                    école-parents
                  </strong>
                  <br />
                  Projet collaboratif full stack — Wild Code School : application
                  déployée en production.
                  <br />
                  Stack : React 19 · TypeScript · Vite · CSS Modules · Node.js ·
                  Express · MySQL 8.0 · JWT · Argon2id · Nginx · PM2 · VPS
                  OVHcloud
                </p>
                <p>
                  Réalisations personnelles : architecture front (layouts par
                  rôle), composants métier (tickets, modale, filtres), requêtes
                  SQL complexes (jointures, GROUP_CONCAT), déploiement VPS en
                  autonomie, intégration de l'accessibilité numérique (initiative
                  personnelle).
                </p>
                <p>
                  Développement de projets individuels (solo rush) et
                  collaboratifs, allant de pages HTML/CSS simples à des
                  applications web complètes en React. Intégration d'APIs
                  externes, développement d'interfaces dynamiques, gestion
                  d'état, organisation du code, mise en place d'algorithmes
                  simples, maquettes Figma et collaboration en équipe selon les
                  méthodes agiles.
                </p>
              </div>
            </div>

            <div className="block">
              <h2>FORMATION</h2>

              <ul className="education-list">
                <li className="education-item">
                  <h3>2025 – 2026 • Wild Code School – Développeur Web</h3>
                  <p>
                    Titre RNCP niveau 5 (Bac+2), Développeur Web et Web Mobile
                    (Full Stack, React/Node.js).
                  </p>
                </li>

                <li className="education-item">
                  <h3>
                    Prochaine étape : CDA — Concepteur Développeur
                    d'Applications
                  </h3>
                  <p>Titre RNCP niveau 6 (Bac+3/4) — alternance.</p>
                </li>

                <li className="education-item">
                  <h3>2020 – 2023 • EDAA – Formation en graphisme</h3>
                  <p>Design visuel, mise en page, retouche, composition.</p>
                </li>

                <li className="education-item">
                  <h3>1990 – 1994 • Beaux-Arts – Russie</h3>
                </li>
              </ul>
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
