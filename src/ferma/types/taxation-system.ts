/** Система налогообложения */
export enum TaxationSystem {
	/** ОСН */
	Common = "Common",
	/** УСН доход */
	SimpleIn = "SimpleIn",
	/** УСН доход - расход */
	SimpleInOut = "SimpleInOut",
	/** ЕНВД */
	Unified = "Unified",
	/** ЕСН */
	UnifiedAgricultural = "UnifiedAgricultural",
	/** Патент */
	Patent = "Patent",
}
