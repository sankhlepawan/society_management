import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { tiles, Tile } from "../components";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        {t("dashboard")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <Tile key={tile.label} {...tile} />
        ))}
      </div>
    </div>
  );
}
