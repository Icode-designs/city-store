import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import ProductsContextProvider from "@/providers/productsProvider";
import { fetchProducts } from "@/utils/fetchAllProducts";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  const headerObj = await headers();
  const currentPath = headerObj.get("x-invoke-path") ?? "/";

  if (!session) {
    redirect(`/login?from=${encodeURIComponent(currentPath)}`);
  }
  const products = await fetchProducts();
  return (
    <>
      <ProductsContextProvider initialProducts={products}>
        <Header />
        {children}
        <MobileNav />
      </ProductsContextProvider>
    </>
  );
}
