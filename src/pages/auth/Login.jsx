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

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { t } = useTranslation();

  const onSubmit = (data) => {
    const success = login(data.username, data.password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      alert("Invalid credentials");
    }
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
            <CardTitle>Login to your account</CardTitle>
            {/* <CardDescription>
              Enter your email below to login to your account
            </CardDescription> */}
            <CardAction>
              <Button variant="link">
                <Link to="/register" className="underline">
                  Register
                </Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
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
            <Button type="submit" className="w-full">
              {t("login")}
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

export default LoginPage;
