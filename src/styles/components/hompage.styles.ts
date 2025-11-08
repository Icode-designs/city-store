import pxTorem from "@/utils/pxToRem";
import styled from "styled-components";
import QUERY from "../mediaBreakpoints";

export const HeroBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${pxTorem(484)};
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  overflow: hidden;
  padding: ${pxTorem(16)};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.4);
  }

  article {
    max-width: ${pxTorem(450)};
    margin-top: ${pxTorem(135)};
    z-index: 5;
    text-align: center;

    h1 {
      margin-bottom: ${pxTorem(16)};
    }
    p {
      margin-bottom: ${pxTorem(24)};
    }
    * {
      color: var(--col-100);
    }
    a {
      justify-self: center;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    padding: ${pxTorem(16)};

    button {
      svg {
        color: var(--col-100);
        font-size: ${pxTorem(24)};
      }

      svg.active {
        color: var(--col-400);
      }
    }
  }

  @media ${QUERY.DESKTOP} {
    padding-left: ${pxTorem(40)};
    margin: 0 ${pxTorem(16)};
    margin-top: ${pxTorem(24)};
    border-radius: var(--border-radius);
    justify-content: unset;
    article {
      text-align: left;
      a {
        justify-self: unset;
      }
    }
  }

  @media ${QUERY.DESKTOP} {
    margin: ${pxTorem(24)} 0;
    margin-bottom: 0;
  }
`;
