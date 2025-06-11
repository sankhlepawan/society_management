import { useTranslation } from "react-i18next";

const ResidentTable = ({ residents }) => {
  const { t } = useTranslation();
  return (
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">{t("name")}</th>
          <th className="p-2 text-left">{t("flat")}</th>
          <th className="p-2 text-left">{t("contact")}</th>
          <th className="p-2 text-left">{t("type")}</th>
          <th className="p-2 text-left">{t("status")}</th>
        </tr>
      </thead>
      <tbody>
        {residents.map((res) => (
          <tr key={res.id} className="border-t">
            <td className="p-2">{res.name}</td>
            <td className="p-2">{res.flat}</td>
            <td className="p-2">{res.contact}</td>
            <td className="p-2">{res.type}</td>
            <td className="p-2">{res.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ResidentTable;
