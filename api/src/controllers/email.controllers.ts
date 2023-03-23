import { Request, Response } from 'express';
import updateEmailService from '../services/email/updateEmail.service';

const updateEmailController = async (req: Request, res: Response) => {
  const email = await updateEmailService(req.body, req.params.id);
  return res.json(email);
};

export { updateEmailController };
