import type { IndustryItemRequisite } from "./industry-item-requisite"
import type { MarkingCodePlannedStatus } from "./marking-code-planned-status"
import type { MarkingCodeType } from "./marking-code-type"
import type { Measure } from "./measure"
import type { PaymentAgentInfo } from "./payment-agent-info"
import type { PaymentMethod } from "./payment-method"
import type { ReceiptPaymentType } from "./receipt-payment-type"
import type { Vat } from "./vat"

/**
 * Товарная позиция в чеке
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2_items_%D1%82%D0%B5%D0%B3_1059
 * */
export interface ReceiptItem {
	/** Здесь могу присутствовать описание товара или описание услуги.
	 *
	 * Параметр всегда требуется в запросе на формирование фискального документа.
	 */
	Label: string

	/** Цена товарной позиции в рублях */
	Price: number

	/** Количество товара в товарной позиции */
	Quantity: number

	/**
	 * Общая стоимость товара в товарной позиции в рублях.
	 *
	 * Правила округления для стоимости товара зависят от типа кассы. В кассах типа Эфир Pro ФС и Эфир Pro ФА стоимость округляется по математическим правилам округления.
	 * Результат умножения значений параметров `Price` и `Quantity` должно быть равно значению параметра `Amount`
	 */
	Amount: number

	/**
	 * Сумма акциза с учетом копеек.
	 *
	 * Участвует в запросе, если предмет расчета признается объектом налогообложения акцизами.
	 */
	Excise?: number

	/** Вид вычисляемого НДС */
	Vat: Vat

	/** Код маркировки товарной позиции */
	MarkingCodeData?: {
		/** Формат КМ */
		Type?: MarkingCodeType

		/**
		 * Код маркировки
		 *
		 * В параметре передается значение, полученное сканером штрих-кода.
		 */
		Code: string

		/**
		 * Планируемый статус товара с КМ.
		 *
		 * @default `PIECE_PRODUCT_INCOME`
		 */
		PlannedStatus?: MarkingCodePlannedStatus

		/** Тег содержит дробное количество маркированного товара */
		Fractional?: {
			/**
			 * Числитель.
			 *
			 * Должен быть строго меньше знаменателя `Denominator`.
			 */
			Numerator: number

			/** Знаменатель */
			Denominator: number
		}
	}

	/**
	 * Тег содержит единицы измерения количества предмета расчета.
	 *
	 * Обязателен для ФФД 1.2.
	 *
	 * @default `PIECE` — если не передан, для ФФД 1.2
	 */
	Measure?: Measure

	/** Признак способа расчёта */
	PaymentMethod: PaymentMethod

	/** Отраслевой реквизит чека */
	IndustryItemRequisite?: IndustryItemRequisite

	/**
	 * Дополнительный реквизит предмета расчета.
	 *
	 * Максимальная длина 64 символов.
	 */
	AdditionalRequisite?: string

	/**
	 * Код страны происхождения товара.
	 *
	 * Не более 3 цифр.
	 */
	OriginCountryCode?: string

	/**
	 * Номер таможенной декларации.
	 *
	 * Не более 32 символов.
	 */
	CustomsDeclarationNumber?: string

	/**
	 * Признак предмета расчета для конкретной позиции в чеке.
	 *
	 * Если значение отсутствует, берется значение для всего чека.
	 */
	PaymentType?: ReceiptPaymentType

	/** Данные платёжного агента */
	PaymentAgentInfo?: PaymentAgentInfo
}
