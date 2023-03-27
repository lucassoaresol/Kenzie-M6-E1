import { FieldValues } from "react-hook-form";
import { api } from "./api";

export async function postUserCreate(data: FieldValues) {
  return await api.post("users", data);
}
