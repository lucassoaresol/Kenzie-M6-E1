import { Request, Response } from 'express';
import createPhoneService from '../services/phone/createPhone.service';
import deletePhoneService from '../services/phone/deletePhone.service';
import updatePhoneService from '../services/phone/updatePhone.service';

const createPhoneUserController = async (req: Request, res: Response) => {
  const phone = await createPhoneService(req.body, req.user.id);
  return res.status(201).json(phone);
};

const createPhoneContactController = async (req: Request, res: Response) => {
  const phone = await createPhoneService(req.body, req.user.id, req.params.id);
  return res.status(201).json(phone);
};

const updatePhoneUserController = async (req: Request, res: Response) => {
  const phone = await updatePhoneService(req.body, req.params.id, req.user.id);
  return res.json(phone);
};

const updatePhoneContactController = async (req: Request, res: Response) => {
  const phone = await updatePhoneService(
    req.body,
    req.params.phoneId,
    req.user.id,
    req.params.contactId,
  );
  return res.json(phone);
};

const deletePhoneUserController = async (req: Request, res: Response) => {
  await deletePhoneService(req.params.id, req.user.id);
  return res.status(204).json({});
};

const deletePhoneContactController = async (req: Request, res: Response) => {
  await deletePhoneService(
    req.params.phoneId,
    req.user.id,
    req.params.contactId,
  );
  return res.status(204).json({});
};

export {
  createPhoneUserController,
  updatePhoneUserController,
  deletePhoneUserController,
  createPhoneContactController,
  updatePhoneContactController,
  deletePhoneContactController,
};
