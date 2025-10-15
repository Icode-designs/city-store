import {
  CustomButton,
  ProductCard,
  ProductSection,
} from "@/styles/components/ui.Styles";
import { PRODUCTS } from "@/utils/data";
import formatNairaToUSD from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import React from "react";
import Card from "./ui/Card";

const BestDeal = () => {
  return (
    <ProductSection $variant={undefined}>
      <div>
        <h2>Best Deals</h2>
        <span>
          <p></p>
        </span>
      </div>
      <div>
        {PRODUCTS.map((item, i) => (
          <Card key={i}>
            <img src={item.image[0]} alt={item.title} />
            <article>
              <h3>{item.title}</h3>
              <p>{numberToStars(item.rating)}</p>
              <p>{formatNairaToUSD(item.price)}</p>
            </article>
            <Link href={`/products/${item.id}`}>
              <CustomButton $variant="extended">Add to cart</CustomButton>
            </Link>
          </Card>
        ))}
      </div>
    </ProductSection>
  );
};

export default BestDeal;
