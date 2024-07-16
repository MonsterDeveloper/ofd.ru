import { describe, it, expect, vi } from "vitest"
import { AuthTokenManager } from "./auth-token-manager"
import { FermaFetcher } from "./fetcher"
import { FERMA_TEST_OPTIONS } from "./constants"

const fetcher = new FermaFetcher()
const { login, password } = FERMA_TEST_OPTIONS.ffd12

describe("AuthTokenManager", () => {
	it("fetches auth token", async () => {
		const manager = new AuthTokenManager(fetcher, login, password)

		// biome-ignore lint/complexity/useLiteralKeys: Private field
		expect(manager["authToken"]).toBeUndefined()

		const token = await manager.getAuthToken()

		expect(token).toBeTypeOf("string")
		// biome-ignore lint/complexity/useLiteralKeys: Private field
		expect(manager["authToken"]).toBe(token)
	})

	it("reuses auth token", async () => {
		const manager = new AuthTokenManager(fetcher, login, password)

		const token1 = await manager.getAuthToken()
		const token2 = await manager.getAuthToken()

		expect(token1).toBe(token2)
	})

	it("refreshes auth token", async () => {
		vi.useFakeTimers()

		const manager = new AuthTokenManager(fetcher, login, password)

		const token1 = await manager.getAuthToken()

		vi.advanceTimersByTime(1000 * 60 * 60 + 1) // 1 hour + 1 ms

		const token2 = await manager.getAuthToken()

		expect(token1).not.toBe(token2)

		vi.useRealTimers()
	})
})
