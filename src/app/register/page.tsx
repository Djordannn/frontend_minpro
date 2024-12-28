"use client";

import React from "react";
import FormInput from "../components/formInput";
import { Formik, Form, FormikProps } from "formik";
import { registerSchema } from "./registerSchema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

interface IRegisterProps {}

interface IRegisterValue {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC<IRegisterProps> = (props) => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <Card className="px-5">
        <CardHeader>
          <h1 className="text-2xl font-bold">Register now</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Formik
            validationSchema={registerSchema}
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log("Value from input formik :", values);
              onRegister(values);
              resetForm();
            }}
          >
            {(props: FormikProps<IRegisterValue>) => {
              const { values, handleChange, errors, touched } = props;
              return (
                <Form>
                  <FormInput
                    id="username"
                    type="text"
                    label="Username"
                    onChange={handleChange}
                    value={values.username}
                  />
                  <FormInput
                    id="email"
                    type="email"
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
            Already have an account? <a href="#">Login</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
