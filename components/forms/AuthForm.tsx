"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import axios from "axios";
import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { backendApiUrl } from "@/utils/constant";
import { useUserStore } from "@/zustand/user.zustand";
import { User } from "@/utils/shared/types";
import { errorMessage } from "@/utils/shared/extractErrorMessageFromResponse";
import { useRouter } from "next/navigation";
import {
  FormField,
  Form,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormLabel } from "../ui/form";
import Visibility from "../common/Visible";

interface Props {
  page: "register" | "login";
}

const AuthForm: React.FC<Props> = ({ page }) => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email({
      message: "invalid email",
    }),
    password:
      page !== "login"
        ? z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(
              /[^a-zA-Z0-9\s]/,
              "Password must contain at least one special character"
            )
            .regex(
              /[A-Z]/,
              "Password must contain at least one uppercase letter"
            )
        : string(),
  });

  const { loginUser } = useUserStore((state) => state);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const register = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post<User & { auth_token: string }>(
        backendApiUrl +
          (page === "login" ? "/auth/login/user" : "/auth/register/user"),
        {
          password,
          email,
        }
      );

      const user = response.data;
      localStorage.setItem("auth-token", response.data.auth_token);
      loginUser({ ...user, isLoggedin: true });
      router.replace("/dashboard");
    } catch (error: any) {
      toast.error(errorMessage(error) || "something went wrong");
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await register(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[500px] m-auto w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel />
              <FormControl>
                <Input
                  className="bg-black border-white/35 text-white h-14 rounded-lg"
                  placeholder="Email Address"
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
          name="password"
          render={({ field }) => (
            <FormItem className="mt-4 relative">
              <FormLabel />
              <FormControl>
                <Input
                  className="bg-black h-14 text-white rounded-lg border-white/35"
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage className="absolute auth-error-message text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-white/90 text-lg w-full h-14 mt-5 rounded-lg active:bg-white/70"
          variant={"secondary"}
        >
          <Visibility visible={page === "register"}>
            <span>register</span>
          </Visibility>

          <Visibility visible={page === "login"}>
            <span>Login</span>
          </Visibility>
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
