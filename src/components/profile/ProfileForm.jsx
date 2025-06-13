import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { uploadAvatar } from "@/src/utils";
import { useSocietyUnits } from "@/src/hooks";

import { Button, Input, Label } from "@/components/ui";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@/components/ui";
import { FormSelect } from "@/src/components";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useAvatarUrl } from "@/src/hooks";

const ProfileForm = ({ user, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    control,
  } = useForm({
    defaultValues: {
      ...user,
      society_unit_id: user?.society_unit_id?.toString() || "",
    },
  });

  const { data: avatarUrl } = useAvatarUrl(user?.avatar);
  const { data: societyUnits, isLoading, isError } = useSocietyUnits();

  const { t } = useTranslation();
  // For image preview
  const [preview, setPreview] = useState(avatarUrl || null);
  const avatarFile = watch("avatar");

  useEffect(() => {
    if (!isLoading && societyUnits.length && user?.society_unit_id) {
      setValue("society_unit_id", user.society_unit_id.toString());
    }
  }, [societyUnits, user.society_unit_id, isLoading]);

  useEffect(() => {
    if (avatarFile && avatarFile.length > 0) {
      const file = avatarFile[0];
      if (file instanceof Blob) {
        const filePath = `profile/${file.name}`;
        const data = uploadAvatar(file, filePath);

        console.log("profile update::", data);
        data.then(async (res) => {
          // const { data: bucketData } = await supabase.storage
          //   .from(config.avatarBucket)
          //   .createSignedUrl(filePath, 3600);
          // console.log();
          // const profileUrl = `${bucketData.signedUrl}`;
          // setValue({ avatar: undefined });
          setValue("bucket.avatar", filePath);
          // window.open(profileUrl, "_blank");
        });

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
      }
    } else {
      setPreview(user.avatar || null);
    }
  }, [avatarFile, user.avatar]);

  const handleFormSubmit = (data) => {
    onSubmit({ ...data, avatar: preview });
  };

  const getOptions = (item) => ({
    key: item.id,
    value: item.id.toString(),
    label: `Unit-${item.unit_number}`,
  });

  if (isLoading) return <Skeleton />;
  if (isError) return <p>Error loading units</p>;

  return (
    <div className="p-0 flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <CardHeader className="bg-gradient-to-r from-rose-300 to-pink-400 text-white rounded-t-2xl">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">
                {t("user_profile")}
              </CardTitle>
              <Button
                variant="ghost"
                className="text-white cursor-pointer mt-2"
                onClick={onCancel}
              >
                <ArrowLeft size={20} className="mr-1" /> Back
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 items-center">
                <img
                  src={preview || "/default-avatar.svg"}
                  alt="Avatar Preview"
                  className="w-24 h-24 rounded-full mb-2 object-cover mt-2"
                />
                <Input
                  type="file"
                  accept="image/*"
                  {...register("avatar")}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-0 file:px-2
                file:rounded file:border-0 file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <FormSelect
                control={control}
                name="society_unit_id"
                rules={{ required: "House Number is required" }}
                loading={isLoading}
                options={societyUnits.map(getOptions)}
                placeholder={"Select a House No."}
                disabled={true}
                label="House No."
              />

              <div className="grid gap-2">
                <Label>Phone</Label>
                <Input
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" {...register("email")} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-3">
            <Button type="submit" className="w-full">
              {t("submit")}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ProfileForm;
