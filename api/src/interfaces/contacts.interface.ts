export interface IContactRequest {
  fullName: string;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  createdAt: Date;
}
