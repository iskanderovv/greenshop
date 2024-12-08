import { FormValues } from "@/types";

export default function login(data: FormValues) {
  try {
    if (data.username === "admin" && data.password === "admin") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}
