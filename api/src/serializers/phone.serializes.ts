import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IPhoneRequest, IPhoneResponse } from '../interfaces/phone.interfaces';

const phoneSerializer: SchemaOf<IPhoneRequest> = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/gi)
    .required(),
});

const phoneResponserSerializer: SchemaOf<IPhoneResponse> = yup.object().shape({
  phoneNumber: yup.string().matches(/^\(\d{2}\) \d{4,5}-\d{4}$/gi),
  id: yup.string(),
});

export { phoneSerializer, phoneResponserSerializer };
