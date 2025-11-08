"use client";
import {
  CustomButton,
  ProductSection,
  ProductsGrid,
} from "@/styles/components/ui.Styles";
import formatToNaira from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import React, { useContext } from "react";
import Card from "./Card";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

const BestDeal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productsCtx = useContext(PRODUCTS_CONTEXT);

  if (!productsCtx) {
    return;
  }

  const { products } = productsCtx;

  const handleAddToCart = ({
    title,
    id,
    price,
    url,
  }: Omit<CartItem, "quantity">) => {
    dispatch(addToCart({ title, id, url, price, quantity: 1 }));
  };

  return (
    <ProductSection $variant={undefined}>
      <div>
        <h2>Best Deals</h2>
        <span>
          <p></p>
        </span>
      </div>
      <ProductsGrid>
        {products?.map((item, i) => (
          <Card key={i}>
            <Link href={`/products/product-details/${item.id}`}>
              <img src={item.image[0]} alt={item.title} />
              <article>
                <p>{item.title}</p>
                <p>{numberToStars(item.rating)}</p>
                <h3>{formatToNaira(item.price)}</h3>
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
        ))}
      </ProductsGrid>
    </ProductSection>
  );
};

export default BestDeal;
