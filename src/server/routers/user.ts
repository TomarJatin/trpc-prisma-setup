import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '../db';

export const userRouter = router({
  getUsers: publicProcedure.query(async () => {
    // return await prisma.user.findMany();
    return [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ]
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .mutation(async ({ input }) => {
      return await prisma.user.create({ data: input });
    }),
});