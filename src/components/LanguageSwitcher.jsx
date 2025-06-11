import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded px-3 py-1 cursor-pointer"
    >
      {i18n.language === "en" ? t("english") : t("hindi")}
    </button>
  );
}
