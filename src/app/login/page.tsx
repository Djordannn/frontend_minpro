"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormInput from "../components/formInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  //   const router = useRouter();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Login now</h1>
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
            <Button className="mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
