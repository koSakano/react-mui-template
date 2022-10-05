import { ResponseResolver, MockedRequest, restContext } from "msw";


export const mockSample: ResponseResolver<MockedRequest, typeof restContext> = (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ data: 'hello world' })
    );
  };
