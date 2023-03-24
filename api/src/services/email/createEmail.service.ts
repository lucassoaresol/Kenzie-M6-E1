import { ListEmail, User } from '@prisma/client';
import AppError from '../../errors/AppError';
import { IEmailRequest } from '../../interfaces/email.interfaces';
import prisma from '../../prisma';
import { emailResponserSerializer } from '../../serializers/email.serializes';

const createEmailService = async (
  emailData: IEmailRequest,
  userId: string,
  contactId?: string,
) => {
  let email: ListEmail;

  if (contactId) {
    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          contacts: {
            update: {
              where: { id: contactId },
              data: { listEmail: { create: { ...emailData } } },
            },
          },
        },
        include: { contacts: { include: { listEmail: true } } },
      });
      email = user.contacts[0].listEmail.at(-1);
    } catch {
      throw new AppError('contact not found', 404);
    }
  } else {
    email = await prisma.listEmail.create({
      data: { ...emailData, userId },
    });
  }

  return await emailResponserSerializer.validate(email, {
    stripUnknown: true,
  });
};

export default createEmailService;
