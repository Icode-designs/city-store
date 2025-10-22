"use client";
import { createContext, useState } from "react";

interface FilterValues {
  categories: string[];
  minPrice: string;
  maxPrice: string;
  rating: number[];
  searchTerm?: string; // 🔹 new
}

interface FilterContextType {
  handleSubmit: (formData: FormData) => Promise<void>;
  filters: FilterValues;
  updateSearchTerm: (term: string) => void;
  resetFilters: () => void;
}

export const FILTER_CONTEXT = createContext<FilterContextType | null>(null);

const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterValues>({
    categories: [],
    minPrice: "",
    maxPrice: "",
    rating: [],
    searchTerm: "",
  });

  async function handleSubmit(formData: FormData) {
    const categories = formData.getAll("categories").map((v) => v.toString());

    const minPrice = formData.get("min")?.toString() ?? "";
    const maxPrice = formData.get("max")?.toString() ?? "";

    const ratingEntries = formData.getAll("stars").map((v) => v.toString());

    const numberRating = ratingEntries
      .map((r) => Math.round(Number(r)))
      .filter((n) => !Number.isNaN(n));

    const result: FilterValues = {
      categories,
      minPrice,
      maxPrice,
      rating: numberRating,
    };

    setFilters(result);
  }

  const updateSearchTerm = (term: string) => {
    setFilters((prev) => ({ ...prev, searchTerm: term }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      minPrice: "",
      maxPrice: "",
      rating: [],
      searchTerm: "",
    });
  };

  const provision = {
    handleSubmit,
    filters,
    updateSearchTerm,
    resetFilters,
  };

  return (
    <FILTER_CONTEXT.Provider value={provision}>
      {children}
    </FILTER_CONTEXT.Provider>
  );
};

export default FilterContextProvider;
