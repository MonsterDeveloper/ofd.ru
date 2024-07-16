import { afterEach, describe, it, vi, expect } from "vitest"
import { FermaAuthedFetcher, FermaFetcher } from "./fetcher"
import { FermaApiError, FermaError } from "./errors"
import { FERMA_TEST_OPTIONS } from "./constants"

const { login, password } = FERMA_TEST_OPTIONS.ffd12

describe("FermaFetcher", () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("fetches data with default base URL", async () => {
		const fetchSpy = vi.spyOn(globalThis, "fetch")
		const fetcher = new FermaFetcher()

		await fetcher.fetch("/")

		expect(fetchSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				url: "https://ferma.ofd.ru/api/",
				method: "GET",
			}),
		)
	})

	it("throws a FermaApiError when API returns an error", async () => {
		const fetcher = new FermaFetcher()

		expect(fetcher.fetch("/error")).rejects.toThrowError(FermaApiError)
	})

	it("throws a FermaError when API returns invalid JSON", async () => {
		const fetcher = new FermaFetcher()

		expect(fetcher.fetch("/error/invalid-json")).rejects.toThrowError(
			"Неверный JSON ответ",
		)
	})

	it("throws a FermaError when API returns a network error", async () => {
		const fetcher = new FermaFetcher()

		expect(fetcher.fetch("/error/network")).rejects.toThrowError(FermaError)
	})
})

describe("FermaAuthedFetcher", () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("makes a request with an auth token", async () => {
		const fetchSpy = vi.spyOn(globalThis, "fetch")
		const fetcher = new FermaFetcher()
		const authedFetcher = new FermaAuthedFetcher(fetcher, login, password)

		await authedFetcher.fetch("/")

		expect(fetchSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				url: expect.stringContaining("?AuthToken="),
				method: "GET",
			}),
		)
	})

	it("makes a request without an auth token", async () => {
		const fetchSpy = vi.spyOn(globalThis, "fetch")
		const fetcher = new FermaFetcher()
		const authedFetcher = new FermaAuthedFetcher(fetcher, login, password)

		await authedFetcher.fetch("/", undefined, false)

		expect(fetchSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				url: expect.not.stringContaining("AuthToken"),
				method: "GET",
			}),
		)
	})
})
