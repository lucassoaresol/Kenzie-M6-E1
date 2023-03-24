import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IEmailRequest, IEmailResponse } from '../interfaces/email.interfaces';

const emailSerializer: SchemaOf<IEmailRequest> = yup.object().shape({
  email: yup.string().email().required(),
});

const emailResponserSerializer: SchemaOf<IEmailResponse> = yup.object().shape({
  email: yup.string().email(),
  id: yup.string(),
});

export { emailSerializer, emailResponserSerializer };
