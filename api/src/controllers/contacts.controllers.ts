import { Request, Response } from 'express';
import createContactService from '../services/contacts/createContact.service';
import deleteContactService from '../services/contacts/deleteContact.service';
import listContactsService from '../services/contacts/listContacts.service';
import retrieveContactService from '../services/contacts/retrieveContact.service';
import updateContactService from '../services/contacts/updateContact.service';
import createEmailService from '../services/email/createEmail.service';

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

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);
  return res.status(204).json({});
};

const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactsService(req.user.id);
  return res.json(contacts);
};

const createEmailController = async (req: Request, res: Response) => {
  const email = await createEmailService(req.body, null, req.params.id);
  return res.status(201).json(email);
};

export {
  createContactController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
  listContactsController,
  createEmailController,
};
