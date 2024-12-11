"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthLogin } from "./auth-login";
import { AuthRegister } from "./auth-register";
import { AuthGrid } from "./auth-grid";

export function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <Tabs
        defaultValue="login"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="mt-6">
          <AuthLogin />
        </TabsContent>
        <TabsContent value="register" className="mt-6">
          <AuthRegister />
        </TabsContent>
      </Tabs>
      <AuthGrid />
    </div>
  );
}
