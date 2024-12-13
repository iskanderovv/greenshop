import { baseUrl } from "@/lib/utils";

const token = localStorage.getItem("token") || null;

export async function getCategories() {
  try {
    const response = await fetch(`${baseUrl}/categories?page=1&limit=9`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return await data;
  } catch (error) {
    return { message: "Failed to fetch categories", error };
  }
}

export async function getAllProducts() {
  try {
    const response = await fetch(`${baseUrl}/products?page=1&limit=10`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await response.json();
  } catch (error) {
    return { message: "Failed to fetch categories", error };
  }
}

export async function getWishlists() {
  try {
    const response = await fetch(`${baseUrl}/wishlist?page=1&limit=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      
    });

    if (!response.ok) {
      throw new Error("Failed to fetch wishlists");
    }

    return await response.json();
  } catch (error) {
    return { message: "Failed to fetch wishlists", error };
  }
}

export async function getCartProducts() {
  try {
    const response = await fetch(`${baseUrl}/basket?page=1&limit=30`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      
    });

    if (!response.ok) {
      throw new Error("Failed to fetch wishlists");
    }

    return await response.json();
  } catch (error) {
    return { message: "Failed to fetch wishlists", error };
  }
}

