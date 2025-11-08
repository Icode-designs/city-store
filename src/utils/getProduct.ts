import { db } from "@/lib/firebaseCl";
import { collection, doc, getDoc } from "firebase/firestore";
import type PRODUCT from "@/types/productsType";

export async function getProductById(
  productId: string
): Promise<PRODUCT | null> {
  try {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as PRODUCT;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default getProductById;
