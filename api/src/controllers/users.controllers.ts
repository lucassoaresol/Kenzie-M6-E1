import { Request, Response } from 'express';
import createEmailService from '../services/email/createEmail.service';
import createUserService from '../services/users/createUser.service';
import deleteUserService from '../services/users/deleteUser.service';
import retrieveUserService from '../services/users/retrieveUser.service';
import updateUserService from '../services/users/updateUser.service';

const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

const retrieveUserController = async (req: Request, res: Response) => {
  const user = await retrieveUserService(req.user.id);
  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req.body, req.user.id);
  return res.json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.user.id);
  return res.status(204).json({});
};

const createEmailController = async (req: Request, res: Response) => {
  const email = await createEmailService(req.body, req.user.id);
  return res.status(201).json(email);
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
  createEmailController,
};
