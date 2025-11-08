"use client";
import { createContext, useState } from "react";
import type PRODUCT from "@/types/productsType";

interface PROVIDER_TYPE {
  children: React.ReactNode;
  initialProducts: PRODUCT[];
}

interface CONTEXT_TYPE {
  products: PRODUCT[];
}

export const PRODUCTS_CONTEXT = createContext<CONTEXT_TYPE | undefined>(
  undefined
);

const ProductsContextProvider = ({
  children,
  initialProducts,
}: PROVIDER_TYPE) => {
  const [products] = useState(initialProducts);

  const provision: CONTEXT_TYPE = {
    products,
  };

  return (
    <PRODUCTS_CONTEXT.Provider value={provision}>
      {children}
    </PRODUCTS_CONTEXT.Provider>
  );
};

export default ProductsContextProvider;
