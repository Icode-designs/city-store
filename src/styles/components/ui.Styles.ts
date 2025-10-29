"use client";
import pxTorem from "@/utils/pxToRem";
import styled, { css } from "styled-components";
import QUERY from "../mediaBreakpoints";

export const MainContainer = styled.main<{ $variant?: "secondary" }>`
  max-width: var(--max-width);
  width: 100%;
  margin: var(--centered);
  margin-bottom: ${pxTorem(90)};
  margin-top: ${pxTorem(100)};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxTorem(90)};
  @media ${QUERY.DESKTOP} {
    padding: 0;
  }

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background-color: var(--col-100);
      border-radius: var(--border-radius);
      padding: ${pxTorem(16)};
      @media ${QUERY.TABLET} {
        padding: ${pxTorem(24)};
      }
      @media ${QUERY.DESKTOP} {
        padding: ${pxTorem(40)};
      }
    `}
`;

export const LogoBox = styled.div<{ $variant: "black" | "white" }>`
  max-width: ${pxTorem(200)};
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: ${pxTorem(80)};

  ${({ $variant }) =>
    $variant === "white" &&
    css`
      width: ${pxTorem(150)};
    `}

  ${({ $variant }) =>
    $variant === "black" &&
    css`
      width: ${pxTorem(200)};
    `}

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    display: block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const StyledSearchBar = styled.div`
  width: 100%;
  max-width: ${pxTorem(600)};
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
  input {
    border: ${pxTorem(1)} solid var(--col-400);
    border-radius: var(--border-radius);
    width: 100%;
    height: ${pxTorem(50)};
    padding: ${pxTorem(16)} ${pxTorem(16)};
    padding-right: ${pxTorem(65)};

    @media ${QUERY.TABLET} {
      padding-right: ${pxTorem(95)};
    }
  }

  input:focus {
    outline: none;
  }

  button {
    position: absolute;
    right: ${pxTorem(5)};
    top: ${pxTorem(5)};
    bottom: ${pxTorem(5)};
    font-size: ${pxTorem(16)};
    color: var(--col-100);
    height: 80%;
  }
`;

export const CustomButton = styled.button<{
  $variant?: "extended" | "outlined";
}>`
  background-color: var(--col-400);
  color: var(--col-100);
  border: none;
  padding: ${pxTorem(16)};
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5s;
  border-radius: var(--border-radius);
  font-weight: var(--bold);
  text-transform: capitalize;

  ${({ $variant }) =>
    $variant === "extended" &&
    css`
      width: 100%;
    `}

  ${({ $variant }) =>
    $variant === "outlined" &&
    css`
      background-color: none;
      border: ${pxTorem(1)} solid var(--col-400);

      &:hover {
        background-color: var(--col-400);
      }
    `}

    &:hover {
    opacity: 0.6;
  }
`;

export const FlexBox = styled.div<{
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: number;
  $variant?: "secondary";
}>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  gap: ${({ $gap }) => (typeof $gap === "number" ? pxTorem($gap) : pxTorem(0))};

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      flex-direction: column;
      @media ${QUERY.TABLET} {
        flex-direction: row;
      }
    `}
`;

export const ProductSection = styled.section<{ $variant?: string }>`
  margin: 0 ${pxTorem(16)};
  > div {
    padding: ${pxTorem(16)};
    &:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--col-100);
      border-top-right-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);

      ${({ $variant }) =>
        $variant === "categories"
          ? css`
              background-color: var(--col-400);
            `
          : $variant === "flash-sale"
          ? css`
              background-color: var(--col-300);
            `
          : css`
              background-color: var(--col-200);
            `}
    }
  }

  @media ${QUERY.DESKTOP} {
    margin: 0;
  }
`;

export const ProductCard = styled.div<{ $variant?: string }>`
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: 1fr;
  transition: all ease 0.5s;
  cursor: pointer;
  padding: ${pxTorem(16)} 0;
  grid-gap: ${pxTorem(16)};
  height: 100%;
  position: relative;
  justify-items: center;
  padding: ${pxTorem(8)};

  button {
    align-self: end;
    margin: 0 ${pxTorem(8)};
  }

  a {
    width: 100%;
  }

  .favourite {
    position: absolute;
    top: ${pxTorem(8)};
    right: ${pxTorem(8)};
    border-radius: 50%;
    padding: ${pxTorem(8)};
    display: flex;
    height: fit-content;
    width: fit-content;

    svg {
      font-size: ${pxTorem(28)};
    }

    &:hover {
      background-color: rgba(253, 0, 0, 0.3);
    }
  }

  img {
    width: 100%;
    height: ${pxTorem(205)};
    object-fit: contain;
    object-position: center;
  }

  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: auto;
    padding: 0 ${pxTorem(8)};

    ${({ $variant }) =>
      $variant === "categories" &&
      css`
        h3 {
          text-align: center;
        }
      `}
  }

  &:hover {
    box-shadow: var(--shadow);
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxTorem(140)}, 1fr));
  grid-gap: ${pxTorem(32)};
  background-color: var(--col-100);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  @media ${QUERY.TABLET} {
    grid-template-columns: repeat(auto-fill, minmax(${pxTorem(200)}, 1fr));
  }
`;
