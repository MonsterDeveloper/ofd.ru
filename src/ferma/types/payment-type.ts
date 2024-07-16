/** Тип оплаты */
export enum PaymentType {
	/** Наличными */
	Cash = 0,

	/** Безналичными */
	Cashless = 1,

	/** Предоплата (аванс) */
	Prepayment = 2,

	/** Предоплата (кредит) */
	Credit = 3,

	/** Иная формам оплаты */
	Other = 4,
}
