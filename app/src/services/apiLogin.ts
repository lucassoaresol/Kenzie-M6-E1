import { FieldValues } from "react-hook-form";
import { api } from "./api";

export interface iLogin {
  token: string;
}

export async function postLogin(data: FieldValues): Promise<iLogin> {
  const { data: response } = await api.post<iLogin>("login", data);
  return response;
}
