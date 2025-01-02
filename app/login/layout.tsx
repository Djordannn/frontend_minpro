import React, { ReactNode } from "react";

interface ILogin {
  children: React.ReactNode;
}

const LoginLayout: React.FunctionComponent<ILogin> = ({ children }) => {
  return <div className="ml-[27rem]">{children}</div>;
};

export default LoginLayout;
