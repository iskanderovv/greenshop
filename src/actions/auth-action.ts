"use server";

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

    if (!response.ok) {
      throw new Error("Registration failed!");
    }

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

    if (!response.ok) {
      throw new Error("Verification failed!");
    }

    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function loginUser(data: any) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed!");
    }

    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function forgotPassword(email: string) {
  try {
    const response = await fetch(`${baseUrl}/forgot/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Email not sent!");
    }

    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function setNewPassword(data: any) {
  try {
    const response = await fetch(`${baseUrl}/reset-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Password reset failed!");
    }

    return await response.json();
  } catch (error) {
    return error;
  }
}
