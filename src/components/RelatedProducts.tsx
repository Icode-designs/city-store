"use client";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import {
  CustomButton,
  ProductSection,
  ProductsGrid,
} from "@/styles/components/ui.Styles";
import React, { useContext } from "react";
import Card from "./Card";
import Link from "next/link";
import { numberToStars } from "@/utils/ratings";
import formatNairaToUSD from "@/utils/formatPrice";
import PRODUCT from "@/types/productsType";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

interface PROPS {
  product: PRODUCT;
}

const RelatedProducts = ({ product }: PROPS) => {
  const dispatch = useDispatch<AppDispatch>();
  const productsCtx = useContext(PRODUCTS_CONTEXT);

  if (!productsCtx) {
    return;
  }

  const { loading, products, error } = productsCtx;
  const relatedProducts = products?.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleAddToCart = ({
    title,
    id,
    price,
    url,
  }: Omit<CartItem, "quantity">) => {
    dispatch(addToCart({ title, id, url, price, quantity: 1 }));
  };

  return (
    <ProductSection>
      <div>Related products</div>
      <ProductsGrid>
        {!loading &&
          !error &&
          relatedProducts?.map((item, i) => (
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
          ))}

        {error && (
          <p>
            an error occured please check your internet connection and try
            again...
          </p>
        )}
      </ProductsGrid>
    </ProductSection>
  );
};

export default RelatedProducts;
