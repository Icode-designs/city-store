import { LogoBox } from "@/styles/components/ui.Styles";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <LogoBox>
      <Link href="/">
        <p>Next Door</p>
        <p>Xpress</p>{" "}
      </Link>
    </LogoBox>
  );
};

export default Logo;
