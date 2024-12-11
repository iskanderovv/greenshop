import { baseUrl } from "@/lib/utils";

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
