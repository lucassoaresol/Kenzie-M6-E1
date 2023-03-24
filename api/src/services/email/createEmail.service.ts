import { ListEmail } from '@prisma/client';
import AppError from '../../errors/AppError';
import { IEmailRequest } from '../../interfaces/email.interfaces';
import prisma from '../../prisma';
import { emailResponserSerializer } from '../../serializers/email.serializes';

const createEmailService = async (
  emailData: IEmailRequest,
  userId?: string,
  contactId?: string,
) => {
  let email: ListEmail;
  if (userId) {
    email = await prisma.listEmail.create({
      data: { ...emailData, userId },
    });
  }

  if (contactId) {
    try {
      email = await prisma.listEmail.create({
        data: { ...emailData, contactId },
      });
    } catch {
      throw new AppError('contact not found', 404);
    }
  }

  return await emailResponserSerializer.validate(email, {
    stripUnknown: true,
  });
};

export default createEmailService;
