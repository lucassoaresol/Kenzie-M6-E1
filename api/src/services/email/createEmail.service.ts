import { ListEmail } from '@prisma/client';
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
    email = await prisma.listEmail.create({
      data: { ...emailData, contactId },
    });
  }

  return await emailResponserSerializer.validate(email, {
    stripUnknown: true,
  });
};

export default createEmailService;
