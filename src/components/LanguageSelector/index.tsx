import { useTranslation } from "react-i18next";

import brazilFlag from "../../assets/png/brasil.png";
import usFlag from "../../assets/png/estados-unidos.png";
import "../../styles/language-selector.scss";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  function toggleLanguage(language: string) {
    const languageState = localStorage.getItem("language");

    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  return (
    <div className="language-selector">
      <button type="button" onClick={() => toggleLanguage("ptBR")}>
        <img src={brazilFlag} alt="Bandeira do Brasil" />
      </button>
      <button type="button" onClick={() => toggleLanguage("en")}>
        <img src={usFlag} alt="Bandeira dos EUA" />
      </button>
    </div>
  );
}
