import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 27579,
  name: 'whether',
};

export const sampleWithPartialData: ITag = {
  id: 16750,
  name: 'although slipper',
};

export const sampleWithFullData: ITag = {
  id: 8786,
  name: 'ah',
};

export const sampleWithNewData: NewTag = {
  name: 'lasting',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
