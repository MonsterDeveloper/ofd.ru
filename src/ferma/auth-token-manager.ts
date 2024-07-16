import type { FermaFetcher } from "./fetcher"

export class AuthTokenManager {
	private fetcher: FermaFetcher
	private login: string
	private password: string

	private authToken?: string
	/** Timestamp истечения токена, UTC  */
	private authTokenExpirationTimestamp?: number

	constructor(fetcher: FermaFetcher, login: string, password: string) {
		this.fetcher = fetcher
		this.login = login
		this.password = password
	}

	private async updateAuthToken() {
		const {
			Data: { AuthToken, ExpirationDateUtc },
		} = await this.fetcher.fetch<{
			AuthToken: string
			ExpirationDateUtc: string
		}>("/Authorization/CreateAuthToken", {
			method: "POST",
			body: JSON.stringify({
				Login: this.login,
				Password: this.password,
			}),
		})

		this.authToken = AuthToken
		this.authTokenExpirationTimestamp = Date.parse(ExpirationDateUtc)
	}

	async getAuthToken() {
		if (
			!this.authToken ||
			(this.authTokenExpirationTimestamp &&
				this.authTokenExpirationTimestamp < Date.now())
		) {
			await this.updateAuthToken()
		}

		return this.authToken as string
	}
}
