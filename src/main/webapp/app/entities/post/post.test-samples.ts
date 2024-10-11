import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 28724,
  title: 'bog',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-10-06T14:22'),
};

export const sampleWithPartialData: IPost = {
  id: 13462,
  title: 'joyfully rationalize',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-10-05T19:49'),
};

export const sampleWithFullData: IPost = {
  id: 4675,
  title: 'unimpressively uniform massive',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-10-06T17:11'),
};

export const sampleWithNewData: NewPost = {
  title: 'unhealthy',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-10-06T05:55'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
