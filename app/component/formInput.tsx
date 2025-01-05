"use client";
import { Select } from "@radix-ui/react-select";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
interface IFormInput {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  ref?: any;
  value?: string;
}

const FormInput: React.FC<IFormInput> = ({
  id,
  type,
  label,
  placeholder,
  onChange,
  ref,
  value,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  if (type === "password") {
    let icon;
    let activeType;
    if (visible) {
      icon = <LuEye style={{ margin: "auto" }} />;
      activeType = "text";
    } else {
      icon = <LuEyeClosed style={{ margin: "auto" }} />;
      activeType = "password";
    }

    return (
      <div className="flex flex-col">
        <label htmlFor="" className="font-medium mt-2">
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            name={id}
            ref={ref}
            type={activeType}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="border-2 border-black p-1 rounded-md w-full"
          />
          <button
            type="button"
            className="absolute right-1 top-1 w-8 p-1 rounded-sm border"
            onClick={() => setVisible(!visible)}
          >
            {icon}
          </button>
        </div>
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor="" className="font-medium mt-2">
          {label}
        </label>
        <input
          type="file"
          id={id}
          name={id}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="border-2 border-black p-1 rounded-md"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="font-medium mt-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border-2 border-black p-1 rounded-md"
      />
    </div>
  );
};

export default FormInput;
