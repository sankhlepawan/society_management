import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "@/components/ui";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { LanguageSwitcher } from "@/src/components";

import { useAuth } from "@/src/context/AuthContext";

const RegisterPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup } = useAuth();

  const onSubmit = async (payload) => {
    setLoading(true);
    setAuthError(undefined);
    const { data, error } = await signup(payload);
    if (error) {
      console.error("signOut up error:", error.message);
    }
    if (data) {
      setLoading(false);
      setAuthError(error.message);
    }
  };

  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-50 -z-10"
        style={{
          backgroundImage:
            "url('http://solitairepark.com/uploads/agent/IMG-20200115-WA0021.jpg')",
        }}
      ></div>
      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>{t("society_member_registration")}</CardTitle>
            <CardAction>
              <Button variant="link">
                <Link to="/login" className="underline">
                  {t("login")}
                </Link>
              </Button>
              <LanguageSwitcher />
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>{t("full_name")}</Label>
                <Input
                  id="fullname"
                  placeholder="eg. john doe"
                  required
                  {...register("name", { required: t("name_required") })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="eg. johndoe@gmail.com"
                  required
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label>{t("house_no")}</Label>
                <Input
                  placeholder="eg. 345"
                  required
                  {...register("house_no", { required: t("flat_no_required") })}
                />
                {errors.flat && (
                  <p className="text-red-500 text-sm">{errors.flat.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t("phone_number")}</Label>
                <Input
                  placeholder="eg. 4345654567"
                  {...register("phone", {
                    required: t("phone_number_required"),
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter valid 10-digit number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-3">
            <Button type="submit" className="w-full">
              {t("submit")}{" "}
              {loading && <Loader2Icon className="animate-spin" />}
            </Button>

            {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
