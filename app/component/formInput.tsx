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
        <label htmlFor="" className="mt-2 font-medium">
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
            className="w-full rounded-md border-2 border-black p-1"
          />
          <button
            type="button"
            className="absolute right-1 top-1 w-8 rounded-sm border p-1"
            onClick={() => setVisible(!visible)}
          >
            {icon}
          </button>
        </div>
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="flex w-full flex-col">
        <label htmlFor="" className="mt-2 font-medium">
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
          className="rounded-md border-2 border-black p-1"
        />
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col">
      <label htmlFor="" className="mt-2 font-medium">
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
        className="rounded-md border-2 border-black p-1"
      />
    </div>
  );
};

export default FormInput;
