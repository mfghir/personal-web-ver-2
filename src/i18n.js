import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_FA } from "./locales/fa";
import { TRANSLATIONS_EN } from "./locales/en";
import { TRANSLATIONS_KO } from "./locales/ko";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      fa: {
        translation: TRANSLATIONS_FA,
      },
      ko: {
        translation: TRANSLATIONS_KO,
      },
    },
  })
  

i18n.changeLanguage("fa");

export default  i18n ;
