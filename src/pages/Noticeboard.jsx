import { notices } from "@/data/notices";

export default function Noticeboard() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          📌 Noticeboard
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Stay updated with the latest announcements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              {notice.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {new Date(notice.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
