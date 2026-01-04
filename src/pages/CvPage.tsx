// src/pages/CvPage.tsx
import photo from "../assets/images/yuliana-krasulya.jpg";
import pdfUrl from "./CV-Yuliana Krasulya.pdf";

const styles = `
.cv{
  --bg:#f2f2f2;
  --paper:#ffffff;
  --ink:#111111;
  --text:#2f3740;
  --line:#cfd3d8;
  --black:#000000;
  --charcoal:#0b0b0c;
  --orange:#ff7900;

  background:var(--bg);
  color:var(--ink);
  font-family:Arial, Helvetica, sans-serif;
  font-size:12px;
  line-height:1.45;
}

.cv *{box-sizing:border-box}

.cv .page{
  width:210mm;
  min-height:297mm;
  margin:0 auto;
  background:var(--paper);
}

.cv .layout{
  min-height:297mm;
  display:grid;
  grid-template-columns:72mm 1fr;
}

/* LEFT */
.cv aside{
  background:linear-gradient(180deg, var(--charcoal), var(--black));
  color:#fff;
  padding:12mm 10mm;
  display:flex;
  flex-direction:column;
  gap:9mm;
}

.cv .id{
  display:grid;
  grid-template-columns:16mm 1fr;
  gap:6mm;
  align-items:center;
}

.cv img{
  width:16mm;
  height:16mm;
  border-radius:999px;
  object-fit:cover;
  border:2px solid rgba(255,255,255,.25);
}

.cv h1{
  margin:0;
  font-size:21px;
  font-weight:800;
  line-height:1.05;
  color:var(--orange);
}

.cv h2{
  margin:0 0 6px;
  font-size:16px;
  font-weight:800;
  color:var(--orange);
}

.cv .role{
  margin:6px 0 0;
  font-weight:700;
  color:rgba(255,255,255,.9);
}

.cv .line{
  height:2px;
  width:100%;
  background:var(--orange);
}

.cv aside p{
  margin:0;
  color:rgba(255,255,255,.88);
}

.cv aside a{
  color:rgba(255,255,255,.92);
  text-decoration:none;
  border-bottom:1px solid rgba(255,255,255,.25);
}

.cv ul{
  margin:0;
  padding:0;
  list-style:none;
}

.cv .dots li{
  padding-left:10px;
  position:relative;
  color:rgba(255,255,255,.88);
}

.cv .dots li + li{margin-top:4px}

.cv .dots li::before{
  content:"•";
  position:absolute;
  left:0;
  color:var(--orange);
  font-weight:700;
}

.cv .split li + li{
  margin-top:8px;
  padding-top:8px;
  border-top:1px solid rgba(255,255,255,.12);
}

.cv .small{color:rgba(255,255,255,.82)}

.cv .pdfBtn{
  display:inline-block;
  margin-top:8px;
  padding:8px 10px;
  border:1px solid rgba(255,121,0,.55);
  color:#fff;
  text-decoration:none;
  font-weight:800;
  letter-spacing:0;
}

.cv .pdfBtn:hover{
  background:rgba(255,121,0,.15);
}

/* RIGHT */
.cv section{
  padding:10mm 8mm 8mm;
  display:flex;
  flex-direction:column;
  gap:7mm;
}

.cv section p{
  margin:0;
  color:var(--text);
  font-size:13px;
  line-height:1.6;
}

.cv .block{
  border:2px solid var(--line);
  padding:9px 11px;
  background:#fff;
}

.cv .two{
  display:grid;
  grid-template-columns:1.35fr .65fr;
  gap:8px;
}

.cv .pro-skills ul{
  margin:0;
  padding:0;
  list-style:none;
}

.cv .pro-skills li{
  position:relative;
  padding-left:10px;
  font-size:13px;
  line-height:1.4;
  color:var(--text);
}

.cv .pro-skills li + li{margin-top:4px}

.cv .pro-skills li::before{
  content:"•";
  position:absolute;
  left:0;
  color:var(--orange);
  font-weight:700;
}

.cv .skills-table{
  width:100%;
  border-collapse:collapse;
  table-layout:fixed;
}

.cv .skills-table th,
.cv .skills-table td{
  border:1px solid var(--line);
  vertical-align:top;
  padding:8px;
}

.cv .skills-table th{
  text-align:left;
  font-size:12px;
  font-weight:800;
  color:var(--ink);
}

.cv .skills-table ul{
  margin:0;
  padding:0;
  list-style:none;
}

.cv .skills-table li{
  margin:0;
  color:var(--text);
  font-size:12px;
  line-height:1.35;
}

.cv .skills-table li + li{margin-top:4px}

.cv .rows p + p{
  margin-top:8px;
  padding-top:8px;
  border-top:1px solid var(--line);
}

.cv .intro{
  position:relative;
  padding:0;
  display:block;
}

.cv .intro::before{
  content:"";
  position:absolute;
  left:-12px;
  top:0;
  bottom:0;
  width:4px;
  background:var(--orange);
}

.cv .intro h2{margin:0 0 6px}
.cv .intro p{margin:0}

.cv .meta{
  color:var(--ink);
  font-weight:800;
  font-size:12px;
}
`;

