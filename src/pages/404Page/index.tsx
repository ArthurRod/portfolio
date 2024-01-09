import { AsideNavigatorMenu, Footer } from "../../components";

import "./not-found.scss";

export function NotFoundPage() {
  return (
    <>
      <AsideNavigatorMenu />
      <main className="404-page">
        <section id="not-found" className="not-found" aria-label="Seção 404">
          <div className="container">
            <div
              className="section-title"
              aria-label="Título da Seção de Contato"
            >
              <h2>404</h2>
            </div>
            <p>The page you were looking for does not exist</p>
            <a role="button" className="btn back-home-btn" href="/">
              Go home
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
