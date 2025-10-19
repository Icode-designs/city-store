"use client";
import { HeaderContainer, SearchResultsBox } from "@/styles/components/header";
import {
  CustomButton,
  FlexBox,
  StyledSearchBar,
} from "@/styles/components/ui.Styles";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCart, IoMdSearch } from "react-icons/io";
import { useContext, useRef, useState } from "react";
import Logo from "./Logo";
import useMediaQuery from "@/hooks/useMedia";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import PRODUCT from "@/types/productsType";

interface SearchProcess {
  isTyping: boolean;
  result?: PRODUCT[];
}

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchProcess, setSearchProcess] = useState<SearchProcess>({
    isTyping: false,
    result: undefined,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const productsCtx = useContext(PRODUCTS_CONTEXT);
  const isTablet = useMediaQuery(768);
  const isDesktop = useMediaQuery(1200);

  if (!productsCtx) return;
  const { loading, error, products } = productsCtx;

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  if (error) {
    return <p>an error occured check your internet connection and try again</p>;
  }
  if (loading) {
    return <p>loading...</p>;
  }

  function handleChange() {
    const searchKeyword = inputRef.current?.value.trim().toLowerCase() || "";
    if (!searchKeyword) return;

    const searchResult =
      products?.filter(
        (prod) =>
          prod.title.toLowerCase().includes(searchKeyword!.toLowerCase()) ||
          prod.category.toLowerCase().includes(searchKeyword!.toLowerCase())
      ) || [];

    setSearchProcess({ isTyping: true, result: searchResult });
  }

  function handleBlur() {
    setSearchProcess((prev) => ({ ...prev, isTyping: false }));
  }
  return (
    <HeaderContainer $navOpen={navOpen}>
      <div>
        {isTablet && <Logo />}
        {!isTablet && <IoMdCart size={32} color="var(--col-000" />}
        <nav>
          <ul>
            {!isTablet && (
              <li onClick={navOpen ? toggleNav : undefined}>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
            )}
            <li onClick={navOpen ? toggleNav : undefined}>
              <Link href="">
                <p>New arrivals</p>
              </Link>
            </li>
            <li onClick={navOpen ? toggleNav : undefined}>
              <Link href="">
                <p> 5 stars</p>
              </Link>
            </li>
            <li onClick={navOpen ? toggleNav : undefined}>
              <Link href="">
                <p> Best Deals</p>
              </Link>
            </li>
            {!isTablet && (
              <li onClick={navOpen ? toggleNav : undefined}>
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
        <StyledSearchBar>
          <input
            type="text"
            placeholder="Search for products..."
            ref={inputRef}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </StyledSearchBar>

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
      {searchProcess.isTyping && (
        <SearchResultsBox>
          {searchProcess.result?.length !== 0 ? (
            searchProcess.result?.map((result, i) => (
              <li key={i}>
                <p>
                  {result.title} in <span>{result.category}</span>
                </p>
              </li>
            ))
          ) : (
            <p>no result found</p>
          )}
        </SearchResultsBox>
      )}
    </HeaderContainer>
  );
};

export default Header;
