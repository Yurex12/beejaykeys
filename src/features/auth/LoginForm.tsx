import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import Spinner from "@/components/Spinner";

import { useLogin } from "./hooks/useLogin";
import { useUser } from "./hooks/useUser";

import { loginSchema, TLoginSchema } from "@/schema/userSchema";
import { useEffect } from "react";

export default function LoginForm() {
  const { login, isLoading } = useLogin();
  const { isAuthenticated, isLoading: isLoadingUserData } = useUser();
  const navigate = useNavigate();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(details: TLoginSchema) {
    login(details, {
      onSuccess: () => form.reset(),
    });
  }

  useEffect(() => {
    if (!isLoadingUserData && isAuthenticated) navigate("/dashboard/overview");
  }, [isAuthenticated, isLoadingUserData]);

  if (isLoadingUserData) return <Spinner />;

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
                  <Input
                    className="focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-green-500"
                    placeholder="*********"
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
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
