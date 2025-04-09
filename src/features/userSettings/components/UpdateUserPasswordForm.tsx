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

import {
  TUpdatePasswordSchema,
  updatePasswordSchema,
} from "@/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useUpdateUserPassword from "../hooks/useUpdateUserPassword";
import { useUser } from "@/features/auth/hooks/useUser";

function UpdateUserPasswordForm() {
  const { updatePassword, isUpdating } = useUpdateUserPassword();
  const { user } = useUser();

  const form = useForm<TUpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onSubmit(data: TUpdatePasswordSchema) {
    updatePassword({ data, userId: user!.userId });
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[12rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Old Password
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    placeholder="**********"
                    {...field}
                    className="placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    disabled={isUpdating}
                  />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[12rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                New Password
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    placeholder="**********"
                    {...field}
                    className="placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    disabled={isUpdating}
                  />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[12rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Confirm New Password
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    placeholder="**********"
                    {...field}
                    className="placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    disabled={isUpdating}
                  />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-fit bg-green-500 px-8 text-white hover:bg-green-600 disabled:cursor-not-allowed"
            disabled={isUpdating}
          >
            {isUpdating ? <SpinnerMini /> : "Update Password"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateUserPasswordForm;
