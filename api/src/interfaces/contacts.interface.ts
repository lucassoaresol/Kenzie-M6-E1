import { IEmailRequest, IEmailResponse } from './email.interfaces';
import { IPhoneRequest, IPhoneResponse } from './phone.interfaces';

export interface IContactRequest {
  fullName: string;
  listEmail: Array<IEmailRequest>;
  listPhoneNumber: Array<IPhoneRequest>;
}

export interface IContactUpdateRequest {
  fullName: string;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  listEmail: Array<IEmailResponse>;
  listPhoneNumber: Array<IPhoneResponse>;
  createdAt: Date;
}
