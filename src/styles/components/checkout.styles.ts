"use client";
import pxTorem from "@/utils/pxToRem";
import styled from "styled-components";

export const StyledCheckout = styled.section`
  padding: ${pxTorem(40)} ${pxTorem(16)};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(40)};

  form {
    > div {
      > * {
        flex: 1;
        width: 100%;
      }
    }
  }
`;

export const StyledCheckoutField = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(24)};
  background-color: var(--col-100);
  border-radius: var(--border-radius);
  padding: ${pxTorem(24)} ${pxTorem(16)};
  border: none;
  div {
    width: 100%;
  }
  > div {
    padding: 0 ${pxTorem(16)};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pxTorem(16)};
  }
`;

export const StyledFieldGrid = styled.div<{ $gap: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gap }) => pxTorem($gap)};
`;