export default function CvPage() {
  return (
    <main className="cv" aria-label="CV">
      <style>{styles}</style>

      <div className="page">
        <div className="layout">
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

            <div>
              <h2>Contact</h2>
              <p>Mobilité: Paris, Juvisy-sur-Orge</p>
              <p>
                Tél. : <strong>07 68 91 45 77</strong>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:krasulyayuliana@gmail.com">krasulyayuliana@gmail.com</a>
              </p>
              <p>
                Portfolio :{" "}
                <a href="https://www.dreamoire.fr/" target="_blank" rel="noreferrer">
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
                <a href="https://github.com/Dreamoire/" target="_blank" rel="noreferrer">
                  Dreamoire
                </a>
              </p>

              <a className="pdfBtn" href={pdfUrl} download>
                CV en PDF
              </a>
            </div>

            <div>
              <h2>Parcours pro</h2>
              <ul className="split">
                <li>
                  <p>
                    <strong>2006 – 2019 • Freelance artistique</strong>
                  </p>
                  <p>Peinture, design visuel, illustration</p>
                </li>
                <li>
                  <p>
                    <strong>2019 – 2025 • Expérience polyvalente hors domaine IT</strong>
                  </p>
                  <p>Grande distribution et restauration rapide.</p>
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

            <p className="small">
              Bénéficiaire de la RQTH (sans nécessité d’accompagnement ou d’aménagement).
            </p>
          </aside>

          <section aria-label="Contenu principal">
            <div className="intro">
              <h2>Profil</h2>
              <p style={{ color: "var(--ink)" }}>
                Développeuse Web Full Stack en reconversion, issue du design graphique et de l’UI/UX,
                en formation à la Wild Code School. Je me forme activement en React, JavaScript et
                Node.js, et j’inscris l’accessibilité numérique comme un objectif prioritaire de ma
                pratique.
                <br />
                Objectif : alternance CDA (RNCP 6) au sein d’une équipe agile orientée qualité et
                collaboration.
              </p>
            </div>

            <div className="block">
              <h2>Compétences techniques</h2>

              <table className="skills-table" aria-label="Tableau des compétences">
                <thead>
                  <tr>
                    <th>Frontend</th>
                    <th>Backend</th>
                    <th>APIs &amp; Données</th>
                    <th>Design &amp; Maquettage</th>
                    <th>Outils &amp; Méthodes</th>
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
                  Développement de projets individuels (solo rush) et collaboratifs, allant de pages
                  HTML/CSS simples à des applications web complètes en React. Intégration d’APIs
                  externes, développement d’interfaces dynamiques, gestion d’état, organisation du
                  code, mise en place d’algorithmes simples, maquettes Figma et collaboration en
                  équipe selon les méthodes agiles.
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
                  <span className="meta">2025 – 2026 • Wild Code School – Développeur Web</span>
                  <br />
                  Titre RNCP niveau 5 (Bac+2) en cours, Développeur Web et Web Mobile (Full Stack,
                  React/Node.js).
                </p>
                <p>
                  <span className="meta">À partir de mars 2026 (prévue) • CDA – Alternance</span>
                  <br />
                  CDA: Titre RNCP niveau 6 (Bac+3/4) CDA - Alternance 18 mois
                </p>
                <p>
                  <span className="meta">2020 – 2023 • EDAA – Formation en graphisme</span>
                  <br />
                  Design visuel, mise en page, retouche, composition.
                </p>
                <p>
                  <span className="meta">1990 – 1994 • Beaux-Arts – Russie</span>
                </p>
                <p>
                  <span className="meta">2000 • Formation Adobe Suite – Russie</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
