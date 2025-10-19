"use client";
import pxTorem from "@/utils/pxToRem";
import styled from "styled-components";
import QUERY from "../mediaBreakpoints";

export const FooterContainer = styled.footer`
  background-color: var(--col-000);
  color: var(--col-100);
  text-align: center;
  padding: ${pxTorem(16)};

  > div:nth-of-type(1) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${pxTorem(32)};
    border-bottom: ${pxTorem(1)} solid var(--col-100);
    padding: ${pxTorem(40)} 0;
    grid-template-areas: "article" "moneyLinks" "usefulLinks" "getApp";
    justify-items: center;

    article {
      grid-area: article;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: ${pxTorem(16)};
      max-width: ${pxTorem(350)};
    }
    ul {
      &:nth-of-type(1) {
        grid-area: moneyLinks;
      }
      &:nth-of-type(2) {
        grid-area: usefulLinks;
      }
    }
  }

  @media ${QUERY.TABLET} {
    padding: ${pxTorem(40)};
    > div:nth-of-type(1) {
      text-align: left;
      justify-items: stretch;
      max-width: var(--max-width);
      margin: var(--centered);

      * {
        width: fit-content;
      }
      align-items: center;
      grid-template-areas: "article moneyLinks" "usefulLinks getApp";
    }
  }

  @media ${QUERY.DESKTOP} {
    > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: ${pxTorem(16)};
  justify-content: center;
  align-items: center;

  svg {
    color: var(--col-100);
    font-size: ${pxTorem(24)};
  }
`;

export const GetTheApp = styled.div`
  grid-area: getApp;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxTorem(16)};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${pxTorem(16)};

    svg {
      font-size: ${pxTorem(40)};
      color: var(--col-100);
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxTorem(8)};
  font-size: ${pxTorem(11)};
  font-weight: var(--regular);
  padding: ${pxTorem(16)};
  p {
    font-size: inherit;
  }
`;

export const NewsLetterBox = styled.section`
  display: flex;
  background-color: var(--col-000);
  color: var(--col-100);
  text-align: center;
  padding: ${pxTorem(50)} ${pxTorem(16)};
  justify-content: center;
  align-items: center;
  height: fit-content;

  article {
    text-align: center;
    color: var(--col-100);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${pxTorem(24)};
    max-width: ${pxTorem(400)};
    justify-items: center;

    > div:nth-of-type(1) {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: ${pxTorem(8)};
    }

    > div:nth-of-type(2) {
      width: 100%;
      input {
        height: fit-content;
        padding: ${pxTorem(16)};
        outline: none;
        border-radius: var(--border-radius);
        border: none;
        width: 100%;
      }
    }
  }
`;
