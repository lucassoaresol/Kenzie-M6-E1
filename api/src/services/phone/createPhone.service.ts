import { ListPhoneNumber } from '@prisma/client';
import AppError from '../../errors/AppError';
import { IPhoneRequest } from '../../interfaces/phone.interfaces';
import prisma from '../../prisma';
import { phoneResponserSerializer } from '../../serializers/phone.serializes';

const createPhoneService = async (
  phoneData: IPhoneRequest,
  userId?: string,
  contactId?: string,
) => {
  let phone: ListPhoneNumber;
  if (userId) {
    phone = await prisma.listPhoneNumber.create({
      data: { ...phoneData, userId },
    });
  }

  if (contactId) {
    try {
      phone = await prisma.listPhoneNumber.create({
        data: { ...phoneData, contactId },
      });
    } catch {
      throw new AppError('contact not found', 404);
    }
  }

  return await phoneResponserSerializer.validate(phone, {
    stripUnknown: true,
  });
};

export default createPhoneService;
