import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ResidentTable = ({ residents }) => {
  const { t } = useTranslation();
  return (
    <Table>
      <TableCaption>All Residents list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{t("name")}</TableHead>
          <TableHead>{t("flat")}</TableHead>
          <TableHead>{t("contact")}</TableHead>
          <TableHead>{t("type")}</TableHead>
          <TableHead>{t("status")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {residents.map((resident) => (
          <TableRow key={resident.id}>
            <TableCell>{resident.name}</TableCell>
            <TableCell>{resident.flat}</TableCell>
            <TableCell>{resident.contact}</TableCell>
            <TableCell>{resident.type}</TableCell>
            <TableCell>{resident.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};
export default ResidentTable;
