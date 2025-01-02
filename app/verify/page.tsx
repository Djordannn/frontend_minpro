"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { callAPI } from "../config/axios";
import { useSearchParams } from "next/navigation";

type IVerifyProps = {};

const Verify: React.FunctionComponent<IVerifyProps> = (props) => {
  const route = useRouter();
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
      route.replace("../dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleVerify();
  }, []);
  return (
    <div>
      <p className="text-2xl text-center">Your account is verified</p>
    </div>
  );
};

export default Verify;
