/** Тип фискального документа */
export enum ReceiptType {
	/** Получение денежных средств от покупателя */
	Income = "Income",
	/** Возврат денежных средств, полученных от покупателя */
	IncomeReturn = "IncomeReturn",
	/** Авансовый платеж от покупателя */
	IncomePrepayment = "IncomePrepayment",
	/** Возврат аванса */
	IncomeReturnPrepayment = "IncomeReturnPrepayment",
	/** Чек коррекции/приход */
	IncomeCorrection = "IncomeCorrection",
	/** Чек коррекции/расход */
	BuyCorrection = "BuyCorrection",
	/** Чек коррекции/Возврат прихода */
	IncomeReturnCorrection = "IncomeReturnCorrection",
	/** Чек коррекции/Возврат расхода */
	ExpenseReturnCorrection = "ExpenseReturnCorrection",
	/** Выдача денежных средств покупателю */
	Expense = "Expense",
	/** Возврат денежных средств, выданных покупателю */
	ExpenseReturn = "ExpenseReturn",
}

export type CorrectionReceiptType =
	| ReceiptType.IncomeCorrection
	| ReceiptType.BuyCorrection
	| ReceiptType.IncomeReturnCorrection
	| ReceiptType.ExpenseReturnCorrection
export type RegularReceiptType = Exclude<ReceiptType, CorrectionReceiptType>
