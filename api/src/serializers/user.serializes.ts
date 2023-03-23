import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IUserRequest, IUserResponse } from '../interfaces/users.interfaces';

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
  username: yup.string().required(),
});

const userResponserSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  createdAt: yup.date(),
  username: yup.string(),
  fullName: yup.string(),
  id: yup.string().uuid(),
});

export { userSerializer, userResponserSerializer };
