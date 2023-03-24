import { Request, Response } from 'express';
import createEmailService from '../services/email/createEmail.service';
import deleteEmailService from '../services/email/deleteEmail.service';
import updateEmailService from '../services/email/updateEmail.service';

const createEmailUserController = async (req: Request, res: Response) => {
  const email = await createEmailService(req.body, req.user.id);
  return res.status(201).json(email);
};

const createEmailContactController = async (req: Request, res: Response) => {
  const email = await createEmailService(req.body, req.user.id, req.params.id);
  return res.status(201).json(email);
};

const updateEmailUserController = async (req: Request, res: Response) => {
  const email = await updateEmailService(req.body, req.params.id, req.user.id);
  return res.json(email);
};

const updateEmailContactController = async (req: Request, res: Response) => {
  const email = await updateEmailService(
    req.body,
    req.params.emailId,
    req.user.id,
    req.params.contactId,
  );
  return res.json(email);
};

const deleteEmailUserController = async (req: Request, res: Response) => {
  await deleteEmailService(req.params.id, req.user.id);
  return res.status(204).json({});
};

const deleteEmailContactController = async (req: Request, res: Response) => {
  await deleteEmailService(
    req.params.emailId,
    req.user.id,
    req.params.contactId,
  );
  return res.status(204).json({});
};

export {
  createEmailUserController,
  updateEmailUserController,
  deleteEmailUserController,
  createEmailContactController,
  updateEmailContactController,
  deleteEmailContactController,
};
