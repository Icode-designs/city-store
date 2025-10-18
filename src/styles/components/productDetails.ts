"use client";
import pxTorem from "@/utils/pxToRem";
import styled from "styled-components";
import QUERY from "../mediaBreakpoints";
import { Query } from "firebase/firestore";

export const ProductImgBox = styled.div`
  width: 100%;
  max-width: ${pxTorem(483)};
  gap: ${pxTorem(16)};

  > div {
    > img {
      width: 100%;
      object-fit: contain;
      width: 70%;
      order: 1;
      height: ${pxTorem(347)};
    }
    > div {
      display: flex;
      gap: ${pxTorem(8)};
      order: 2;

      div {
        width: ${pxTorem(100)};
        height: ${pxTorem(100)};
        max-width: ${pxTorem(95)};
        cursor: pointer;
        &.active {
          border: ${pxTorem(1)} solid var(--col-400);
        }

        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    @media ${QUERY.TABLET} {
      > div {
        display: grid;
        max-width: ${pxTorem(95)};
        grid-template-columns: 1fr;
        height: fit-content;
        grid-gap: ${pxTorem(8)};
        align-items: start;
        order: 1;
      }
      > img {
        order: 2;
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
  padding: 0 ${pxTorem(16)};
  @media ${QUERY.TABLET} {
    padding: 0 ${pxTorem(24)};
  }
  @media ${QUERY.DESKTOP} {
    padding: 0 ${pxTorem(40)};
  }
`;

export const ProductSpecs = styled.div`
  width: 100%;
  flex: 1;

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
      height: fit-content;

      * {
        width: 100%;
      }
    }
  }
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  width: fit-contentx;
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
  padding: ${pxTorem(32)} 0;

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

export const AnimatedRating = styled.div`
  position: relative;
  overflow: hidden;
  height: ${pxTorem(400)};
  padding: ${pxTorem(32)} 0;

  > div {
    width: 100%;
  }

  ul {
    height: ${pxTorem(150)};
    progress {
      width: 100%;
      height: 10px;
      appearance: none;
      -webkit-appearance: none;
      overflow: hidden;
      border: none;
      border-radius: var(--border-radius);

      &::-webkit-progress-bar {
        background-color: #eeee;
        border-radius: var(--border-radius);
      }

      &::-webkit-progress-value {
        background-color: var(--col-400);
        border-radius: var(--border-radius);
      }

      &::-moz-progress-bar {
        background-color: var(--col-400);
        border-radius: var(--border-radius);
      }
    }
  }
`;

export const CustomerReviews = styled.div`
  height: ${pxTorem(150)};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxTorem(24)};
  overflow-y: scroll;
  align-items: start;

  article {
    display: block;
    > ul {
      display: flex;
      width: 100%;
      gap: ${pxTorem(8)};
      height: fit-content;

      li {
        width: fit-content !important;
      }
    }
  }
`;

export const ReviewInputBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxTorem(16)};
  > div {
    display: flex;
    justify-content: flex-end;
  }

  textarea {
    width: 100%;
    height: ${pxTorem(150)};
    border-radius: var(--border-radius);
    border: var(--col-400) ${pxTorem(1)} solid;
    padding: ${pxTorem(16)};
  }
`;
