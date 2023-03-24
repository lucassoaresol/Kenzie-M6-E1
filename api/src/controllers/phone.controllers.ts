import { Request, Response } from 'express';
import deletePhoneService from '../services/phone/deletePhone.service';
import updatePhoneService from '../services/phone/updatePhone.service';

const updatePhoneController = async (req: Request, res: Response) => {
  const phone = await updatePhoneService(req.body, req.params.id);
  return res.json(phone);
};

const deletePhoneController = async (req: Request, res: Response) => {
  await deletePhoneService(req.params.id);
  return res.status(204).json({});
};

export { updatePhoneController, deletePhoneController };
