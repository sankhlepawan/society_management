import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Home",
      login: "Login",
      home: "Home",
      english: "English",
      hindi: "हिन्दी",
      rais_a_request: "Raise a Request",
      request: "Request",
      app_name: "Solitaire Park",
      residents: "Residents",
      noticeboard: "Noticeboard",
      bill: "Bill",
      helpdesk: "Helpdesk",
      emergency: "Emergency No's",
      profile: "Profile",
    },
  },
  hi: {
    translation: {
      welcome: "होम पर आपका स्वागत है",
      login: "लॉगिन",
      home: "होम",
      english: "अंग्रेज़ी",
      hindi: "हिन्दी",
      rais_a_request: "अनुरोध बनाएं",
      request: "अनुरोध",
      app_name: "सॉलिटेयर पार्क",
      residents: "निवासी",
      noticeboard: "सूचना पट्ट",
      bill: "बिल",
      helpdesk: "सहायता केंद्र",
      emergency: "आपातकाल संपर्क",
      profile: "प्रोफ़ाइल",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
