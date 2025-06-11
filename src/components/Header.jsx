import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import React from "react";
import { useAuth } from "@/src/context";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui";

export default function Header({ toggleSidebar }) {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
        <Menu className="text-black dark:text-white" />
      </button>
      {/* <nav className="m-4">
        <Link to="/">{t("home")}</Link>&nbsp;|&nbsp;
        <Link to="/login">{t("login")}</Link>&nbsp;|&nbsp;
        <Link to="/request">{t("request")}</Link>
      </nav> */}
      <div></div>

      <div className="flex space-x-4 items-center">
        <div className="hidden sm:block mr-1 px-3 py-1 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          {user.email}
        </div>
        <LanguageSwitcher />
        {/* <DarkModeToggle /> */}
        {user && (
          <Button
            onClick={handleLogout}
            className="cursor-pointer text-white rounded px-3 py-1"
          >
            {t("logout")}
          </Button>
        )}
      </div>
    </header>
  );
}
