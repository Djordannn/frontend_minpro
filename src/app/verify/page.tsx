"use client";
import React from "react";
import { callAPI } from "../config/axios";
import { useSearchParams } from "next/navigation";

type IVerifyProps = {};

const Verify: React.FunctionComponent<IVerifyProps> = (props) => {
  const query = useSearchParams();
  const handleVerify = async () => {
    try {
      console.log(query.get("a_t"));
      const res = await callAPI.patch("/user/verify-account", null, {
        headers: {
          Authorization: `Bearer ${query.get("a_t")}`,
        },
      });
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleVerify();
  }, []);
  return (
    <div>
      <p className="text-2xl text-center">Verify your account </p>
    </div>
  );
};

export default Verify;
