import i18n from "i18next";
import enLocale from "../locale/en.json";
import faLocale from "../locale/fa.json";

import { initReactI18next, useTranslation } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enLocale },
    fa: { ...faLocale },
  }, // Where we're gonna put translations' files
  lng: "en", // Set the initial language of the App
});
