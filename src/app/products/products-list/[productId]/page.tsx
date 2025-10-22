"use client";
import Card from "@/components/Card";
import { FILTER_CONTEXT } from "@/providers/filterProvider";
import { PRODUCTS_CONTEXT } from "@/providers/productsProvider";
import { StyledProductsList } from "@/styles/components/productsList";
import {
  CustomButton,
  FlexBox,
  MainContainer,
  ProductsGrid,
} from "@/styles/components/ui.Styles";
import formatNairaToUSD from "@/utils/formatPrice";
import { numberToStars } from "@/utils/ratings";
import Link from "next/link";
import React, { use, useContext, useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ productId: string }> }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.productId;
  const productsCtx = useContext(PRODUCTS_CONTEXT);
  const filterCtx = useContext(FILTER_CONTEXT);
  const [products, setProducts] = useState(productsCtx?.products || []);

  //  Reset filter if path changess

  useEffect(() => {
    if (!productsCtx || !filterCtx) return;

    const { filters } = filterCtx;
    const allProducts = productsCtx.products || [];

    let filteredProducts = [...allProducts];

    //  Filter by category
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((prod) =>
        filters.categories.includes(prod.category.toLowerCase())
      );
    }

    //  Filter by price range
    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.price >= Number(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.price <= Number(filters.maxPrice)
      );
    }

    //  Filter by rating
    if (filters.rating.length > 0) {
      filteredProducts = filteredProducts.filter((prod) => {
        const prodRating = Math.round(Number(prod.rating));
        if (Number.isNaN(prodRating)) return false;
        return filters.rating.includes(prodRating);
      });

      //  Filter by search term
      if (filters.searchTerm) {
        filteredProducts = filteredProducts.filter((p) =>
          [p.title, p.category].some((field) =>
            field
              .toLowerCase()
              .includes(filters.searchTerm?.toLowerCase() as string)
          )
        );
      }
    }

    setProducts(filteredProducts);
  }, [filterCtx, productsCtx]);

  if (!productsCtx || !filterCtx) return null;

  //  sorting logic
  function sortProductsByIdAndCategory() {
    return products.sort((a, b) => {
      const mainProduct = products.find((item) => item.id === id);
      if (a.id === id) return -1;
      if (b.id === id) return 1;

      if (
        a.category === mainProduct?.category &&
        b.category !== mainProduct?.category
      )
        return -1;
      if (
        b.category === mainProduct?.category &&
        a.category !== mainProduct?.category
      )
        return 1;

      return 0;
    });
  }

  const sortedResult = sortProductsByIdAndCategory();

  return (
    <MainContainer>
      <StyledProductsList>
        <FlexBox $justifyContent="space-between">
          <h1>Products</h1>
        </FlexBox>

        <ProductsGrid>
          {sortedResult.length === 0 ? (
            <p>No products found matching your filters.</p>
          ) : (
            sortedResult.map((item, i) => (
              <Card key={i}>
                <Link href={`/products/products-details/${item.id}`}>
                  <img src={item.image[0]} alt={item.title} />
                  <article>
                    <p>{item.title}</p>
                    <p>{numberToStars(item.rating)}</p>
                    <h3>{formatNairaToUSD(item.price)}</h3>
                  </article>
                </Link>
                <CustomButton $variant="extended">Add to cart</CustomButton>
              </Card>
            ))
          )}
        </ProductsGrid>
      </StyledProductsList>
    </MainContainer>
  );
};

export default Page;
