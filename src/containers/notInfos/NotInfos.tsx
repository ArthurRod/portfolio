import "./not-infos.scss";

export function NotInfos() {
  return (
    <section
      id="not-infos"
      className="not-infos"
      aria-label="Seção sem informações"
    >
      <div className="container">
        <div className="section-title" aria-label="Título da Seção not infos">
          <h2>No information was found</h2>
        </div>
      </div>
    </section>
  );
}
