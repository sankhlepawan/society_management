import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Tile({
  label,
  icon,
  path,
}: {
  label: string;
  icon: React.ReactNode;
  path: string;
}) {
  const { t } = useTranslation();
  return (
    <Link
      to={path}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition w-full h-40"
    >
      {icon}
      <span className="text-gray-700 dark:text-white font-medium text-lg mt-2">
        {t(label)}
      </span>
    </Link>
  );
}
