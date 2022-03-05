import { rest } from 'msw';

import { sleep } from '~/utils/sleep';

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'Hello World!' }));
  }),
  rest.post('/auth/login', async (req, res, ctx) => {
    await sleep(3000);

    return res(
      ctx.status(201),
      ctx.json({
        jwt: 'practice_storybook_token',
        user: {
          id: 'user',
          email: 'john.doe@example.com',
          firstName: 'john',
          lastName: 'doe',
          bio: 'bio',
          role: 'USER',
        },
      })
    );
  }),
  rest.get('/auth/me', async (req, res, ctx) => {
    await sleep(3000);

    return res(
      ctx.status(200),
      ctx.json({
        id: 'user',
        email: 'john.doe@example.com',
        firstName: 'john',
        lastName: 'doe',
        bio: 'bio',
        role: 'USER',
      })
    );
  }),
];
