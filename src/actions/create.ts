import { baseUrl } from "@/lib/utils";
import { mutate } from "swr";


const token = localStorage.getItem("token") || null;

export async function addToFavorite(id: string) {
  try {
    const response = await fetch(`${baseUrl}/like/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function addToCart(id: string) {
  try {
    const response = await fetch(`${baseUrl}/basket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId: id }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch wishlists");
    }

    const data = await response.json();

    mutate(`${baseUrl}/basket`);

    return data;
  } catch (error) {
    return { message: "Failed to fetch wishlists", error };
  }
}

