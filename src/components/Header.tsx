"use client";
import { HeaderContainer } from "@/styles/components/header";
import { FlexBox } from "@/styles/components/ui.Styles";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Logo from "./Logo";
import useMediaQuery from "@/hooks/useMedia";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isTablet = useMediaQuery(768);
  const isDesktop = useMediaQuery(1200);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <HeaderContainer $navOpen={navOpen}>
      <div>
        {isTablet && <Logo />}
        {!isTablet && <IoMdCart size={32} color="var(--col-000" />}
        <nav>
          <ul>
            <li>
              <Link href="">
                <p>New arrivals</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p> 5 stars</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p> Best Deals</p>
              </Link>
            </li>
            {!isTablet && (
              <li>
                <Link href="">
                  <p>Profile</p>
                </Link>
              </li>
            )}
            {isDesktop && (
              <li>
                <FlexBox $gap={8}>
                  <p>Categories</p> <FaAngleDown />
                </FlexBox>
              </li>
            )}
          </ul>
        </nav>
        <SearchBar />

        <FlexBox $gap={32} className="menu">
          {isTablet && (
            <FlexBox $gap={24}>
              <FaUserCircle size={24} color="var(--col-000" />
              <IoMdCart size={24} color="var(--col-000" />
            </FlexBox>
          )}

          {!isDesktop && (
            <button onClick={toggleNav} aria-label="Toggle navigation menu">
              <div></div>
              <div></div>
              <div></div>
            </button>
          )}
        </FlexBox>
      </div>
    </HeaderContainer>
  );
};

export default Header;
