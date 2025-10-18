"use client";
import pxTorem from "@/utils/pxToRem";
import styled from "styled-components";
import QUERY from "../mediaBreakpoints";

export const HeaderContainer = styled.header<{ $navOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--col-100);
  height: fit-content;
  padding: ${pxTorem(16)} 0;
  z-index: 100;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: var(--centered);
    height: fit-content;
    padding: 0 ${pxTorem(16)};
    gap: ${pxTorem(24)};

    .menu {
      > button {
        background: none;
        height: fit-content;
        border: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: ${pxTorem(5)};
        div {
          width: ${pxTorem(25)};
          height: ${pxTorem(3)};
          background-color: var(--col-000);
          transition: all 0.3s ease;

          &:nth-of-type(2) {
            transform: translateX(25%);
            display: ${({ $navOpen }) => ($navOpen ? "none" : "block")};
          }
          &:nth-of-type(1) {
            transform: ${({ $navOpen }) =>
              $navOpen ? "rotate(-45deg) translateY(5px)" : "0"};
          }
          &:nth-of-type(3) {
            transform: ${({ $navOpen }) =>
              $navOpen ? "rotate(45deg)  translateY(-5px)" : "0"};
          }
        }
      }
    }

    nav {
      position: absolute;
      top: ${pxTorem(81.19)};
      right: ${({ $navOpen }) => ($navOpen ? "0" : "-100%")};
      padding: ${pxTorem(40)};
      background-color: var(--col-100);
      min-width: fit-content;
      height: fit-content;
      transition: right 0.5s ease-in-out;
      z-index: 10;
      border-bottom-left-radius: ${pxTorem(16)};

      ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: ${pxTorem(16)};
        li {
          p {
            font-weight: var(--bold);
            font-size: ${pxTorem(20)};
          }
        }
      }
    }
  }

  @media ${QUERY.DESKTOP} {
    > div {
      padding: 0;
      nav {
        position: static;
        background: none;
        font-weight: var(--bold);
        padding: 0;

        gap: ${pxTorem(16)};
        align-items: center;
        width: fit-content;
        top: unset;
        left: unset;
        height: fit-content;
        width: fit-content;
        ul {
          display: flex;
          gap: ${pxTorem(16)};
          li {
            p {
              font-size: ${pxTorem(16)};
              font-weight: var(--semibold);
            }
          }
        }
      }
    }

    > button {
      display: none;
    }
  }
`;
