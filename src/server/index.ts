import { publicProcedure, router } from "./trpc";
import { userRouter } from "./routers/test";

export const appRouter = router({
	test: userRouter,
});

export type AppRouter = typeof appRouter;
