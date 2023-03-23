import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { compareSync } from 'bcryptjs';
import AppError from '../../errors/AppError';
import { ILoginRequest } from '../../interfaces/login.interfaces';
import prisma from '../../prisma';

const createLoginService = async (loginData: ILoginRequest) => {
  const user = await prisma.user.findUnique({
    where: { username: loginData.login },
  });

  if (!user) {
    throw new AppError('wrong login or password', 404);
  }

  const passwordMatch = compareSync(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError('wrong email or password', 404);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: '24h',
    subject: user.id,
  });

  return { token };
};

export default createLoginService;
