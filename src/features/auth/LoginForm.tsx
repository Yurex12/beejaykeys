import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import Spinner from "@/components/Spinner";
import SpinnerMini from "@/components/SpinnerMini";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useLogin } from "./hooks/useLogin";
import { useUser } from "./hooks/useUser";

import { loginSchema, TLoginSchema } from "@/schema/userSchema";

export default function LoginForm() {
  const { login, isLoading } = useLogin();
  const { isAuthenticated, isLoading: isLoadingUserData } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "123456",
    },
  });

  async function onSubmit(details: TLoginSchema) {
    login(details, {
      onSuccess: () => form.reset(),
    });
  }
  if (isLoadingUserData) return <Spinner />;

  if (!isLoadingUserData && isAuthenticated)
    return <Navigate to="/dashboard/overview" />;

  return (
    <div className="mx-auto mt-20 max-w-sm px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-3 text-balance">
          Login to your Portfolio
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-gray-800 block text-[1rem] font-semibold leading-6">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    className="focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-green-500"
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-gray-800 block text-[1rem] font-semibold leading-6">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="pr-10 focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-green-500"
                      placeholder="*********"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="block w-full bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? <SpinnerMini /> : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
