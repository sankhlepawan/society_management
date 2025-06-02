import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { t } = useTranslation();
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:translate-x-0 z-50`}
    >
      <div className="p-4  flex justify-between items-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          {t("app_name")}
        </span>
        <button className="md:hidden" onClick={toggleSidebar}>
          ✕
        </button>
      </div>
      <nav className="p-4 space-y-3 space-x-3 text-gray-700 dark:text-gray-200">
        <Link to="/" className="block hover:text-blue-500">
          {t("home")}
        </Link>
        <Link to="/request" className="block hover:text-blue-500">
          {t("request")}
        </Link>
        <Link to="/login" className="block hover:text-blue-500">
          {t("login")}
        </Link>
      </nav>
    </aside>
  );
}
