interface StatusNew {
	StatusCode: 0
	StatusName: "NEW"
}

interface StatusProcessed {
	StatusCode: 1
	StatusName: "PROCESSED"
}

interface StatusConfirmed {
	StatusCode: 2
	StatusName: "CONFIRMED"
}

interface StatusKktError {
	StatusCode: 3
	StatusName: "KKT_ERROR"
}

/**
 * Ответ на запрос получения информации о чеке
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%81%D0%B0_%D0%BA%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D1%87%D0%B5%D0%BA%D0%B0
 */
export type GetReceiptResponse = (
	| StatusNew
	| StatusProcessed
	| StatusConfirmed
	| StatusKktError
) & {
	StatusMessage?: string
	Description?: string
	ModifiedDateUtc: string
	ReceiptDateUtc: string
	ModifiedDateTimeIso: string
	ReceiptDateTimeIso: string

	Device?: {
		DeviceId: string
		RNM: string
		ZN: string
		FN: string
		FDN: string
		FPD: string
		ShiftNumber: number
		ReceiptNumInShift: number
		DeviceType: string
		OfdReceiptUrl: string
	} | null
}
