import { ProductCard } from "@/styles/components/ui.Styles";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: string;
  key?: string | number;
}

const Card: React.FC<CardProps> = ({ children, variant }) => {
  return <ProductCard $variant={variant}>{children}</ProductCard>;
};

export default Card;
