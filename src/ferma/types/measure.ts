/**
 * Единицы измерения
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%B0_measure
 */
export enum Measure {
	/** Применяется для предметов расчета, которые могут быть реализованы поштучно или единицами */
	Piece = "PIECE",
	/** Грамм */
	Gram = "GRAM",
	/** Килограмм */
	Kilogram = "KILOGRAM",
	/** Тонна */
	Ton = "TON",
	/** Сантиметр */
	Centimeter = "CENTIMETER",
	/** Дециметр */
	Decimeter = "DECIMETER",
	/** Метр */
	Meter = "METER",
	/** Квадратный сантиметр */
	SquareCentimeter = "SQUARE_CENTIMETER",
	/** Квадратный дециметр */
	SquareDecimeter = "SQUARE_DECIMETER",
	/** Квадратный метр */
	SquareMeter = "SQUARE_METER",
	/** Миллилитр */
	Milliliter = "MILLILITER",
	/** Литр */
	Liter = "LITER",
	/** Кубический метр */
	CubicMeter = "CUBIC_METER",
	/** Киловатт час */
	KilowattHour = "KILOWATT_HOUR",
	/** Гигакалория */
	Gigacalorie = "GIGACALORIE",
	/** Сутки (день) */
	Day = "DAY",
	/** Час */
	Hour = "HOUR",
	/** Минута */
	Minute = "MINUTE",
	/** Секунда */
	Second = "SECOND",
	/** Килобайт */
	Kilobyte = "KILOBYTE",
	/** Мегабайт */
	Megabyte = "MEGABYTE",
	/** Гигабайт */
	Gigabyte = "GIGABYTE",
	/** Терабайт */
	Terabyte = "TERABYTE",
	/** Применяется при использовании иных единиц измерения */
	Other = "OTHER",
}
