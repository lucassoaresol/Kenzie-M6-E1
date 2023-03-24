import { Request, Response } from 'express';
import updatePhoneService from '../services/phone/updatePhone.service';

const updatePhoneController = async (req: Request, res: Response) => {
  const phone = await updatePhoneService(req.body, req.params.id);
  return res.json(phone);
};

export { updatePhoneController };
