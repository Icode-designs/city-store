import { ProductSection } from "@/styles/components/ui.Styles";
import { CATEGORIES } from "@/utils/imageImport";
import { object } from "framer-motion/client";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const Categories = () => {
  const categories = Object.entries(CATEGORIES);
  return (
    <ProductSection $variant="categories">
      <div>
        <h2>Categories</h2>
      </div>
      <div>
        {categories.map(([name, image]) => (
          <Card variant="categories" key={name}>
            <img src={image.src} alt={name} loading="lazy" />
            <article>
              <p>{name}</p>
            </article>
          </Card>
        ))}
      </div>
    </ProductSection>
  );
};

export default Categories;
