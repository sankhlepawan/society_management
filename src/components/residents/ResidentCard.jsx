import { useTranslation } from "react-i18next";

const ResidentCard = ({ residents }) => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4">
      {residents.map((res) => (
        <div key={res.id} className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold">{res.name}</h3>
          <p>
            {t("flat")}: {res.flat}
          </p>
          <p>
            {t("contact")}: {res.contact}
          </p>
          <p>
            {t("type")}: {res.type}
          </p>
          <p>
            {t("status")}: {res.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResidentCard;
