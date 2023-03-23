import { Request, Response } from 'express';
import deleteEmailService from '../services/email/deleteEmail.service';
import updateEmailService from '../services/email/updateEmail.service';

const updateEmailController = async (req: Request, res: Response) => {
  const email = await updateEmailService(req.body, req.params.id);
  return res.json(email);
};

const deleteEmailController = async (req: Request, res: Response) => {
  await deleteEmailService(req.params.id);
  return res.status(204).json({});
};

export { updateEmailController, deleteEmailController };
