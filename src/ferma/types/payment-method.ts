/** Признак способа расчёта */
export enum PaymentMethod {
	/** Предоплата 100% */
	FullPrepayment = 1,

	/** Предоплата */
	Prepayment = 2,

	/** Аванс */
	Advance = 3,

	/** Полный расчет */
	FullPayment = 4,

	/** Частичный расчет */
	PartialPayment = 5,

	/** Передача в кредит */
	CreditTransfer = 6,

	/** Оплата в кредит */
	CreditPayment = 7,
}
