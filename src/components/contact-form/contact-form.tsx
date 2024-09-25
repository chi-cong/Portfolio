"use client";

import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const mockData = {
  phone: "+84 973981965",
  email: "chicong422002@gmail.com",
};

const formSchema = z.object({
  yourName: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  yourEmail: z
    .string()
    .regex(
      new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      "Invalid Email"
    ),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});
export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourName: "",
      yourEmail: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Card className='min-w-[40rem] w-[32rem]'>
      <CardHeader>
        <CardTitle>Reach Out To Me</CardTitle>
      </CardHeader>
      <CardContent className='text-primary flex gap-12'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <FaPhoneAlt />
              <span>{mockData.phone}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <GoMail />
              <span>{mockData.email}</span>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='yourName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='yourEmail'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder='Type your meassage to me.'
                        className='h-20 resize-none'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
