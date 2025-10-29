"use client";
import {
  CustomButton,
  ProductSection,
  ProductsGrid,
} from "@/styles/components/ui.Styles";
import formatNairaToUSD from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import Card from "./Card";
import { useContext } from "react";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

const FlashSale = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productsCtx = useContext(PRODUCTS_CONTEXT);

  if (!productsCtx) {
    return;
  }

  const { loading, products, error } = productsCtx;
  const saleProducts =
    !loading && !error ? products?.filter((product, i) => i <= 7) : [];

  const handleAddToCart = ({
    title,
    id,
    price,
    url,
  }: Omit<CartItem, "quantity">) => {
    dispatch(addToCart({ title, id, url, price, quantity: 1 }));
  };

  return (
    <ProductSection $variant="flash-sale">
      <div>
        <h2>Flash Sale</h2>
        <span>
          <p></p>
        </span>
      </div>
      <ProductsGrid>
        {loading && <p>Loading products...</p>}

        {/* Error state */}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {saleProducts?.map((item, i) => (
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
      </ProductsGrid>
    </ProductSection>
  );
};

export default FlashSale;
