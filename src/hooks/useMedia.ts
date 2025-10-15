"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (query: number): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkScreen = () => setMatches(window.innerWidth >= query);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [query]);

  return matches;
};

export default useMediaQuery;
