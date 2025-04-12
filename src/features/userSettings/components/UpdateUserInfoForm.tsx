import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

import { TUpdateUserSchema, updateUserSchema } from "@/schema/userSchema";

import { useUser } from "@/features/auth/hooks/useUser";
import { useUpadteUserInfo } from "../hooks/useUpadteUserInfo";

function UpdateUserInfoForm() {
  const { updateInfo, isUpdating } = useUpadteUserInfo();
  const { user } = useUser();

  const form = useForm<TUpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: user,
  });

  function onSubmit(data: TUpdateUserSchema) {
    const updatedImage =
      data?.image[0]?.name === undefined
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (data.image = user.image)
        : (data.image = data.image[0]);
    updateInfo({
      data: { ...data, image: updatedImage },
      userId: user!.userId,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Username
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    placeholder="John Doe"
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
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Email
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
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
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Avatar
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files)}
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
            {isUpdating ? <SpinnerMini /> : "Update Info"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateUserInfoForm;
