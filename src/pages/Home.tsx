import GraphicsCarousel from "../components/GraphicsCarousel";
import ArticlePreviewCard from "../components/ArticlePreviewCard";
import ProjectCarousel from "../components/ProjectCarousel";

import yuyuPhoto from "../assets/images/yuyu.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <main className="home-page page-container">
        <section className="intro">
          <img
            src={yuyuPhoto}
            alt="Portrait de Yuliana Krasulya, développeuse full stack React"
            className="intro-photo"
          />

          <div className="intro-text">
            <h1>Développeuse Full Stack · React · TypeScript · Node.js</h1>

            <p>
              Avant le code, il y a eu le design graphique, les arts visuels et la composition d'image.
              Des années à travailler les maquettes, la hiérarchie visuelle, l'équilibre des espaces — une culture qui
              a posé les fondations de ce que je fais aujourd'hui, pas une parenthèse refermée à l'entrée du code.
            </p>
            <p>
              Je développe des applications full stack React / TypeScript / Node.js avec une approche où architecture
              technique, expérience utilisateur et qualité d'interface ne sont jamais pensées séparément.
              Les outils changent ; l'exigence du travail bien fait, elle, ne varie pas. Diplômée DWWM RNCP 5,
              avec un projet applicatif bâti et déployé en production sur VPS OVHcloud.
            </p>
            <p>
              Ce qui m'intéresse particulièrement : concevoir des applications modernes comme on conçoit une architecture —
              là où les décisions techniques et les intentions produit se croisent.
              Ma culture design me permet de collaborer naturellement avec les équipes UX/UI, de lire une maquette sans friction
              de traduction et de produire des interfaces cohérentes — des édifices où chaque élément tient sa place et justifie sa présence.
            </p>
            <p>
              L'accessibilité numérique est la pierre angulaire de ma manière de développer :
              HTML5 sémantique, RGAA, WCAG 2.1, ARIA, lisibilité, hiérarchie typographique, responsive design.
              Ces éléments sont souvent invisibles lorsqu'ils sont bien faits — et immédiatement perceptibles lorsqu'ils ne le sont pas.
              Malentendante, j'ai développé une acuité visuelle que je considère aujourd'hui comme une compétence technique à part entière —
              ce n'est pas anodin dans un métier où la qualité d'une interface se joue souvent dans les détails.
            </p>
            <p>
              Je continue à nourrir cette double culture au quotidien : veille
              UI/UX, analyse d’interfaces, pratiques front-end modernes,
              développement full stack. C’est ce croisement entre sensibilité
              produit, qualité visuelle et compétences techniques concrètes que
              j’apporte à une équipe qui prend au sérieux la qualité des
              interfaces qu’elle livre.
            </p>
          </div>
        </section>

        <section className="section home-section">
          <h2 className="section-title">Projets</h2>
          <ProjectCarousel />
        </section>

        <section className="section home-section">
          <h2 className="section-title">Derniers articles</h2>
          <ArticlePreviewCard />
        </section>

        <section className="section home-section">
          <h2 className="section-title">Créations visuelles</h2>
          <GraphicsCarousel />
        </section>
      </main>

   
    </>
  );
}

export default Home;
