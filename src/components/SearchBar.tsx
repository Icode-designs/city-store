import useMediaQuery from "@/hooks/useMedia";
import { CustomButton, StyledSearchBar } from "@/styles/components/ui.Styles";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const isTablet = useMediaQuery(768);
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search for products..." />
      {isTablet ? (
        <CustomButton>search</CustomButton>
      ) : (
        <CustomButton>
          <IoMdSearch />
        </CustomButton>
      )}
    </StyledSearchBar>
  );
};

export default SearchBar;
