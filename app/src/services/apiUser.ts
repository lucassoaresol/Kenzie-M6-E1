import { FieldValues } from "react-hook-form";
import { api } from "./api";

export interface iUser {
  id: string;
  fullName: string;
  username: string;
  listEmail: [{ id: string; email: string }];
  listPhoneNumber: [{ id: string; phoneNumber: string }];
  contacts: [
    {
      id: string;
      fullName: string;
      listEmail: [{ id: string; email: string }];
      listPhoneNumber: [{ id: string; phoneNumber: string }];
      createdAt: Date;
    }
  ];
  createdAt: Date;
}

export async function postUserCreate(data: FieldValues) {
  return await api.post("users", data);
}

export async function getUser(token: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<iUser>("users");
  return data;
}
