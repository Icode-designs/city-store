"use client";
import { AuthMain, CustomButton, FlexBox } from "@/styles/components/ui.Styles";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface ERRORTYPE {
  emailErr?: undefined | string;
}
const Page = () => {
  const [error, setError] = useState<ERRORTYPE>({});
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Clear old errors
    setError({});

    const email = (formData.get("email") as string) || "";

    const newErrors: ERRORTYPE = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //email format check
    if (!emailRegex.test(email)) {
      newErrors.emailErr = "Please enter a valid email";
    }
    // If there are any errors, update state and stop
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      console.log(newErrors);
      return;
    }

    console.log("✅ success");
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <AuthMain>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Login</h1>
          <p>
            or <Link href="/signup">Create A New Account</Link>
          </p>
        </div>
        <fieldset>
          <div>
            <input type="email" placeholder="Email" name="email" required />
            {error.emailErr && <p className="error">{error.emailErr}</p>}
          </div>

          <div>
            <input
              className="password"
              minLength={8}
              type={!showPassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              required
            />
            <button className="eye" onClick={toggleShowPassword}>
              {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </fieldset>

        <CustomButton $variant="extended">login</CustomButton>
        <FlexBox $justifyContent="center" className="seperator">
          <div></div>
          <p>or continue with</p>
          <div></div>
        </FlexBox>
        <button className="google" type="button">
          <FaGoogle /> <p>Google</p>
        </button>
      </form>
    </AuthMain>
  );
};

export default Page;
