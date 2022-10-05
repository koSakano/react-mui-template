import { ResponseResolver, MockedRequest, restContext } from 'msw';

export const mockGetSample: ResponseResolver<
  MockedRequest,
  typeof restContext
> = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: 'hello world' }));
};
export const mockPostsSample: ResponseResolver<
  MockedRequest,
  typeof restContext
> = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: 'dlrow olleh' }));
};
