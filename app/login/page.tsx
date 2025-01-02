"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "../component/formInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { callAPI } from "../config/axios";
interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  const router = useRouter();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onLogin = async () => {
    try {
      const res = await callAPI.post("/user/login", {
        email,
        password,
      });
      localStorage.setItem("kroco", res.data.token);
      router.push("../dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="shadow-lg">
        <CardHeader>
          <h1 className="text-2xl font-medium">Login now</h1>
        </CardHeader>
        <CardContent>
          <form action="post">
            <FormInput
              type="text"
              label="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              label="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Button className="mt-4" onClick={onLogin()}>
              Submit
            </Button>
          </form>
          <p className="mt-4">
            Don't have a accoubt? <a href="../register">register</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
