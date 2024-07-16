import type { FermaErrorResponse, FermaSuccessResponse } from "@/ferma"

export function fermaURL(path: string) {
	return `https://ferma.ofd.ru/api${path}`
}

export function composeSuccessResponse<T>(data: T): FermaSuccessResponse<T> {
	return {
		Status: "Success",
		Data: data,
	}
}

export function composeErrorResponse(
	message: string,
	code: number,
): FermaErrorResponse {
	return { Status: "Failed", Error: { Message: message, Code: code } }
}
