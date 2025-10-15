"use client";
import ProductDetails from "@/components/ProductDetails";
import ProductOverview from "@/components/ProductOverview";
import { MainContainer } from "@/styles/components/ui.Styles";
import { PRODUCTS } from "@/utils/data";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ productId: string }> }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState<(typeof PRODUCTS)[0] | null>(null);
  const resolvedParams = React.use(params);
  const id = resolvedParams.productId;

  useEffect(() => {
    setProduct(PRODUCTS.find((p) => p.id === id) || null);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <MainContainer $variant="secondary">
      <ProductOverview
        product={product}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <ProductDetails product={product} />
    </MainContainer>
  );
};

export default Page;
