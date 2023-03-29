import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IUserRequest,
  IUserResponse,
  IUserUpdatePasswordRequest,
  IUserUpdateRequest,
} from '../interfaces/users.interfaces';
import { contactResponserSerializer } from './contact.serializes';
import { emailResponserSerializer, emailSerializer } from './email.serializes';
import { phoneResponserSerializer, phoneSerializer } from './phone.serializes';

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
  username: yup.string().required(),
  listEmail: yup.array(emailSerializer).required(),
  listPhoneNumber: yup.array(phoneSerializer).required(),
});

const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    username: yup.string(),
  })
  .noUnknown(true)
  .nullable();

const userUpdatePasswordSerializer: SchemaOf<IUserUpdatePasswordRequest> = yup
  .object()
  .shape({
    oldPassword: yup.string().required(),
    password: yup.string().required(),
  });

const userResponserSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  createdAt: yup.date(),
  contacts: yup.array(contactResponserSerializer),
  listPhoneNumber: yup.array(phoneResponserSerializer),
  listEmail: yup.array(emailResponserSerializer),
  username: yup.string(),
  fullName: yup.string(),
  id: yup.string().uuid(),
});

export {
  userSerializer,
  userUpdateSerializer,
  userUpdatePasswordSerializer,
  userResponserSerializer,
};
