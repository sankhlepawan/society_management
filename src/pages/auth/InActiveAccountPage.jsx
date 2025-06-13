import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/src/context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

const InActiveAccountPage = () => {
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
        <CardHeader>
          <CardTitle>{t("inactive_account")} !!</CardTitle>
          {/* <CardDescription>{t("inactive_message")}</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <p>{t("inactive_message")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InActiveAccountPage;
