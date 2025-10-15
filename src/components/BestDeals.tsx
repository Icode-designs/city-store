import { ProductCard, ProductSection } from "@/styles/components/ui.Styles";
import { PRODUCTS } from "@/utils/data";
import formatNairaToUSD from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import React from "react";

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
          <Link key={i} href={`/products/${item.id}`}>
            {" "}
            <ProductCard>
              <img src={item.image[0]} alt={item.title} />
              <article>
                <h3>{item.title}</h3>
                <p>{numberToStars(item.rating)}</p>
                <p>{formatNairaToUSD(item.price)}</p>
              </article>
            </ProductCard>
          </Link>
        ))}
      </div>
    </ProductSection>
  );
};

export default BestDeal;
