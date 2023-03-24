import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IUserRequest,
  IUserResponse,
  IUserUpdateRequest,
} from '../interfaces/users.interfaces';
import { emailResponserSerializer } from './email.serializes';
import { phoneResponserSerializer } from './phone.serializes';

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
  username: yup.string().required(),
});

const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    password: yup.string(),
    username: yup.string(),
  })
  .noUnknown(true)
  .nullable();

const userResponserSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  createdAt: yup.date(),
  listPhoneNumber: yup.array(phoneResponserSerializer),
  listEmail: yup.array(emailResponserSerializer),
  username: yup.string(),
  fullName: yup.string(),
  id: yup.string().uuid(),
});

export { userSerializer, userUpdateSerializer, userResponserSerializer };
