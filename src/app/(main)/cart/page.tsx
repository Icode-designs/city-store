"use client";
"@/store/store";
import CartItemList from "@/components/CartItemList";
import OrderSummary from "@/components/OrderSummary";
import { StyledCartWrapper } from "@/styles/components/cart.styles";
import { MainContainer, CustomButton } from "@/styles/components/ui.Styles";
import React from "react";

const page = () => {
  return (
    <MainContainer>
      <StyledCartWrapper>
        <CartItemList />
        <div>
          <OrderSummary />
          <CustomButton $variant="extended">Check Out</CustomButton>
        </div>
      </StyledCartWrapper>
    </MainContainer>
  );
};

export default page;
