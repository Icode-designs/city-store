"use client";
import { MainContainer } from "@/styles/components/ui.Styles";
import { logoutUser } from "@/utils/auth";
import React from "react";
import { handleLogoutAction } from "./actions";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { clearCart } from "@/store/slices/cartSlice";

const Page = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      // Delete session cookie on server
      await handleLogoutAction();

      // Log out from Firebase
      await logoutUser();

      // Clear cart state
      dispatch(clearCart());

      // Redirect to home
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <MainContainer>
      <h1>user profile</h1>{" "}
      {user ? (
        <p>
          Welcome, {user.firstName} {user.lastName}
        </p>
      ) : (
        <p>No user logged in</p>
      )}
      <button onClick={handleLogout}>signout</button>
    </MainContainer>
  );
};

export default Page;
