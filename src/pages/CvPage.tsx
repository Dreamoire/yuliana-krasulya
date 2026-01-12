// src/pages/CvPage.tsx
import "../styles/CvPage.css";
import photo from "../assets/images/yuliana-krasulya.jpg";
import pdfUrl from "./CV-Yuliana Krasulya.pdf";

export default function CvPage() {
  return (
    <main className="cv" aria-label="CV">
      <div className="page">
        <div className="layout">
          {/* ================= LEFT COLUMN (IDENTITY + CONTACT) ================= */}
          <aside aria-label="Informations">
            <div className="id" aria-label="Identité">
              <img src={photo} alt="Photo de Yuliana Krasulya" />
              <div>
                <h1>Yuliana Krasulya</h1>
                <p className="role">
                  DÉVELOPPEUSE WEB FRONT-END / FULL STACK – ALTERNANCE (React / Node.js)
                </p>
              </div>
            </div>

            <div className="line" aria-hidden="true" />

            <div className="aside-block contact">
              <h2>Contact</h2>

              <p>Mobilité : Paris, Juvisy-sur-Orge</p>

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
                <a href="https://www.dreamoire.fr" target="_blank" rel="noreferrer">
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

              <a className="pdfBtn" href={pdfUrl} download>
                CV en PDF
              </a>
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <section aria-label="Contenu principal">
            <div className="intro">
              <h2>Profil</h2>
              <p className="introText">
                Développeuse Web Full Stack en reconversion, issue du design graphique
                et de l’UI/UX, en formation à la Wild Code School. Je me forme
                activement en React, JavaScript et Node.js, et j’inscris
                l’accessibilité numérique comme un objectif prioritaire de ma
                pratique.
                <br />
                Objectif : alternance CDA (RNCP 6) au sein d’une équipe agile
                orientée qualité et collaboration.
              </p>
            </div>

            <div className="block">
              <h2>Compétences techniques</h2>

              <table className="skills-table" aria-label="Tableau des compétences">
                <thead>
                  <tr>
                    <th>Frontend</th>
                    <th>Backend</th>
                    <th>APIs & Données</th>
                    <th>Design & Maquettage</th>
                    <th>Outils & Méthodes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsive design</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Context API</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>API REST</li>
                        <li>Web services REST</li>
                        <li>JSON</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>UI/UX design</li>
                        <li>Wireframes</li>
                        <li>Web design</li>
                        <li>Figma</li>
                        <li>Adobe Suite</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Méthodes Agiles</li>
                        <li>Scrum</li>
                        <li>Trello</li>
                        <li>Vercel</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="two">
              <div className="block">
                <h2>Projets réalisés</h2>
                <p>
                  Développement de projets individuels et collaboratifs,
                  intégration d’APIs, interfaces dynamiques, gestion d’état,
                  organisation du code, travail en équipe agile.
                </p>
              </div>

              <div className="block pro-skills">
                <h2>Compétences professionnelles</h2>
                <ul>
                  <li>Autonomie</li>
                  <li>Curiosité technique</li>
                  <li>Esprit d’équipe</li>
                  <li>Analyse des besoins</li>
                  <li>Rigueur opérationnelle</li>
                  <li>Créativité UX/UI</li>
                  <li>Orientation résultats</li>
                </ul>
              </div>
            </div>

            <div className="block">
              <h2>Formation</h2>
              <div className="rows">
                <p>
                  <span className="meta">
                    2025 – 2026 • Wild Code School – Développeur Web
                  </span>
                  <br />
                  Titre RNCP niveau 5 – Développeur Web et Web Mobile
                </p>

                <p>
                  <span className="meta">
                    À partir de mars 2026 (prévue) • CDA – Alternance
                  </span>
                  <br />
                  Titre RNCP niveau 6 – CDA (18 mois)
                </p>

                <p>
                  <span className="meta">
                    2020 – 2023 • EDAA – Formation en graphisme
                  </span>
                </p>

                <p>
                  <span className="meta">
                    1990 – 1994 • Beaux-Arts – Russie
                  </span>
                </p>

                <p>
                  <span className="meta">
                    2000 • Formation Adobe Suite – Russie
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* ================= SECONDARY (BOTTOM ON MOBILE) ================= */}
          <section className="secondary" aria-label="Informations complémentaires">
            <div>
              <h2>Parcours pro</h2>
              <ul className="split">
                <li>
                  <strong>2006 – 2019 • Freelance artistique</strong>
                  <p>Peinture, design visuel, illustration</p>
                </li>
                <li>
                  <strong>
                    2019 – 2025 • Expérience polyvalente hors domaine IT
                  </strong>
                  <p>Grande distribution et restauration rapide</p>
                </li>
              </ul>
            </div>

            <div>
              <h2>Langues</h2>
              <ul className="dots">
                <li>Français</li>
                <li>Russe</li>
                <li>Anglais (intermédiaire)</li>
              </ul>
            </div>

            <div>
              <h2>Centres d’intérêt</h2>
              <ul className="dots">
                <li>Art, design graphique, illustration</li>
                <li>UI/UX et créativité numérique</li>
                <li>Photographie</li>
                <li>IA générative</li>
                <li>Veille technologique</li>
                <li>Psychologie</li>
              </ul>
            </div>

            <p className="small rqth">
              Bénéficiaire de la RQTH (sans nécessité d’accompagnement ou
              d’aménagement).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
