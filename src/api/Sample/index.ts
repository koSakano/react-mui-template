import axios, { AxiosResponse } from "@/lib/axios";

type GetResponse = {
  data: string
};

export type PostDTO = {
  data: string
};

type PostResponse = {
  data: string
};

export const get = (): Promise<AxiosResponse<GetResponse>> =>  axios.get('/sample');

export const post = (data: PostDTO): Promise<AxiosResponse<PostResponse>> =>  axios.post('/sample', data);
