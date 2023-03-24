import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IPhoneRequest, IPhoneResponse } from '../interfaces/phone.interfaces';

const phoneSerializer: SchemaOf<IPhoneRequest> = yup.object().shape({
  phoneNumber: yup.string().required(),
});

const phoneResponserSerializer: SchemaOf<IPhoneResponse> = yup.object().shape({
  phoneNumber: yup.string(),
  id: yup.string(),
});

export { phoneSerializer, phoneResponserSerializer };
