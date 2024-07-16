export interface FermaSuccessResponse<T> {
	Status: "Success"
	Data: T
}

export interface FermaErrorResponse {
	Status: "Failed"
	Error: {
		Code: number
		Message: string
	}
}

export type FermaResponse<T> = FermaSuccessResponse<T> | FermaErrorResponse
