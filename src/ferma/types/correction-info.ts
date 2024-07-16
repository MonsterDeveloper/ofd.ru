/** Тип коррекции */
export enum CorrectionType {
	/** Коррекция производится самостоятельно */
	Self = "SELF",
	/** Коррекция производится по предписанию */
	INSTRUCTION = "INSTRUCTION",
}

/** Информацию по чеку коррекции */
export interface CorrectionInfo {
	/** Описание коррекции и её причин */
	Description: string

	/** Тип коррекции */
	Type?: CorrectionType

	/**
	 * Дата пробития чека, к которому применяется чек коррекции.
	 *
	 * В формате `ДД.ММ.ГГ`, где ДД — день, ММ — месяц, ГГ — год.
	 */
	ReceiptDate?: string

	/** Номер предписания налогового органа */
	ReceiptId?: string
}
