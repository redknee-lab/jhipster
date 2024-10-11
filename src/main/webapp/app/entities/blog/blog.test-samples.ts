import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 19631,
  name: 'pish notwithstanding',
  handle: 'boohoo',
};

export const sampleWithPartialData: IBlog = {
  id: 744,
  name: 'fat',
  handle: 'bah frenetically into',
};

export const sampleWithFullData: IBlog = {
  id: 21079,
  name: 'jubilantly briskly unless',
  handle: 'popularize unexpectedly meh',
};

export const sampleWithNewData: NewBlog = {
  name: 'wound',
  handle: 'ravage yet opposite',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
