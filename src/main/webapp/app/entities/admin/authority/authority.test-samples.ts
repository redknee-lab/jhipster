import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9b30e583-ff5c-43b3-9461-f4a281182d6e',
};

export const sampleWithPartialData: IAuthority = {
  name: '1f6c7da8-559c-42ea-8c71-b5966095ff5a',
};

export const sampleWithFullData: IAuthority = {
  name: '2d4f5e88-1c11-4e44-a8be-27a054b25a06',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
