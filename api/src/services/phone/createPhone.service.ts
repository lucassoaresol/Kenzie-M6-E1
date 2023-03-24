import { ListPhoneNumber } from '@prisma/client';
import AppError from '../../errors/AppError';
import { IPhoneRequest } from '../../interfaces/phone.interfaces';
import prisma from '../../prisma';
import { phoneResponserSerializer } from '../../serializers/phone.serializes';

const createPhoneService = async (
  phoneData: IPhoneRequest,
  userId: string,
  contactId?: string,
) => {
  let phone: ListPhoneNumber;

  if (contactId) {
    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          contacts: {
            update: {
              where: { id: contactId },
              data: { listPhoneNumber: { create: { ...phoneData } } },
            },
          },
        },
        include: { contacts: { include: { listPhoneNumber: true } } },
      });
      phone = user.contacts[0].listPhoneNumber.at(-1);
    } catch {
      throw new AppError('contact not found', 404);
    }
  } else {
    phone = await prisma.listPhoneNumber.create({
      data: { ...phoneData, userId },
    });
  }

  return await phoneResponserSerializer.validate(phone, {
    stripUnknown: true,
  });
};

export default createPhoneService;
