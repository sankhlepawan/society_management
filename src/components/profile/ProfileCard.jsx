import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
  CardFooter,
  Skeleton,
} from "@/components/ui";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAvatarUrl, useSocietyUnitById } from "@/src/hooks";
import { formatDate } from "@/src/utils";
import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user, onEdit }) => {
  const { t } = useTranslation();
  const { data: avatarUrl } = useAvatarUrl(user?.avatar); // safe & correct
  const {
    data: unit,
    isLoading: unitLoading,
    isError,
  } = useSocietyUnitById(user?.society_unit_id);
  const [flatId, setFlatId] = useState(undefined);
  const [preview, setPreview] = useState(undefined);
  useEffect(() => {
    if (avatarUrl) setPreview(avatarUrl);
  }, [avatarUrl]);

  useEffect(() => {
    if (unit) {
      setFlatId(unit.unit_number);
    }
  }, [unit]);

  const formattedDate = useMemo(
    () => formatDate(user.created_at),
    [user.created_at],
  );

  if (unitLoading) return <Skeleton />;

  if (isError) return <p>Error loading units</p>;

  return (
    <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-gradient-to-r from-rose-300 to-pink-400 text-white rounded-t-2xl">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">
            {t("user_profile")}
          </CardTitle>
          <Button
            variant="ghost"
            asChild
            className="text-white cursor-pointer mt-2"
          >
            <Link to="/">
              <ArrowLeft size={20} className="mr-1" /> Back
            </Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={preview || "/default-avatar.png"}
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Created: {formattedDate}
            </p>
            {unitLoading ? (
              <Skeleton />
            ) : (
              <Badge variant="outline" className="mt-1 bg-blue-500 text-white">
                Unit-{flatId}
              </Badge>
            )}
          </div>
        </div>

        <div className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
          <p>
            <span className="font-medium">📞 Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-medium">📧 Email:</span> {user.email}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 mt-3">
        <Button
          onClick={onEdit}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded px-3 py-1 cursor-pointer"
        >
          {t("edit_profile")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
