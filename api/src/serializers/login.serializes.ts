import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { ILoginRequest } from '../interfaces/login.interfaces';

const loginSerializer: SchemaOf<ILoginRequest> = yup.object().shape({
  password: yup.string().required(),
  login: yup.string().required(),
});

export { loginSerializer };
