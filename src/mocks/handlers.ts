import { API_PATHS } from '@/api/constants';
import { rest } from 'msw';
import { mockGetSample, mockPostsSample } from './resolvers/Sample';

export const handlers = [
  rest.get(API_PATHS.SAMPLE_GET, mockGetSample),
  rest.post(API_PATHS.SAMPLE_POST, mockPostsSample),
];
