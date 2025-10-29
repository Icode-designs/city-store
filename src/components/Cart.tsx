import { CartContainer } from "@/styles/components/header";
import Link from "next/link";
import React from "react";
import { FaOpencart } from "react-icons/fa";

interface Props {
  totalQty: number;
}

const Cart = ({ totalQty }: Props) => {
  return (
    <Link href="/cart">
      <CartContainer>
        <div className="amount">
          <p>{totalQty}</p>
        </div>
        <FaOpencart size={24} color="var(--col-000)" />
      </CartContainer>
    </Link>
  );
};

export default Cart;
