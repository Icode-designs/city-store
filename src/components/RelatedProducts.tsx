"use client";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import { CustomButton, ProductSection } from "@/styles/components/ui.Styles";
import React, { useContext } from "react";
import Card from "./Card";
import Link from "next/link";
import { numberToStars } from "@/utils/ratings";
import formatNairaToUSD from "@/utils/formatPrice";

interface PROPS {
  id: string;
}

const RelatedProducts = ({ id }: PROPS) => {
  const productsCtx = useContext(PRODUCTS_CONTEXT);

  if (!productsCtx) {
    return;
  }

  const { loading, products, error } = productsCtx;
  const relatedProducts = products?.filter((item) => item.id === id);
  return (
    <ProductSection>
      <div>Related products</div>
      <div>
        {!loading &&
          !error &&
          relatedProducts?.map((item, i) => (
            <Card key={i}>
              <img src={item.image[0]} alt={item.title} />
              <article>
                <p>{item.title}</p>
                <p>{numberToStars(item.rating)}</p>
                <h3>{formatNairaToUSD(item.price)}</h3>
              </article>
              <Link href={`/products/${item.id}`}>
                <CustomButton $variant="extended">Add to cart</CustomButton>
              </Link>
            </Card>
          ))}

        {error && (
          <p>
            an error occured please check your internet connection and try
            again...
          </p>
        )}
      </div>
    </ProductSection>
  );
};

export default RelatedProducts;
