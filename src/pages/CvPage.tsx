// src/pages/CvPage.tsx
import photo from "../assets/images/yuliana-krasulya.jpg";
import "../styles/CvPage.css";

export default function CvPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="cv-page">
      <div className="cv-page__wrapper">
        <header className="cv-header">
          <div className="cv-header__top">
            <section className="cv-header__titles">
              <h1 className="cv-title">Yuliana Krasulya</h1>
              <h2 className="cv-job"> DÉVELOPPEUR WEB FULL STACK – ALTERNANCE (React / Node.js) </h2>
            </section>
          </div>

          <address className="cv-contact">
            <div className="cv-contact__text">
              <img
                className="cv-contact__photo"
                src={photo}
                alt="Photo de Yuliana Krasulya"
              />

              <p>Mobilité : Paris, Juvisy-sur-Orge</p>
              <p>
                Tél. : <span className="cv-phone-strong">07 68 91 45 77</span>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:krasulyayuliana@gmail.com">
                  krasulyayuliana@gmail.com
                </a>
              </p>
              <p>
                Portfolio en ligne: {" "}
                                <a
                  href="https://www.dreamoire.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  dreamoire.fr
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/yuliana-krasulya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  yuliana-krasulya
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Dreamoire/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dreamoire
                </a>
              </p>

              <button
                className="cv-download-btn"
                type="button"
                onClick={handlePrint}
              >
                CV en PDF
              </button>
            </div>
          </address>

          <section className="cv-profile">
            <p>
             Développeuse Web Full Stack en reconversion, issue du design graphique 
             et de l’UI/UX, en formation à la Wild Code School.
            Je me forme activement en React, JavaScript et Node.js, et j’inscris 
            l’accessibilité numérique comme un objectif prioritaire de ma pratique, 
            sans compromis sur la qualité ni sur la compréhension des usages réels.
              <br/>
             Objectif : alternance CDA (RNCP 6) à partir de mars 2026, au sein d’une 
             équipe agile orientée qualité et collaboration.
              <br />
              Bénéficiaire de la RQTH (sans nécessité d’accompagnement ou d’aménagement).

            </p>
          </section>
        </header>
        <div className="cv-layout">
          <aside className="cv-sidebar">
            <section className="cv-education">
              <h2 className="cv-section-title">Formation</h2>

              <article>
                <h3 className="cv-sub-title">
                  2025 – 2026 • Wild Code School – Développeur Web
                </h3>
                <p>Titre RNCP niveau 5 (Bac+2) en cours, Développeur 
                  Web et Web Mobile (Full Stack, React/Node.js).  
                  </p>
              </article>

              <article>
                <h3 className="cv-sub-title">À partir de mars 2026 (prévue) • CDA – Alternance</h3>
                <p> CDA: Titre RNCP niveau 6 (Bac+3/4) CDA - Alternance 18 mois </p>
              </article>

              <article>
                <h3 className="cv-sub-title">2020 – 2023 • EDAA – Formation en graphisme</h3>
                <p>Design visuel, mise en page, retouche, composition.</p>
              </article>

              <article>
                <h3 className="cv-sub-title">1990 – 1994 • Beaux-Arts – Russie</h3>
              </article>

              <article>
                <h3 className="cv-sub-title">2000 • Formation Adobe Suite – Russie</h3>
              </article>
            </section>

            <section className="cv-interests">
              <h2 className="cv-section-title">Centres d’intérêt</h2>
              <ul className="cv-list">
                <li>Art, design graphique, illustration</li>
                <li>UI/UX et créativité numérique</li>
                <li>Photographie</li>
                <li>IA générative</li>
                <li>Veille technologique</li>
                <li>Psychologie</li>
              </ul>
            </section>

            <section className="cv-languages">
              <h2 className="cv-section-title">Langues</h2>
              <ul className="cv-list">
                <li>Français</li>
                <li>Russe</li>
                <li>Anglais (intermédiaire)</li>
              </ul>
            </section>
          </aside>

          <section className="cv-skills" aria-labelledby="cv-skills-title">
  <h2 id="cv-skills-title" className="cv-section-title">
    Compétences techniques
  </h2>

  <div className="cv-tech-table-wrapper" role="region" aria-label="Tableau des compétences techniques">
    <table className="cv-tech-table">

      <tbody>
        <tr>
          <th scope="row">Frontend</th>
          <td>
            <ul className="cv-skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive design</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Hooks</li>
              <li>Context API</li>
            </ul>
          </td>
        </tr>

        <tr>
          <th scope="row">Backend</th>
          <td>
            <ul className="cv-skill-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
            </ul>
          </td>
        </tr>

        <tr>
          <th scope="row">APIs &amp; Données</th>
          <td>
            <ul className="cv-skill-list">
              <li>API REST</li>
              <li>Web services REST</li>
              <li>JSON</li>
            </ul>
          </td>
        </tr>

        <tr>
          <th scope="row">Design &amp; Maquettage</th>
          <td>
            <ul className="cv-skill-list">
              <li>UI/UX design</li>
              <li>Wireframes</li>
              <li>Web design</li>
              <li>Figma</li>
              <li>Adobe Suite</li>
            </ul>
          </td>
        </tr>

        <tr>
          <th scope="row">Outils &amp; Méthodes</th>
          <td>
            <ul className="cv-skill-list">
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

  <section className="cv-projects" aria-labelledby="cv-projects-title">
    <h2 id="cv-projects-title" className="cv-section-title">
      Projets réalisés
    </h2>
    <p>
      Développement de projets individuels (solo rush) et collaboratifs, allant de pages
      HTML/CSS simples à des applications web complètes en React. Intégration d’APIs externes,
      développement d’interfaces dynamiques, gestion d’état, organisation du code, mise en place
      d’algorithmes simples, maquettes Figma et collaboration en équipe selon les méthodes agiles.
    </p>
  </section>


  <section className="cv-experience">
    <h2 className="cv-section-title">EXPÉRIENCES PROFESSIONNELLES <br/> (IT et TRANSVERSALES)</h2>

      <article>
        <h3 className="cv-sub-title">2006 – 2019 • Freelance artistique</h3>
          <p>Peinture, design visuel, illustration</p>

                <h3 className="cv-sub-title">2019 – 2025 • Expérience polyvalente hors domaine IT</h3>
                <p>Grande distribution et restauration rapide.</p>
              </article>
            </section>

            <section className="cv-softskills">
              <h2 className="cv-section-title">Compétences professionnelles</h2>

              <ul className="cv-skills-list">
                <li>Autonomie,</li>
                <li>Curiosité technique,</li>
                <li>Esprit d’équipe,</li>
                <li>Analyse des besoins (UX),</li>
                <li>Rigueur opérationnelle,</li>  
                <li>Créativité UX/UI,</li>                           
                <li>Orientation résultats</li>                
              </ul>
             
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}


