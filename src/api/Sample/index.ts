import axios, { AxiosResponse } from "@/lib/axios";
import { API_PATHS } from "../constants";

type GetResponse = {
  data: string
};

export type PostDTO = {
  data: string
};

type PostResponse = {
  data: string
};

export const getSample = (): Promise<GetResponse> =>
  axios.get<GetResponse>(API_PATHS.SAMPLE_GET).then(({ data }) => data);

export const postSample = (data: PostDTO): Promise<AxiosResponse<PostResponse>> =>
  axios.post<PostResponse>(API_PATHS.SAMPLE_POST, data);
