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
              <h2>Parcours pro</h2>
              <ul className="split">
                <li>
                  <strong>
                    Expérience opérationnelle orientée performance
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
                    Designer graphique et plasticienne — Freelance
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
              <h2>Formation</h2>
              <ul className="split">
                <li>
                  <strong>
                    Prochaine étape : CDA — Concepteur Développeur
                    d'Applications
                  </strong>
                  <p>RNCP 6 (Bac+3/4) — alternance.</p>
                </li>
                <li>
                  <strong>2025 – 2026 • Wild Code School</strong>
                  <p>
                    RNCP 5 (Bac+2), Développeur Web et Web Mobile (Full Stack,
                    React/Node.js).
                  </p>
                </li>
                <li>
                  <strong>EDAA – Formation en graphisme</strong>
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
                <strong>Développeuse Web Full Stack</strong> (React / TypeScript
                / Node.js), diplômée de la{" "}
                <strong>Wild Code School / Simplon (DWWM, RNCP 5).</strong> À la
                croisée du design UX/UI et du développement front-end /
                back-end, engagée dans l'accessibilité numérique (RGAA, WCAG 2.1).
              </p>
              <p>
                <strong>Recherche contrat d'apprentissage</strong> —  18 mois à partir d'octobre 2026. 
                Formation visée : CDA (Concepteur Développeur d'Applications, RNCP 6) 
                chez Simplon – 686 h en téléprésentiel. Rythme : 3 semaines en entreprise / 
                1 semaine en formation. 
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
               Disponible immédiatement pour une{" "}
                <strong>PMSMP (immersion professionnelle).</strong>
              </p>
            </div>

            <div className="block">
              <h2>Compétences techniques</h2>
              <dl className="skills-list">
                <dt>Frontend</dt>
                <dd>HTML · CSS · Responsive design · JavaScript · TypeScript · React · Context API · Hooks</dd>

                <dt>Backend</dt>
                <dd>Node.js · Express.js · MySQL · Architecture MVC · API REST · JSON</dd>

                <dt>Accessibilité &amp; Qualité</dt>
                <dd>RGAA · WCAG 2.1 · attributs ARIA · Typographie accessible</dd>

                <dt>Design &amp; Maquettage</dt>
                <dd>UI/UX design · Wireframes · Figma · Charte graphique · Adobe Suite</dd>

                <dt>Outils &amp; Méthodes</dt>
                <dd>Git · GitHub · Méthodes Agiles · Scrum · Kanban / Trello · Vercel</dd>

                <dt>CMS</dt>
                <dd>WordPress · Drupal · Joomla (projets freelance, intégration et maintenance de sites)</dd>
              </dl>
            </div>

            {/* ---- Soft skills + Projets side by side ---- */}
           
              <div className="pro-skills">
                        <h2>SOFT SKILLS &amp; COMPÉTENCES TRANSVERSALES</h2>
                        <dl className="skills-list">
                            <dt>Autonomie &amp; initiative</dt>
                            <dd>déploiement VPS en production en totale autonomie. Proposition architecturale (layouts par rôle) adoptée par l'équipe. Intégration de l'accessibilité numérique (initiative personnelle).</dd>

                            <dt>Rigueur &amp; performance</dt>
                            <dd>environnements à forte cadence, anticipation des besoins, vérification systématique, attention au détail.</dd>

                            <dt>Esprit d'équipe &amp; collaboration</dt>
                            <dd>communication proactive, transmission de connaissances, revues de code (GitHub), méthodes Agiles (Scrum, Kanban).</dd>

                            <dt>Sensibilité UX &amp; accessibilité</dt>
                            <dd>veille design, analyse de références UI/UX, conception d'interfaces inclusives, responsive design, maquettage Figma.</dd>
                        </dl>
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
