"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
import { registerSchema, verifyEmailSchema } from "@/lib/validation";
import { registerUser, verifyEmail } from "@/actions/auth-action";
import { toast } from "sonner";

export function AuthRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVerifyInput, setShowVerifyInput] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const verifyForm = useForm<z.infer<typeof verifyEmailSchema>>({
    defaultValues: {
      emailVerify: "",
      code: "",
    },
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      verifyForm.setValue("emailVerify", email);
    }
  }, [showVerifyInput, verifyForm]);

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    setIsSubmitting(true);
    try {
      const response = await registerUser(data);
      toast.success(response.message || response.Response || "Registration successful!");
      setShowVerifyInput(true);
      localStorage.setItem("email", data.email);
      verifyForm.setValue("emailVerify", data.email);
      console.log(response);
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Registration failed!");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function onVerify(data: z.infer<typeof verifyEmailSchema>) {
    const emailVerify = verifyForm.getValues("emailVerify");
    if (!emailVerify) {
      toast.error("Email is missing. Please try again.");
      return;
    }

    setIsVerifying(true);
    try {
      await verifyEmail(emailVerify, data.code);
      toast.success("Email verified successfully!");
      setShowVerifyInput(false);
    } catch (error: any) {
      toast.error(error.message || "Verification failed!");
    } finally {
      setIsVerifying(false);
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your firstname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your lastname" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>

      {showVerifyInput && (
        <Form {...verifyForm}>
          <form
            onSubmit={verifyForm.handleSubmit(onVerify)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={verifyForm.control}
              name="emailVerify"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={verifyForm.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Enter the verification code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Verify Email"}
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
