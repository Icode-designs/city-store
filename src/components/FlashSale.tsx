"use client";
import { CustomButton, ProductSection } from "@/styles/components/ui.Styles";
import formatNairaToUSD from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import Card from "./Card";
import { useContext } from "react";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";

const FlashSale = () => {
  const productsCtx = useContext(PRODUCTS_CONTEXT);

  if (!productsCtx) {
    return;
  }

  const { loading, products, error } = productsCtx;
  const saleProducts =
    !loading && !error ? products?.filter((product, i) => i <= 7) : [];

  console.log(saleProducts);

  return (
    <ProductSection $variant="flash-sale">
      <div>
        <h2>Flash Sale</h2>
        <span>
          <p></p>
        </span>
      </div>
      <div>
        {loading && <p>Loading products...</p>}

        {/* Error state */}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {saleProducts?.map((item, i) => (
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
      </div>
    </ProductSection>
  );
};

export default FlashSale;
