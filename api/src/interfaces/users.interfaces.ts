import { IEmailResponse } from './email.interfaces';
import { IPhoneResponse } from './phone.interfaces';

export interface IReqUser {
  id: string;
}

export interface IUserRequest {
  fullName: string;
  username: string;
  password: string;
}

export interface IUserUpdateRequest {
  fullName?: string;
  username?: string;
  password?: string;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  username: string;
  listEmail: Array<IEmailResponse>;
  listPhoneNumber: Array<IPhoneResponse>;
}
