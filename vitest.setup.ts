import { afterAll, afterEach, beforeAll } from "vitest"
import { mswServer } from "./mocks"

beforeAll(() =>
	mswServer.listen({
		onUnhandledRequest: "error",
	}),
)
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())
