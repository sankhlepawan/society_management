import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/src/context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Input, Label } from "@/components/ui";
import { Loader2Icon, Undo } from "lucide-react";
import { LanguageSwitcher } from "@/src/components";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { supabase } from "@/src/utils";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState(undefined);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { t } = useTranslation();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN") {
        navigate(from, { replace: true });
      }
    });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setAuthError(undefined);
    const result = await login(data.username, data.password);
    setAuthError(result);
    console.log(result);
    setLoading(false);
  };

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
            <CardTitle>{t("account_login_title")}</CardTitle>
            {/* <CardDescription>
              Enter your email below to login to your account
            </CardDescription> */}
            <CardAction>
              <Button variant="link">
                <Link to="/register" className="underline">
                  {t("register")}
                </Link>
              </Button>
              <LanguageSwitcher />
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="username"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("username")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("password")}</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 underline"
                  >
                    {t("forgot_password")}
                  </a>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-3">
            <Button type="submit" className="w-full cursor-pointer">
              {t("login")} {loading && <Loader2Icon className="animate-spin" />}
            </Button>
            {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}

            {authError && <p className="text-red-500 text-sm">{authError}</p>}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
