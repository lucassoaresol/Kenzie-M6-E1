import { Request, Response } from 'express';
import createContactService from '../services/contacts/createContact.service';
import retrieveContactService from '../services/contacts/retrieveContact.service';
import updateContactService from '../services/contacts/updateContact.service';

const createContactController = async (req: Request, res: Response) => {
  const contact = await createContactService(req.body, req.user.id);
  return res.status(201).json(contact);
};

const retrieveContactController = async (req: Request, res: Response) => {
  const contact = await retrieveContactService(req.params.id);
  return res.json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const contact = await updateContactService(req.body, req.params.id);
  return res.json(contact);
};

export {
  createContactController,
  retrieveContactController,
  updateContactController,
};
