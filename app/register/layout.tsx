import * as React from "react";
import { Metadata } from "next";

interface IRegisterLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Register",
  description: "Join to share your story",
};

const RegisterLayout: React.FunctionComponent<IRegisterLayout> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default RegisterLayout;
