"use client";
import { createContext, useEffect, useState } from "react";
import type PRODUCT from "@/types/productsType";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseCl";

interface PRODUCTSTATETYPE {
  error: null | string;
  loading: boolean;
  products: null | PRODUCT[];
}

export const PRODUCTS_CONTEXT = createContext<PRODUCTSTATETYPE | null>(null);

const ProductsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [productState, setProductState] = useState<PRODUCTSTATETYPE>({
    error: null,
    loading: false,
    products: [],
  });

  useEffect(() => {
    async function fetchProducts() {
      setProductState((prev) => ({ ...prev, loading: true }));

      try {
        const productsCollectionRef = collection(db, "products");
        const querySnapshot = await getDocs(productsCollectionRef);

        // Convert Firestore docs to plain objects
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<PRODUCT, "id">),
        }));

        setProductState({ error: null, loading: false, products });
      } catch (err) {
        // Instead of throwing, save the error to state
        const errorMessage = err instanceof Error ? err.message : String(err);
        setProductState({
          error: errorMessage,
          loading: false,
          products: null,
        });
      }
    }

    fetchProducts();
  }, []);

  const provision = {
    products: productState.products,
    loading: productState.loading,
    error: productState.error,
  };

  return (
    <PRODUCTS_CONTEXT.Provider value={provision}>
      {children}
    </PRODUCTS_CONTEXT.Provider>
  );
};

export default ProductsContextProvider;
