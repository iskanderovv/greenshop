import { baseUrl } from "@/lib/utils";

export async function registerUser(data: any) {
  try {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
}
export async function verifyEmail(email: string, code: string) {
  try {
    const response = await fetch(
      `${baseUrl}/users/verify?email=${email}&code=${code}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (error) {
    return error;
  }
}
export async function loginUser(data: any) {
  try {
    const response = await fetch(
      `${baseUrl}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return await response.json();
  } catch (error) {
    return error;
  }
}