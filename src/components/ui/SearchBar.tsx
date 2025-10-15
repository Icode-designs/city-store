import { CustomButton, StyledSearchBar } from "@/styles/components/ui.Styles";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search for products..." />
      <CustomButton>
        <IoMdSearch />
      </CustomButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
