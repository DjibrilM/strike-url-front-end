"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { mutate } from "swr";

import { zodResolver } from "@hookform/resolvers/zod";
import instance from "@/utils/shared/Axios";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../common/Button";
import { errorMessage } from "@/utils/shared/extractErrorMessageFromResponse";

import {
  FormField,
  Form,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FormLabel } from "../ui/form";
import { backendApiUrl } from "@/utils/constant";

const formSchema = z.object({
  url: z.string().url({
    message: "invalid url",
  }),
  title: z.string().min(2, "Title must be at least 2 characters long"),
  description: z.string().min(2, "Title must be at least 2 characters long"),
});

const CreateUrlForm: React.FC<{ completed: Function }> = ({ completed }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      title: "",
      description: "",
    },
  });

  const createUrl = async ({
    url,
    title,
    description,
  }: {
    url: string;
    title: string;
    description: string;
  }) => {
    try {
      setLoading(true);
      await instance.post("urls", {
        url,
        title,
        description,
      });

      setLoading(false);
      toast.success("Url created 🤙🏽");
      await mutate("/urls/user/all");
      completed();

    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUrl(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  m-auto w-full"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mt-4 relative">
              <FormLabel />
              <FormControl>
                <Input
                  className="bg-black h-14 text-white rounded-lg border-white/35"
                  placeholder="example:my portfolio"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage className="absolute auth-error-message text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel />
              <FormControl>
                <Input
                  className="bg-black border-white/35 text-white h-14 rounded-lg"
                  placeholder="example:https://portfolio..."
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage className="absolute text-red-500 auth-error-message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mt-4 relative">
              <FormLabel />
              <FormControl>
                <Textarea
                  className="bg-black h-14 text-white rounded-lg border-white/35"
                  placeholder="description:short description of your url..."
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage className="absolute auth-error-message text-red-500" />
            </FormItem>
          )}
        />

        <Button
          loading={loading}
          className="bg-white/90 text-lg w-full h-14 mt-5 rounded-lg active:bg-white/70"
          variant="secondary"
        >
          create link
        </Button>
      </form>
    </Form>
  );
};

export default CreateUrlForm;
