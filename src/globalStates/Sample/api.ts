import { API_PATHS } from '@/api/constants';
import { getSample, postSample, PostDTO } from '@/api/Sample';
import { AxiosError } from '@/lib/axios';
import useSWR from 'swr';

export const sampleApi = {
  useGetSample: () => {
    const { data, error } = useSWR(API_PATHS.SAMPLE_GET, getSample);
    if (error) {
      throw error;
    }
    // Suspence モードなのでundefindであることはない。
    if (!data) {
      throw data;
    }

    return data;
  },
  usePostSample: (
    onSuccess: (data: PostDTO) => void,
    onError?: (error: AxiosError) => void,
  ) => ({
    submit: (data: PostDTO) => {
      postSample(data)
        .then(({ data }) => {
          onSuccess(data);
        })
        .catch((error: AxiosError) => {
          if (!onError) {
            throw error;
          }
          onError(error);
        });
    },
  }),
};
