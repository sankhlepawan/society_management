import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { t } = useTranslation();

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Close the sidebar
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-50`}
      >
        <div
          className="p-4  flex justify-between items-center"
          ref={sidebarRef}
        >
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            {t("app_name")}
          </span>
          <button className="md:hidden" onClick={toggleSidebar}>
            <X className="text-black dark:text-white" />
          </button>
        </div>
        <nav className="p-4 space-y-3 space-x-3 text-gray-700 dark:text-gray-200">
          <Link to="/" className="block hover:text-blue-500 border-b">
            {t("home")}
          </Link>
          <Link
            to="/maintenance"
            className="block hover:text-blue-500 border-b"
          >
            {t("maintenance")}
          </Link>
          <Link to="/emergency" className="block hover:text-blue-500 border-b">
            {t("emergency")}
          </Link>
          <Link
            to="/noticeboard"
            className="block hover:text-blue-500 border-b "
          >
            {t("noticeboard")}
          </Link>
          <Link to="/bills" className="block hover:text-blue-500 border-b">
            {t("bills")}
          </Link>
          <Link to="/profile" className="block hover:text-blue-500 border-b">
            {t("profile")}
          </Link>
          <Link
            to="/maintenance"
            className="block hover:text-blue-500 border-b"
          >
            {t("maintenance")}
          </Link>

          {user && (
            <button
              onClick={handleLogout}
              className="cursor-pointer block hover:text-blue-500"
            >
              {t("logout")}
            </button>
          )}
        </nav>
      </aside>
    </>
  );
}
