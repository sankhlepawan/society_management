import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tile } from "../components";
import { getMenu } from "@/src/utils";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const { t } = useTranslation();
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        {t("dashboard")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menus && menus.map((tile) => <Tile key={tile.label} {...tile} />)}
      </div>
    </div>
  );
}
