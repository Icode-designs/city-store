import {
  ProductImgBox,
  ProductInfoBox,
  ProductOverviewBox,
} from "@/styles/components/productDetails";
import { CustomButton, FlexBox } from "@/styles/components/ui.Styles";
import { PRODUCTS } from "@/utils/data";
import { numberToStars, sumRatings } from "@/utils/ratings";
import React from "react";

interface Props {
  product: (typeof PRODUCTS)[0];
  activeImage: number;
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductOverview = ({ product, activeImage, setActiveImage }: Props) => {
  return (
    <ProductOverviewBox>
      <FlexBox $gap={50} $variant="secondary">
        <ProductImgBox>
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
            <CustomButton $variant="extended">Add to cart</CustomButton>
            <CustomButton $variant="extended">Buy now</CustomButton>
          </FlexBox>
        </ProductInfoBox>
      </FlexBox>
    </ProductOverviewBox>
  );
};

export default ProductOverview;
