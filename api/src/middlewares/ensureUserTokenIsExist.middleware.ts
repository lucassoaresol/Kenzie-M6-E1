import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import prisma from '../prisma';

const ensureUserTokenIsExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) {
    throw new AppError('user does not have permission', 403);
  }

  return next();
};

export default ensureUserTokenIsExistMiddleware;
