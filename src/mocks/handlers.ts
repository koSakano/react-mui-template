import { API_PATHS } from "@/api/constants";
import { rest } from "msw";
import { mockSample } from "./resolvers/Sample";

export const handlers = [
  rest.get(API_PATHS.SAMPLE_GET, mockSample),
  rest.post(API_PATHS.SAMPLE_POST, mockSample),
];
