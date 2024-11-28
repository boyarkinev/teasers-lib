import { RequestParams } from '../ts';

export const INITIAL_QUERY_PARAMS: RequestParams = {
  term: null,
  media: 'music',
  entity: 'song,album,movie',
  limit: 50,
};

export const SPLICE_AMOUNT = {
  SONGS: 9,
  ALBUMS: 8,
  MOVIES: 4,
};

export const PATH = process.env.NODE_ENV === 'production' ? '/teasers-lib' : '';
