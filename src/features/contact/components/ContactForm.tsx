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
import { Textarea } from "@/components/ui/textarea";

import contactMe from "@/assets/contact-4.png";

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z.string().email({ message: "Please enter a correct Email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
    <section>
      <div className="container mx-auto mt-24 px-6 md:mt-32">
        {/* Heading */}
        <div className="space-y-2 text-center text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
          <h1>Have an Idea?</h1>
          <h1 className="text-green-500">Let's chat</h1>
        </div>

        <div className="flex flex-col items-center justify-between gap-y-6 md:flex-row md:gap-x-10">
          <div className="mx-auto mt-5 w-full max-w-md basis-1/2 rounded-xl border border-gray-100 p-5 md:mt-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-[1rem] font-semibold leading-6 text-gray-600">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jane Smith"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-[1rem] font-semibold leading-6 text-gray-600">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-green-500"
                          placeholder="name@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-[1rem] font-semibold leading-6 text-gray-600">
                        Your message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="resize-none focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-green-500"
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
          <div className="md:basis-1/2">
            <img src={contactMe} alt="contact me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
