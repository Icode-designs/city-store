"use client";
import { ProductCard } from "@/styles/components/ui.Styles";
import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface CardProps {
  children: React.ReactNode;
  variant?: string;
  key?: string | number;
}

const Card: React.FC<CardProps> = ({ children, variant }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  function toggleFavourite() {
    setIsFavourite((prev) => !prev);
  }
  return (
    <ProductCard $variant={variant}>
      {variant !== "categories" && (
        <button onClick={toggleFavourite} className="favourite">
          {!isFavourite ? (
            <IoMdHeartEmpty color="red" />
          ) : (
            <IoMdHeart color="red" />
          )}
        </button>
      )}

      {children}
    </ProductCard>
  );
};

export default Card;
