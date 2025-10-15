"use client";
import pxTorem from "@/utils/pxToRem";
import styled from "styled-components";
import QUERY from "../mediaBreakpoints";

export const ProductImgBox = styled.div`
  padding: ${pxTorem(16)};
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: ${pxTorem(16)};
  max-width: ${pxTorem(483)};

  img {
    width: 100%;
    object-fit: contain;
  }

  > div {
    display: flex;
    align-items: center;
    gap: ${pxTorem(10)};

    div {
      width: 100%;
      max-width: ${pxTorem(95)};
      cursor: pointer;
      &.active {
        border: ${pxTorem(1)} solid var(--col-400);
      }

      img {
        width: 100%;
        height: fit-content;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;

export const ProductInfoBox = styled.article`
  display: grid;
  grid-gap: ${pxTorem(16)};
  grid-template-columns: 1fr;
  width: 100%;
  > * {
    justify-self: center;
    text-align: center;
    width: 100%;
  }

  > div:nth-of-type(2) {
    justify-content: center;
  }

  @media ${QUERY.TABLET} {
    > * {
      justify-items: unset;
      text-align: unset;
    }

    > div:nth-of-type(2) {
      justify-content: unset;
    }

    > div:nth-of-type(1) {
      justify-content: unset;
    }
  }
`;

export const ProductOverviewBox = styled.section`
  padding: 0 ${pxTorem(32)};
  @media ${QUERY.TABLET} {
    padding: 0 ${pxTorem(40)};
  }
`;

export const ProductSpecs = styled.div`
  width: 100%;

  > div {
    &:nth-of-type(1) {
      button {
        text-transform: capitalize;
        font-size: ${pxTorem(20)};
        font-weight: var(--bold);
      }
    }

    &:nth-of-type(2) {
      overflow-x: hidden;
      position: relative;
      min-height: 80px;

      * {
        width: 100%;
      }
    }
  }
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  text-transform: capitalize;
  font-size: ${pxTorem(20)};
  font-weight: ${({ $active }) => ($active ? "var(--bold)" : "400")};
  color: ${({ $active }) => ($active ? "black" : "gray")};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const AnimatedContent = styled.div`
  position: relative;
  overflow: hidden;
  height: ${pxTorem(400)};
  padding: ${pxTorem(32)} ${pxTorem(16)};

  > div {
    width: 100%;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${pxTorem(16)};
    list-style: none;
  }
`;

export const ProductReview = styled.div`
  width: 100%;
`;
