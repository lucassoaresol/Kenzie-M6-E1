import { FieldValues } from "react-hook-form";
import { api } from "./api";
import { iContact } from "./apiContact";

export interface iEmailandPhoneNumber {
  id: string;
  email?: string;
  phoneNumber?: string;
}

export interface iEmail {
  id: string;
  email: string;
}

export interface iPhoneNumber {
  id: string;
  phoneNumber: string;
}

export interface iUser {
  id: string;
  fullName: string;
  username: string;
  listEmail: Array<iEmail>;
  listPhoneNumber: Array<iPhoneNumber>;
  contacts: Array<iContact>;
  createdAt: Date;
}

export interface iUserUpdate {
  id: string;
  fullName: string;
  username: string;
  createdAt: Date;
}

export async function postUserCreate(data: FieldValues) {
  return await api.post("users", data);
}

export async function postUserCreateEmail(token: string, data: FieldValues) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  return await api.post("users/email", data);
}

export async function postUserCreatePhone(token: string, data: FieldValues) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  return await api.post("users/phone", data);
}

export async function getUser(token: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<iUser>("users");
  return data;
}

export async function patchUser(token: string, dataPatch: FieldValues) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch<iUserUpdate>("users", dataPatch);
  return data;
}

export async function patchEmailUser(
  token: string,
  dataPatch: FieldValues,
  id: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch<iUserUpdate>(`users/email/${id}`, dataPatch);
  return data;
}

export async function patchPhoneUser(
  token: string,
  dataPatch: FieldValues,
  id: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch<iUserUpdate>(`users/phone/${id}`, dataPatch);
  return data;
}

export async function patchPassword(token: string, dataPatch: FieldValues) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch<iUserUpdate>("users/password", dataPatch);
  return data;
}

export async function deleteUser(token: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete("users");
}

export async function deleteEmailUser(token: string, id: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete(`users/email/${id}`);
}

export async function deletePhoneUser(token: string, id: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete(`users/phone/${id}`);
}
