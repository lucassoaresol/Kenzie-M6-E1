import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IContactRequest,
  IContactResponse,
} from '../interfaces/contacts.interface';
import { emailResponserSerializer } from './email.serializes';

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  fullName: yup.string().required(),
});

const contactResponserSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    listEmail: yup.array(emailResponserSerializer),
    fullName: yup.string(),
    id: yup.string().uuid(),
  });

const listContactsSerializer: yup.ArraySchema<SchemaOf<IContactResponse>> =
  yup.array(contactResponserSerializer);

export {
  contactSerializer,
  contactResponserSerializer,
  listContactsSerializer,
};
