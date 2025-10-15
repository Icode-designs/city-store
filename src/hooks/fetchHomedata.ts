"use client";
import supabase from "@/lib/supabaseClient";
import { HomePageData } from "@/types/pageDataTypes";
import { useEffect, useState } from "react";

const useFetchHomeData = () => {
  const [homepageData, setHomepageData] = useState<HomePageData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("homePage").select("*");
      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        setHomepageData(data[0] as HomePageData);
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error("Unknown error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { homepageData, loading, error };
};

export default useFetchHomeData;
