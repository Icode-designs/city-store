import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

interface HomePageData {
  id: number;
  created_at: Timestamp;
  heroText: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export type { HomePageData };
