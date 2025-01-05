"use client";

import React from "react";
import FormInput from "../component/formInput";
import { useRouter } from "next/navigation";
import { Formik, Form, FormikProps } from "formik";
import { loginSchema } from "./loginSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { callAPI } from "../config/axios";

interface IRegisterProps {}

interface IRegisterValue {
  email: string;
  password: string;
}

const Register: React.FC<IRegisterProps> = (props) => {
  const route = useRouter();
  const onLogin = async (email: string, password: string) => {
    try {
      const res = await callAPI.post("/user/login", {
        email,
        password,
      });
      alert(res.data.email);
      localStorage.setItem("dataUser", res.data.token);
      route.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <Card className="px-5">
        <CardHeader>
          <h1 className="text-2xl font-medium">Login now</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Value from input formik :", values);
              onLogin(values.email, values.password);

              resetForm();
            }}
          >
            {(props: FormikProps<IRegisterValue>) => {
              const { values, handleChange, errors, touched } = props;
              return (
                <Form>
                  <FormInput
                    id="email"
                    type="text"
                    label="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <FormInput
                    id="password"
                    type="password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Button type="submit" className="mt-3">
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <p className="text-sm mt-3">
            Don't have an account? <a href="../register">Register</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
