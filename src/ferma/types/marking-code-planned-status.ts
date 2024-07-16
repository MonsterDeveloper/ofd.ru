/** Планируемый статус товара с КМ */
export enum MarkingCodePlannedStatus {
	/** Штучный товар, подлежащий обязательной маркировке средством идентификации, реализован */
	PieceProductIncome = "PIECE_PRODUCT_INCOME",
	/** Мерный товар, подлежащий обязательной маркировке средством идентификации, в стадии реализации */
	MeasuredProductIncome = "MEASURED_PRODUCT_INCOME",
	/** Штучный товар, подлежащий обязательной маркировке средством идентификации, возвращен */
	PieceProductReturn = "PIECE_PRODUCT_RETURN",
	/** Часть товара, подлежащего обязательной маркировке средством идентификации, возвращена */
	MeasuredProductReturn = "MEASURED_PRODUCT_RETURN",
	/** Статус товара, подлежащего обязательной маркировке средством идентификации, не изменился */
	ProductStatusNotChanged = "PRODUCT_STATUS_NOT_CHANGED",
}
