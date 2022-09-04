import React from "react";

import { APP_NAME } from "@/constants";
import { MainButton } from "@/components/Buttons";

export type InputType = {
  name: string;
  type: "email" | "password" | "text" | "tel" | "number";
  placeholder: string;
  required?: boolean;
};

interface FormProps {
  authState: "sign_up" | "sign_in";
  description?: string;
  inputArray: Array<InputType>;
  inputActionAndValues: Array<{
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }>;
  error?: string | null;
  /* eslint-disable */
  // eslint-disable-next-line no-unused-vars
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  /* eslint-enable */
  onAuthStateChange?: () => void;
}

const Form: React.FC<FormProps> = ({
  authState,
  description,
  inputArray,
  onSubmit,
  onAuthStateChange,
  inputActionAndValues,
  error,
}) => {
  return (
    <form
      className="w-[500px] bg-neutral-100 p-[50px] shadow-lg drop-shadow-lg"
      onSubmit={onSubmit}
    >
      <div className="mb-5 text-center">
        <h1 className="mb-3 text-2xl font-medium">{APP_NAME}</h1>
        <h2 className="mb-1 text-4xl font-bold">
          {authState === "sign_up"
            ? "Create your account"
            : "Log in your account"}
        </h2>
        <p className="mx-auto w-[300px]">
          {description || "Nam viverra nunc eu diam molestie euismod."}
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        {inputArray &&
          inputArray.map((input, index) => (
            <input
              key={input.name}
              className="border border-neutral-300 px-3 py-3 outline-none"
              type={input.type}
              required={input.required}
              placeholder={input.placeholder}
              value={inputActionAndValues[index].value}
              onChange={(e) => {
                const val = e.target.value;
                let newVal = "";

                if (input.type === "number" || input.type === "tel") {
                  newVal = val.replace(/\D+/g, "");
                } else {
                  newVal = val.trim();
                }

                inputActionAndValues[index].setValue(newVal);
              }}
            />
          ))}
        <MainButton
          text={authState === "sign_in" ? "Sign in" : "Sign up"}
          type="submit"
        />
      </div>
      <div className="my-5 h-[1px] w-full bg-neutral-300" />
      <p className="text-center">
        {authState === "sign_in"
          ? "Don't have an account?"
          : "Already have an account?"}
        <span
          className="font-medium text-sky-600"
          onClick={onAuthStateChange}
          onKeyDown={onAuthStateChange}
          role="button"
          tabIndex={0}
        >
          {authState === "sign_in" ? " Register." : " Log in."}
        </span>
      </p>
      {error && <p className="mt-3 text-center text-red-500">{error}</p>}
    </form>
  );
};

export default Form;
