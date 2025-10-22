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

const Page = ({ params }: { params: Promise<{ category: string }> }) => {
  const resolvedParams = use(params);
  const category = resolvedParams.category;

  const productsCtx = useContext(PRODUCTS_CONTEXT);
  const filterCtx = useContext(FILTER_CONTEXT);
  const [products, setProducts] = useState(productsCtx?.products || []);

  // Normalize category (convert dashes to spaces, lowercase)
  const normalizedCategory = category.toLowerCase().replace(/-/g, " ");

  useEffect(() => {
    if (!productsCtx || !filterCtx) return;

    const { filters } = filterCtx;
    const allProducts = productsCtx.products || [];

    let filtered = [...allProducts];

    // Filter by category from URL
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === normalizedCategory
    );

    // Filter by selected categories (from filter UI)
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice));
    }

    // Filter by rating
    if (filters.rating.length > 0) {
      filtered = filtered.filter((p) => {
        const prodRating = Math.round(Number(p.rating));
        if (Number.isNaN(prodRating)) return false;
        return filters.rating.includes(prodRating);
      });
    }

    // Filter by search term (should always run)
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(({ title, category }) =>
        [title, category].some((field) => field.toLowerCase().includes(term))
      );
    }

    setProducts(filtered);
  }, [filterCtx, productsCtx, normalizedCategory]);

  if (!productsCtx || !filterCtx) return null;

  const displayCategory =
    normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);

  return (
    <MainContainer>
      <StyledProductsList>
        <FlexBox $justifyContent="space-between">
          <h1>{displayCategory} Products</h1>
        </FlexBox>

        <ProductsGrid>
          {products.length === 0 ? (
            <p>No products found matching your filters.</p>
          ) : (
            products.map((item, i) => (
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
