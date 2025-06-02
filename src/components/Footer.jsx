import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <p> this is footer </p>
    </footer>
  );
}
