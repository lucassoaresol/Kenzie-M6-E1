import { Request, Response } from 'express';
import createPhoneService from '../services/phone/createPhone.service';
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

const createPhoneController = async (req: Request, res: Response) => {
  const phone = await createPhoneService(req.body, req.user.id);
  return res.status(201).json(phone);
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
  createPhoneController,
};
