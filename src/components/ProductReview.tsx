"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ProductSpecs,
  TabButton,
  AnimatedRating,
  CustomerReviews,
} from "@/styles/components/productDetails";
import { FlexBox } from "@/styles/components/ui.Styles";
import { PRODUCTS } from "@/utils/data";
import { FaRegStar, FaStar } from "react-icons/fa";
import ReviewInput from "./ReviewInput";

interface Props {
  product: (typeof PRODUCTS)[0];
}

const ProductReview = ({ product }: Props) => {
  const [activeTab, setActiveTab] = useState<"specs" | "description">(
    "description"
  );

  const slideVariants = {
    initial: (direction: "left" | "right") => ({
      x: direction === "left" ? 100 : -100,
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
  };

  const rating = Object.entries(product.rating);
  const total = rating.reduce((acc, current) => acc + current[1], 0);

  const direction = activeTab === "description" ? "left" : "right";

  function returnStars(starsCount: number) {
    const stars = [];

    // Filled stars
    for (let i = 0; i < starsCount; i++) {
      stars.push(<FaStar key={`filled-${i}`} color="#FFD700" />);
    }

    // Empty stars
    for (let i = starsCount; i < 5; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#FFD700" />);
    }

    return stars;
  }
  return (
    <ProductSpecs>
      {/* Tabs */}
      <FlexBox $gap={24}>
        <TabButton
          $active={activeTab === "specs"}
          onClick={() => setActiveTab("specs")}
        >
          Rating Details
        </TabButton>
        <TabButton
          $active={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        >
          Reviews
        </TabButton>
      </FlexBox>

      {/* Animated content */}
      <AnimatedRating>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "description" ? (
              <CustomerReviews>
                {product.customerReviews.map((review, i) => (
                  <article key={i}>
                    <p>{review.comment}</p>
                    <ul>
                      {returnStars(review.stars).map((star, i) => (
                        <li key={i}>{star}</li>
                      ))}
                    </ul>
                    <h3>{review.user}</h3>
                  </article>
                ))}
              </CustomerReviews>
            ) : (
              <ul>
                {rating.reverse().map((amt, index) => (
                  <li key={index}>
                    <FlexBox $justifyContent="space-between" $gap={10}>
                      {amt[0]}
                      <progress value={(amt[1] / total) * 100} max={100} />
                      <p>{((amt[1] / total) * 100).toFixed(2)}%</p>
                    </FlexBox>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </AnimatedRating>
      <ReviewInput />
    </ProductSpecs>
  );
};

export default ProductReview;
