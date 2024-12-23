/** Тип вычисляемого НДС */
export enum Vat {
	/** Налог на добавленную стоимость без НДС */
	VatNo = "VatNo",
	/** НДС 5% */
	Vat5 = "Vat5",
	/** Вычисленный НДС 5% от 105% суммы */
	CalculatedVat5105 = "CalculatedVat5105",
	/** НДС 7% */
	Vat7 = "Vat7",
	/** Вычисленный НДС 7% от 107% суммы */
	CalculatedVat7107 = "CalculatedVat7107",
	/** Налог на добавленную стоимость (НДС) 10% */
	Vat10 = "Vat10",
	/** НДС 20% */
	Vat20 = "Vat20",
	/** НДС 0% */
	Vat0 = "Vat0",
	/** Вычисленный НДС 10% от 110% суммы */
	CalculatedVat10110 = "CalculatedVat10110",
	/** Вычисленный НДС 20% от 120% суммы */
	CalculatedVat20120 = "CalculatedVat20120",
}
