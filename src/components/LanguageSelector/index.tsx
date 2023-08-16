import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import brazilFlag from "../../assets/png/brasil.png";
import usFlag from "../../assets/png/estados-unidos.png";
import "../../styles/language-selector.scss";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const languageState = localStorage.getItem("language");

    if (languageState) {
      toggleLanguage(languageState);
    }
  }, []);

  function toggleLanguage(language: string) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  return (
    <div className="language-selector">
      <button
        type="button"
        onClick={() => toggleLanguage("ptBR")}
        aria-label="Selecionar Português (BR)"
      >
        <img src={brazilFlag} alt="Bandeira do Brasil" />
      </button>
      <button
        type="button"
        onClick={() => toggleLanguage("en")}
        aria-label="Select English (US)"
      >
        <img src={usFlag} alt="Bandeira dos EUA" />
      </button>
    </div>
  );
}
