"use client";
import Card from "@/components/Card";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import { StyledProductsList } from "@/styles/components/productsList";
import {
  CustomButton,
  FlexBox,
  MainContainer,
  ProductsGrid,
} from "@/styles/components/ui.Styles";
import formatNairaToUSD from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productsCtx = useContext(PRODUCTS_CONTEXT);
  const [products, setProducts] = useState(productsCtx?.products || []);

  // Add this effect to update products when context changes
  useEffect(() => {
    if (productsCtx?.products) {
      setProducts(productsCtx.products);
    }
  }, [productsCtx?.products]);

  // Add loading state handling
  if (productsCtx?.loading) {
    return <p>Loading products...</p>;
  }

  if (productsCtx?.error) {
    return <p>Error loading products: {productsCtx.error}</p>;
  }

  const handleAddToCart = ({
    title,
    id,
    price,
    url,
  }: Omit<CartItem, "quantity">) => {
    dispatch(addToCart({ title, id, url, price, quantity: 1 }));
  };
  return (
    <MainContainer>
      <StyledProductsList>
        <FlexBox $justifyContent="space-between">
          <h1>Products</h1>
        </FlexBox>

        <ProductsGrid>
          {products.length === 0 ? (
            <p>No products found matching your filters.</p>
          ) : (
            products.map((item, i) => (
              <Card key={i}>
                <Link href={`/products/products-details/${item.id}`}>
                  <img src={item.image[0]} alt={item.title} />
                  <article>
                    <p>{item.title}</p>
                    <p>{numberToStars(item.rating)}</p>
                    <h3>{formatNairaToUSD(item.price)}</h3>
                  </article>
                </Link>
                <CustomButton
                  onClick={() =>
                    handleAddToCart({
                      title: item.title,
                      id: item.id,
                      price: item.price,
                      url: item.image[0],
                    })
                  }
                  $variant="extended"
                >
                  Add to cart
                </CustomButton>
              </Card>
            ))
          )}
        </ProductsGrid>
      </StyledProductsList>
    </MainContainer>
  );
};

export default Page;
