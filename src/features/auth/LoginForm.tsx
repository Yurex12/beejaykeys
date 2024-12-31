import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a correct Email" }),
  password: z.string().min(6, { message: "Enter at least 6 characters." }),
});

export default function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }

  return (
    <div className="mx-auto mt-20 max-w-sm px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="t text-2xl font-bold">Welcome back</h1>
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
                    placeholder="email"
                    {...field}
                    className="focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-green-500"
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
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="block w-full bg-green-600 text-white hover:bg-green-700"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
