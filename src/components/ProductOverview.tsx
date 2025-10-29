"use client";
import { addToCart, CartItem } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import {
  ProductImgBox,
  ProductInfoBox,
  ProductOverviewBox,
} from "@/styles/components/productDetails";
import { CustomButton, FlexBox } from "@/styles/components/ui.Styles";
import { PRODUCTS } from "@/utils/data";
import { numberToStars, sumRatings } from "@/utils/ratings";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  product: (typeof PRODUCTS)[0];
  activeImage: number;
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductOverview = ({ product, activeImage, setActiveImage }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = ({
    title,
    id,
    price,
    url,
  }: Omit<CartItem, "quantity">) => {
    dispatch(addToCart({ title, url, id, price, quantity: 1 }));
  };
  return (
    <ProductOverviewBox>
      <FlexBox $gap={50} $variant="secondary">
        <ProductImgBox>
          <FlexBox $gap={16} $variant="secondary">
            <div>
              {product.image.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={i === activeImage ? "active" : ""}
                >
                  <img src={image} alt={product.title} />
                </div>
              ))}
            </div>
            <img src={product.image[activeImage]} alt={product.title} />
          </FlexBox>
        </ProductImgBox>

        <ProductInfoBox>
          <h1>{product.title}</h1>
          <FlexBox $gap={10} $justifyContent="center">
            <FlexBox $justifyContent="right">
              {numberToStars(product.rating)}
            </FlexBox>
            <p>{sumRatings(product.rating)} reviews</p>
          </FlexBox>
          <p>{product.description}</p>
          <FlexBox $gap={16}>
            <CustomButton
              $variant="extended"
              onClick={() =>
                handleAddToCart({
                  title: product.title,
                  id: product.id,
                  price: product.price,
                  url: product.image[0],
                })
              }
            >
              Add to cart
            </CustomButton>
            <CustomButton $variant="extended">Buy now</CustomButton>
          </FlexBox>
        </ProductInfoBox>
      </FlexBox>
    </ProductOverviewBox>
  );
};

export default ProductOverview;
