import GraphicsCarousel from "../components/GraphicsCarousel";
import ArticlePreviewCard from "../components/ArticlePreviewCard";
import ProjectCarousel from "../components/ProjectCarousel";
import yuyuPhoto from "../assets/images/yuyu.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page page-container">
            <section className="intro">
                    <img
          src={yuyuPhoto}
          alt="Portrait de Yuliana Krasulya, développeuse front-end React"
          className="intro-photo"
        />
        <div className="intro-text"> 
        <h1>Développeur web <br/> front-end / full stack (en formation)</h1>

        <p>
          Issu d’un parcours en création visuelle, je mets aujourd’hui mon sens du design, 
          de la précision et du détail au service du développement web. <br/>
          En formation à la Wild Code School, je développe des applications web en JavaScript, React et TypeScript, 
          en appliquant des méthodes professionnelles basées sur les pratiques Agile et Scrum. <br/>
          Je construis un parcours professionnel durable, en mettant l’accent sur la qualité du code, 
          la fiabilité et la collaboration en équipe.
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
  );
}

export default Home;
