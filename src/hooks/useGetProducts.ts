import { db } from "@/lib/firebaseCl";
import PRODUCT from "@/types/productsType";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
