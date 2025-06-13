import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { X, House } from "lucide-react";
import { useState } from "react";
import { getMenu } from "../utils";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { t } = useTranslation();

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchMenus = async () => {
      const data = await getMenu();
      setMenus(data);
      if (isMounted) setMenus(data);
    };
    fetchMenus();

    return () => {
      isMounted = false;
    };
  }, []);

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
          <Link to="/" className="md:hidden">
            <House className="text-blue-400" />
          </Link>
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            {t("app_name")}
          </span>

          <button className="md:hidden" onClick={toggleSidebar}>
            <X className="text-black dark:text-white" />
          </button>
        </div>
        <nav className="p-4 space-y-3 space-x-3 text-gray-700 dark:text-gray-200">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="block hover:text-blue-500 border-b"
            >
              {t(menu.label)}
            </Link>
          ))}

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
