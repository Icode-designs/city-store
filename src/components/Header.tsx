"use client";

import {
  CartContainer,
  HeaderContainer,
  SearchResultsBox,
} from "@/styles/components/header";
import { FlexBox, StyledSearchBar } from "@/styles/components/ui.Styles";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useCallback, useContext, useRef, useState } from "react";
import Logo from "./Logo";
import useMediaQuery from "@/hooks/useMedia";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import PRODUCT from "@/types/productsType";
import { FILTER_CONTEXT } from "@/providers/filterProvider";
import Cart from "./Cart";

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
  const filterCtx = useContext(FILTER_CONTEXT);

  const handleChange = useCallback(() => {
    if (!productsCtx?.products) return;
    const { products } = productsCtx;
    const searchKeyword = inputRef.current?.value.trim().toLowerCase() || "";

    if (!searchKeyword) {
      setSearchProcess({ isTyping: false, result: [] });
      return;
    }

    const searchResult =
      products.filter(({ title, category }) =>
        [title, category].some((field) =>
          field.toLowerCase().includes(searchKeyword)
        )
      ) || [];

    setSearchProcess({ isTyping: true, result: searchResult });
  }, [productsCtx]);

  const handleBlur = useCallback(() => {
    setTimeout(() => {
      setSearchProcess((prev) => ({ ...prev, isTyping: false }));
    }, 300);
  }, []);

  if (!productsCtx) {
    return <p>Unable to load products context. Try refreshing the page.</p>;
  }

  const { loading, error } = productsCtx;

  if (error) {
    return (
      <p>An error occurred. Check your internet connection and try again.</p>
    );
  }

  if (loading) {
    return <p>Loading products...</p>;
  }

  // normal render
  return (
    <HeaderContainer $navOpen={navOpen}>
      <div>
        <Logo variant="black" />
        <nav>
          <ul>
            {!isTablet && (
              <li onClick={navOpen ? () => setNavOpen(false) : undefined}>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
            )}
            <li onClick={navOpen ? () => setNavOpen(false) : undefined}>
              <Link href="">
                <p>New arrivals</p>
              </Link>
            </li>
            <li onClick={navOpen ? () => setNavOpen(false) : undefined}>
              <Link href="">
                <p>5 stars</p>
              </Link>
            </li>
            <li onClick={navOpen ? () => setNavOpen(false) : undefined}>
              <Link href="">
                <p>Best Deals</p>
              </Link>
            </li>
            {!isTablet && (
              <li onClick={navOpen ? () => setNavOpen(false) : undefined}>
                <Link href="">
                  <p>Profile</p>
                </Link>
              </li>
            )}
            {isDesktop && (
              <li>
                <FlexBox $gap={8}>
                  <p>Categories</p>
                  <FaAngleDown />
                </FlexBox>
              </li>
            )}
          </ul>
        </nav>

        <StyledSearchBar>
          <input
            type="text"
            placeholder="Search for products..."
            aria-label="Search products"
            ref={inputRef}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </StyledSearchBar>

        <FlexBox $gap={32} className="menu">
          {isTablet && (
            <FlexBox $gap={24}>
              <FaUserCircle size={24} color="var(--col-000)" />
              <Cart />
            </FlexBox>
          )}
        </FlexBox>
      </div>

      {searchProcess.isTyping && (
        <SearchResultsBox>
          {searchProcess.result && searchProcess.result.length > 0 ? (
            searchProcess.result.map((result, i) => (
              <Link href={`/products/products-list/${result.id}`} key={i}>
                <p onClick={filterCtx?.resetFilters}>
                  {result.title} in <span>{result.category}</span>
                </p>
              </Link>
            ))
          ) : (
            <p>No results found</p>
          )}
        </SearchResultsBox>
      )}
    </HeaderContainer>
  );
};

export default Header;
