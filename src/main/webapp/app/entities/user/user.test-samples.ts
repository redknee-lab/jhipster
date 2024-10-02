import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31979,
  login: 'KZ0Sa',
};

export const sampleWithPartialData: IUser = {
  id: 3915,
  login: 'b@r4WRsq\\X4UDqAK\\0v\\@8QH',
};

export const sampleWithFullData: IUser = {
  id: 22442,
  login: '`I@e2',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
