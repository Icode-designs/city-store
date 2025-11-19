"use client";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import { CustomButton, ProductCard } from "@/styles/components/ui.Styles";
import PRODUCT from "@/types/productsType";
import formatToNaira from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";

interface CardProps {
  children?: React.ReactNode;
  variant?: string;
  key?: string | number;
  product?: PRODUCT;
}

const Card: React.FC<CardProps> = ({ children, variant, product }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  function toggleFavourite() {
    setIsFavourite((prev) => !prev);
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
    <ProductCard $variant={variant}>
      {variant !== "categories" && (
        <>
          <button onClick={toggleFavourite} className="favourite">
            {!isFavourite ? (
              <IoMdHeartEmpty color="red" />
            ) : (
              <IoMdHeart color="red" />
            )}
          </button>
          <Link href={`/products/product-details/${product?.id}`}>
            <Image
              width={500}
              height={500}
              src={product?.image[0] as string}
              alt={product?.title as string}
              loading="lazy"
            />
            <article>
              <p>{product?.title}</p>
              <p>{numberToStars(product?.rating)}</p>
              <h3>{formatToNaira(product?.price as number)}</h3>
            </article>
          </Link>
          <CustomButton
            onClick={() =>
              handleAddToCart({
                title: product?.title as string,
                id: product?.id as string,
                price: product?.price as number,
                url: product?.image[0] as string,
              })
            }
            $variant="extended"
          >
            Add to cart
          </CustomButton>
        </>
      )}

      {children}
    </ProductCard>
  );
};

export default Card;
