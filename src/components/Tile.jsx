import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Tile({ label, icon, path, gradient }) {
  const { t } = useTranslation();
  const translatedLabel = t(label);
  return (
    <div className="bg-gradient-to-l from-gray-200 to-gray-300 text-white flex flex-col items-center justify-center dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition w-full h-40">
      <Link
        to={path}
        title={translatedLabel}
        aria-label={translatedLabel}
        className={`bg-gradient-to-br ${gradient} text-white rounded-2xl shadow hover:shadow-xl transition-transform transform hover:scale-105 w-full h-40 flex flex-col items-center justify-center`}
      >
        <div className="text-3xl">{icon}</div>
        <div className="font-medium text-lg mt-2">{translatedLabel}</div>
      </Link>
    </div>
  );
}
