import { Request, Response } from 'express';
import createContactService from '../services/contacts/createContact.service';

const createContactController = async (req: Request, res: Response) => {
  const contact = await createContactService(req.body, req.user.id);
  return res.status(201).json(contact);
};

export { createContactController };
