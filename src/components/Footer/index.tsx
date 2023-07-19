import "../../styles/footer.scss";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="credits">
          <ul>
            <li>
              <a
                href="https://www.flaticon.com/br/icones-gratis/brasil"
                title="brasil ícones"
                target="_blank"
              >
                Brasil ícones criados por Freepik - Flaticon
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/br/icones-gratis/estados-unidos"
                title="estados unidos ícones"
                target="_blank"
              >
                Estados unidos ícones criados por Freepik - Flaticon
              </a>
            </li>
            <li>
              Imagem de{" "}
              <a
                href="https://pixabay.com/pt/users/artapixel-8829724/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5848267"
                target="_blank"
              >
                Artapixel
              </a>{" "}
              por{" "}
              <a
                href="https://pixabay.com/pt//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5848267"
                target="_blank"
              >
                Pixabay
              </a>
            </li>
          </ul>
        </div>
        <div className="copy">
          <p>&copy; 2023 Arthur Rodigues. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
