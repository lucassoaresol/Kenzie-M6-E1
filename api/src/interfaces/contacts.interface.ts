import { IEmailResponse } from './email.interfaces';
import { IPhoneResponse } from './phone.interfaces';

export interface IContactRequest {
  fullName: string;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  listEmail: Array<IEmailResponse>;
  listPhoneNumber: Array<IPhoneResponse>;
  createdAt: Date;
}
