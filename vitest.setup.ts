import { beforeAll, afterEach, afterAll } from "vitest"
import { mswServer } from "./mocks"

beforeAll(() =>
	mswServer.listen({
		onUnhandledRequest: "error",
	}),
)
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())
