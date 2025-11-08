import { ProductSection, ProductsGrid } from "@/styles/components/ui.Styles";
import { CATEGORIES } from "@/utils/imageImport";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Categories = () => {
  const categories = Object.entries(CATEGORIES);
  return (
    <ProductSection $variant="categories">
      <div>
        <h2>Categories</h2>
      </div>
      <ProductsGrid>
        {categories.map(([name, image]) => (
          <Card variant="categories" key={name}>
            <Link href={`/products/products-list/${name.toLowerCase()}`}>
              <img src={image.src} alt={name} loading="lazy" />
              <article>
                <p>{name}</p>
              </article>
            </Link>
          </Card>
        ))}
      </ProductsGrid>
    </ProductSection>
  );
};

export default Categories;
