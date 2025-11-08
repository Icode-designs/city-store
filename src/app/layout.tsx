import type { Metadata } from "next";
import { Italianno, Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/global.styles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsContextProvider from "@/providers/productsProvider";
import NewsLetter from "@/components/NewsLetter";
import FilterContextProvider from "@/providers/filterProvider";
import Providers from "@/providers/ReduxProvider";
import useMediaQuery from "@/hooks/useMedia";
import MobileNav from "@/components/MobileNav";
import { fetchProducts } from "@/utils/fetchAllProducts";

const italianno = Italianno({
  variable: "--font-italiano",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "City Store | E-commerce",
  description: "Your one-stop shop for everything Electronics and Gadgets",
  keywords: ["e-commerce", "electronics"],
  creator: "Osakwe Bonaventure Ifechukwu",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await fetchProducts();
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />

            <ProductsContextProvider initialProducts={products}>
              <FilterContextProvider>
                <Header />
                {children}
              </FilterContextProvider>
            </ProductsContextProvider>
            <NewsLetter />
            <MobileNav />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
