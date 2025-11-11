"use client";
import { AuthMain, CustomButton, FlexBox } from "@/styles/components/ui.Styles";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface ERRORTYPE {
  emailErr?: undefined | string;
  passwordErr?: undefined | string;
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
    const password = (formData.get("password") as string) || "";
    const confirmPassword = (formData.get("confirm-password") as string) || "";

    const newErrors: ERRORTYPE = {};

    if (password !== confirmPassword) {
      newErrors.passwordErr = "Passwords don't match";
    }

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
          <h1>signup</h1>
          <p>
            or <Link href="/login">Login To Existing Account</Link>
          </p>
        </div>
        <fieldset>
          <FlexBox $variant="secondary" $gap={24}>
            <input
              type="text"
              name="first-name"
              placeholder="First name"
              minLength={3}
              required
            />

            <input
              type="text"
              name="last-name"
              placeholder="Last name"
              minLength={3}
              required
            />
          </FlexBox>

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

            {error.passwordErr && <p className="error">{error.passwordErr}</p>}
          </div>

          <input
            type="password"
            placeholder="Confirm password"
            name="confirm-password"
            required
          />
        </fieldset>

        <CustomButton $variant="extended">Create your account</CustomButton>
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
