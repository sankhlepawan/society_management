import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header({ toggleSidebar }) {
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="md:hidden">
        ☰
      </button>
      <nav className="m-4">
        <Link to="/">{t("home")}</Link>&nbsp;|&nbsp;
        <Link to="/login">{t("login")}</Link>&nbsp;|&nbsp;
        <Link to="/request">{t("request")}</Link>
      </nav>

      <div className="flex space-x-4 items-center">
        <LanguageSwitcher />
        <DarkModeToggle />
      </div>
    </header>
  );
}
