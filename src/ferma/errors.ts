import type { FermaErrorResponse } from "./types"

/**
 * Ошибка, возвращённая API Ferma
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA
 */
export class FermaApiError extends Error {
	/** Запрос к API */
	public request: Request
	/** Ответ API */
	public response: Response
	/**
	 * Код ошибки
	 *
	 * @see https://ofd.ru/razrabotchikam/ferma#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA
	 */
	public code: number

	constructor(data: FermaErrorResponse, request: Request, response: Response) {
		super(`${data.Error.Message}. Код ошибки: ${data.Error.Code}`)
		this.name = "FermaApiError"
		this.response = response
		this.code = data.Error.Code
		this.request = request
	}
}

/** Ошибка взаимодействия с API Ferma */
export class FermaError extends Error {
	/** Запрос к API */
	public request: Request
	/** Ответ API */
	public response?: Response

	constructor(message: string, request: Request, response?: Response) {
		super(message)
		this.name = "FermaError"
		this.response = response
		this.request = request
	}
}
