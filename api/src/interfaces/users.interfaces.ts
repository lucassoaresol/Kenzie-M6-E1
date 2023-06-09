import { IContactResponse } from './contacts.interface';
import { IEmailRequest, IEmailResponse } from './email.interfaces';
import { IPhoneRequest, IPhoneResponse } from './phone.interfaces';

export interface IReqUser {
  id: string;
}

export interface IUserRequest {
  fullName: string;
  username: string;
  password: string;
  listEmail: Array<IEmailRequest>;
  listPhoneNumber: Array<IPhoneRequest>;
}

export interface IUserUpdateRequest {
  fullName?: string;
  username?: string;
}

export interface IUserUpdatePasswordRequest {
  oldPassword: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  username: string;
  listEmail: Array<IEmailResponse>;
  listPhoneNumber: Array<IPhoneResponse>;
  contacts: Array<IContactResponse>;
  createdAt: Date;
}
