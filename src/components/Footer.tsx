// src/components/Footer.tsx
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Pied de page">
      <div className="footer__inner">
        <div className="footer__grid">
          <section className="footer__about" aria-label="À propos">
            <h2 className="footer__title">Pourquoi Dreamoire?</h2>
            <p className="footer__text">
              Puisque mon prénom et mon nom, Yuliana Krasulya, sont trop peu pratiques à prononcer
              pour beaucoup de Français, j’ai choisi un pseudo pour plus de simplicité. J’ai pris
              <strong> dreamoire</strong>, parce que <em>dream</em> / “rêve” est probablement le mot
              clé qui résume le mieux ce qui me motive.
              <br />
              <br />
              J’ai des rêves. J’ose rêver de ce qui semble impossible. Je découpe “l’impossible” en
              petits fragments — et ce n’est plus un rêve lointain, mais un objectif concret, avec
              un plan d’action étape par étape.
            </p>
          </section>

          <div className="footer__divider" aria-hidden="true" />

          <nav className="footer__links" aria-label="Liens">
            <h2 className="footer__title">Liens</h2>

            <ul className="footer__list">
              <li>
                <a
                  className="footer__link"
                  href="https://www.linkedin.com/in/yuliana-krasulya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href="https://github.com/Dreamoire"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href="https://www.instagram.com/juliana_karandache"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href="https://www.tiktok.com/@vostokexpress"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="footer__fineprint">
          ©2025 Dreamoire — Yuliana Krasulya
        </p>
      </div>
    </footer>
  );
}
