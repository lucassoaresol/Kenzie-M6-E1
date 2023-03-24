import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IContactRequest,
  IContactResponse,
  IContactUpdateRequest,
} from '../interfaces/contacts.interface';
import { emailResponserSerializer, emailSerializer } from './email.serializes';
import { phoneResponserSerializer, phoneSerializer } from './phone.serializes';

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  fullName: yup.string().required(),
  listEmail: yup.array(emailSerializer).required(),
  listPhoneNumber: yup.array(phoneSerializer).required(),
});

const contactUpdateSerializer: SchemaOf<IContactUpdateRequest> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
  });

const contactResponserSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    listPhoneNumber: yup.array(phoneResponserSerializer),
    listEmail: yup.array(emailResponserSerializer),
    fullName: yup.string(),
    id: yup.string().uuid(),
  });

const listContactsSerializer: yup.ArraySchema<SchemaOf<IContactResponse>> =
  yup.array(contactResponserSerializer);

export {
  contactSerializer,
  contactUpdateSerializer,
  contactResponserSerializer,
  listContactsSerializer,
};
