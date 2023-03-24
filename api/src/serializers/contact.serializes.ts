import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IContactRequest,
  IContactResponse,
} from '../interfaces/contacts.interface';

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  fullName: yup.string().required(),
});

const contactResponserSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    fullName: yup.string(),
    id: yup.string().uuid(),
  });

export { contactSerializer, contactResponserSerializer };
