import { IEmailResponse } from './email.interfaces';

export interface IContactRequest {
  fullName: string;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  listEmail: Array<IEmailResponse>;
  createdAt: Date;
}
