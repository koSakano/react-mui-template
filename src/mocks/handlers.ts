import { rest } from "msw";
import { mockSample } from "./resolvers/Sample/sample";

export const handlers = [
  rest.get('/sample', mockSample),
  rest.post('/sample', mockSample),
];
