import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import ptBR from "./translations/ptBR.json";

const i18nConfig = {
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    ptBR: ptBR,
  },
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
