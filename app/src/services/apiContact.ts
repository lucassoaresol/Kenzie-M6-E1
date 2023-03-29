import { FieldValues } from "react-hook-form";
import { api } from "./api";
import { iEmail, iPhoneNumber } from "./apiUser";

export interface iContact {
  id: string;
  fullName: string;
  username?: string;
  listEmail: Array<iEmail>;
  listPhoneNumber: Array<iPhoneNumber>;
  createdAt: Date;
}

export async function postContactCreate(token: string, data: FieldValues) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  return await api.post("contacts", data);
}

export async function postContactCreateEmail(
  token: string,
  data: FieldValues,
  id: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  return await api.post(`contacts/${id}/email`, data);
}

export async function postContactCreatePhone(
  token: string,
  data: FieldValues,
  id: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  return await api.post(`contacts/${id}/phone`, data);
}

export async function patchContact(
  token: string,
  dataPatch: FieldValues,
  id: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch(`contacts/${id}`, dataPatch);
  return data;
}

export async function patchEmailContact(
  token: string,
  dataPatch: FieldValues,
  contactId: string,
  emailId: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch(
    `contacts/${contactId}/email/${emailId}`,
    dataPatch
  );
  return data;
}

export async function patchPhoneContact(
  token: string,
  dataPatch: FieldValues,
  contactId: string,
  phoneId: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch(
    `contacts/${contactId}/phone/${phoneId}`,
    dataPatch
  );
  return data;
}

export async function deleteContact(id: string, token: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete(`contacts/${id}`);
}

export async function deleteEmailContact(
  token: string,
  contactId: string,
  emailId: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete(`contacts/${contactId}/email/${emailId}`);
}

export async function deletePhoneContact(
  token: string,
  contactId: string,
  phoneId: string
) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete(`contacts/${contactId}/phone/${phoneId}`);
}
