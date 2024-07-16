import { AuthTokenManager } from "./auth-token-manager"
import { FermaApiError, FermaError } from "./errors"
import type { FermaResponse, FermaSuccessResponse } from "./types"

export class FermaFetcher {
	public baseUrl: string

	constructor(baseUrl = "https://ferma.ofd.ru/api") {
		this.baseUrl = baseUrl
	}

	async fetch<T>(
		path: string,
		options?: RequestInit,
	): Promise<FermaSuccessResponse<T>> {
		const request = new Request(`${this.baseUrl}${path}`, {
			...options,
			headers: {
				"Content-Type": "application/json",
				...options?.headers,
			},
		})

		try {
			const response = await fetch(request)

			const data = (await response.json()) as FermaResponse<T>

			if (data.Status === "Failed")
				throw new FermaApiError(data, request, response)

			return data
		} catch (error) {
			if (error instanceof FermaApiError) throw error

			if (error instanceof SyntaxError)
				throw new FermaError("Неверный JSON ответ", request)
			if (error instanceof Error) throw new FermaError(error.message, request)

			throw new FermaError("Неизвестная ошибка", request)
		}
	}
}

export class FermaAuthedFetcher {
	private fetcher: FermaFetcher
	private authTokenManager: AuthTokenManager

	constructor(fetcher: FermaFetcher, login: string, password: string) {
		this.fetcher = fetcher
		this.authTokenManager = new AuthTokenManager(fetcher, login, password)
	}

	async fetch<T>(path: string, options?: RequestInit, includeAuthToken = true) {
		if (includeAuthToken) {
			const authToken = await this.authTokenManager.getAuthToken()
			const url = new URL(`${this.fetcher.baseUrl}${path}`)
			url.searchParams.append("AuthToken", authToken)
			const urlString = url.toString()

			return this.fetcher.fetch<T>(
				urlString.replace(this.fetcher.baseUrl, ""),
				options,
			)
		}

		return this.fetcher.fetch<T>(path, {
			...options,
		})
	}
}
