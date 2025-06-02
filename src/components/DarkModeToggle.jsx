import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    window.document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-200 dark:bg-gray-700 rounded px-3 py-1"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
