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

export const LogoBox = styled.div`
  min-width: fit-content;
  p {
    font-family: var(--font-italianno);
    font-size: ${pxTorem(32)};
    font-weight: var(--regular);
  }
`;

export const StyledSearchBar = styled.div`
  width: 100%;
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
    padding-right: ${pxTorem(85)};
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
  }
`;

export const CustomButton = styled.button<{
  $variant?: "extended" | "outlined";
}>`
  background-color: var(--col-400);
  color: var(--col-100);
  border: none;
  padding: ${pxTorem(12)} ${pxTorem(16)};
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

    &:nth-of-type(2) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(${pxTorem(150)}, 1fr));
      grid-gap: ${pxTorem(32)};
      background-color: var(--col-100);
      border-bottom-right-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
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
  padding: ${pxTorem(16)};
  grid-gap: ${pxTorem(16)};
  height: 100%;
  position: relative;

  a {
    align-self: end;
  }

  .favourite {
    position: absolute;
    top: ${pxTorem(24)};
    right: ${pxTorem(24)};
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
    height: ${pxTorem(300)};
    object-fit: contain;
    object-position: center;
  }

  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: auto;

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
