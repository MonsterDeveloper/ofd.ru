import type { FoivId } from "./foiv-id"

/** Отраслевой реквизит */
export interface IndustryItemRequisite {
	/** Идентификатор ФОИВ (ФЕДЕРАЛЬНЫЕ ОРГАНЫ ИСПОЛНИТЕЛЬНОЙ ВЛАСТИ). */
	FoivId?: FoivId

	/**
	 * Дата документа основания.
	 *
	 * Формат `ДД.ММ.ГГГГ`, где ДД — день, ММ — месяц, ГГГГ — год.
	 */
	DocDate?: string

	/** Номер документа основания */
	DocNumber?: string

	/** Значение отраслевого реквизита */
	Value?: string
}
