import { ListEmail } from '@prisma/client';
import AppError from '../../errors/AppError';
import { IEmailRequest } from '../../interfaces/email.interfaces';
import prisma from '../../prisma';
import { emailResponserSerializer } from '../../serializers/email.serializes';

const updateEmailService = async (
  emailData: IEmailRequest,
  emailId: string,
  userId: string,
  contactId?: string,
) => {
  try {
    let email: ListEmail;
    if (contactId) {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          contacts: {
            update: {
              where: { id: contactId },
              data: {
                listEmail: {
                  update: { where: { id: emailId }, data: { ...emailData } },
                },
              },
            },
          },
        },
        include: { contacts: { include: { listEmail: true } } },
      });
      email = user.contacts[0].listEmail.at(-1);
    } else {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          listEmail: {
            update: { where: { id: emailId }, data: { ...emailData } },
          },
        },
        include: { listEmail: true },
      });
      email = user.listEmail.at(-1);
    }

    return await emailResponserSerializer.validate(email, {
      stripUnknown: true,
    });
  } catch {
    throw new AppError('email not found', 404);
  }
};

export default updateEmailService;
