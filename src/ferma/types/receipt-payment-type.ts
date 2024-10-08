/**
 * Признак предмета расчёта
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0_%D0%BF%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D0%B0_%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%D0%B0_%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%B0_paymenttype
 */
export enum ReceiptPaymentType {
	/** О реализуемом товаре, за исключением подакцизного товара (наименование и иные сведения, описывающие товар) – «ТОВАР» или «Т» */
	Product = 1,
	/** О реализуемом подакцизном товаре (наименование и иные сведения, описывающие товар) – «ПОДАКЦИЗНЫЙ ТОВАР» или «АТ» */
	ExciseProduct = 2,
	/** О выполняемой работе (наименование и иные сведения, описывающие работу) – «РАБОТА» или «Р» */
	Work = 3,
	/** Об оказываемой услуге (наименование и иные сведения, описывающие услугу) – «УСЛУГА» или «У» или может не печататься */
	Service = 4,
	/** О приеме ставок при осуществлении деятельности по проведению азартных игр – «СТАВКА АЗАРТНОЙ ИГРЫ» или «СТАВКА ИГРЫ» или «СА» */
	GamblingBet = 5,
	/** О выплате денежных средств в виде выигрыша при осуществлении деятельности по проведению азартных игр – «ВЫИГРЫШ АЗАРТНОЙ ИГРЫ» или «ВЫИГРЫШ АИ» или «ВА» */
	GamblingWin = 6,
	/** О приеме денежных средств при реализации лотерейных билетов, электронных лотерейных билетов, приеме лотерейных ставок при осуществлении деятельности по проведению лотерей – «ЛОТЕРЕЙНЫЙ БИЛЕТ» или «СТАВКА ЛОТЕРЕИ» или «СЛ» */
	LotteryTicket = 7,
	/** О выплате денежных средств в виде выигрыша при осуществлении деятельности по проведению лотерей – «ВЫИГРЫШ ЛОТЕРЕИ» или «ВЫИГРЫШ ЛОТЕРЕИ» или «ВЛ» */
	LotteryWin = 8,
	/** О предоставлении прав на использование результатов интеллектуальной деятельности или средств индивидуализации – «ПРЕДОСТАВЛЕНИЕ РИД» или «РИД» */
	IntellectualProperty = 9,
	/** Об авансе, задатке, предоплате, кредите, взносе в счет оплаты, пени, штрафе, вознаграждении, бонусе и ином аналогичном предмете расчета – «ПЛАТЕЖ» или «П», «ВЫПЛАТА» или «В» */
	AdvancePayment = 10,
	/** О вознаграждении пользователя, являющегося платежным агентом (субагентом), банковским платежным агентом (субагентом), комиссионером, поверенным или иным агентом – «АГЕНТСКОЕ ВОЗНАГРАЖДЕНИЕ» или «АВ» */
	AgencyFee = 11,
	/** О предмете расчета, состоящем из предметов, каждому из которых может быть присвоено значение от «1» до «11» – «СОСТАВНОЙ ПРЕДМЕТ РАСЧЕТА» или «СПР» */
	CompositeItem = 12,
	/** О предмете расчета, не относящемуся к предметам расчета, которым может быть присвоено значение от «1» до «12» и от «14» до «18» – «ИНОЙ ПРЕДМЕТ РАСЧЕТА» или «ИПР» */
	OtherItem = 13,
	/** О передаче имущественных прав – «ИМУЩЕСТВЕННОЕ ПРАВО» */
	PropertyTransfer = 14,
	/** О внереализационным доходе – «ВНЕРЕАЛИЗАЦИОННЫЙ ДОХОД» или может не печататься */
	NonOperationalIncome = 15,
	/** О суммах расходов, уменьшающих сумму налога (авансовых платежей) в соответствии с пунктом 3.1 статьи 346.21 Налогового кодекса Российской Федерации – «СТРАХОВЫЕ ВЗНОСЫ» */
	InsuranceContributions = 16,
	/** О суммах уплаченного торгового сбора – «ТОРГОВЫЙ СБОР» */
	TradeFee = 17,
	/** О курортном сборе – «КУРОРТНЫЙ СБОР» */
	ResortFee = 18,
	/** О залоге – «ЗАЛОГ» */
	Pledge = 19,
	/** О суммах произведенных расходов в соответствии со статьей 346.16 Налогового кодекса Российской Федерации, уменьшающих доход */
	ExpenseReduction = 20,
	/** О страховых взносах на обязательное пенсионное страхование, уплачиваемых ИП, не производящими выплаты и иные вознаграждения физическим лицам — «ВЗНОСЫ НА ОБЯЗАТЕЛЬНОЕ ПЕНСИОННОЕ СТРАХОВАНИЕ ИП» или «ВЗНОСЫ НА ОПС ИП» или может не печататься */
	PensionContributionsIP = 21,
	/** О страховых взносах на обязательное пенсионное страхование, уплачиваемых организациями и ИП, производящими выплаты и иные вознаграждения физическим лицам — «ВЗНОСЫ НА ОБЯЗАТЕЛЬНОЕ ПЕНСИОННОЕ СТРАХОВАНИЕ» или «ВЗНОСЫ НА ОПС» или может не печататься */
	PensionContributions = 22,
	/** О страховых взносах на обязательное медицинское страхование, уплачиваемых ИП, не производящими выплаты и иные вознаграждения физическим лицам — «ВЗНОСЫ НА ОБЯЗАТЕЛЬНОЕ МЕДИЦИНСКОЕ СТРАХОВАНИЕ ИП» или «ВЗНОСЫ НА ОМС ИП» или может не печататься */
	MedicalContributionsIP = 23,
	/** О страховых взносах на обязательное медицинское страхование, уплачиваемые организациями и ИП, производящими выплаты и иные вознаграждения физическим лицам — «ВЗНОСЫ НА ОБЯЗАТЕЛЬНОЕ МЕДИЦИНСКОЕ СТРАХОВАНИЕ» или «ВЗНОСЫ НА ОМС» или может не печататься */
	MedicalContributions = 24,
	/** О страховых взносах на обязательное социальное страхование на случай временной нетрудоспособности и в связи с материнством, на обязательное социальное страхование от несчастных случаев на производстве и профессиональных заболеваний — «ВЗНОСЫ НА ОБЯЗАТЕЛЬНОЕ СОЦИАЛЬНОЕ СТРАХОВАНИЕ» или «ВЗНОСЫ НА ОСС» или может не печататься */
	SocialContributions = 25,
	/** О приеме и выплате денежных средств при осуществлении казино и залами игровых автоматов расчетов с использованием обменных знаков игорного заведения — «ПЛАТЕЖ КАЗИНО» или «ПК» или может не печататься */
	CasinoPayment = 26,
	/** О выдаче денежных средств банковским платежным агентом — «ВЫДАЧА ДЕНЕЖНЫХ СРЕДСТВ» или «ВЫДАЧА ДС» или может не печататься */
	CashIssuance = 27,
	/** О реализуемом подакцизном товаре, подлежащем маркировке средством идентификации, не имеющем кода маркировки — «АТНМ» или может не печататься */
	ExciseProductNoMark = 30,
	/** О реализуемом подакцизном товаре, подлежащем маркировке средством идентификации, имеющем код маркировки — «АТМ» или может не печататься */
	ExciseProductMark = 31,
	/** О реализуемом товаре, подлежащем маркировке средством идентификации, не имеющем кода маркировки, за исключением подакцизного товара — «ТНМ» или может не печататься */
	ProductNoMark = 32,
	/** О реализуемом товаре, подлежащем маркировке средством идентификации, имеющем код маркировки, за исключением подакцизного товара — «ТМ» или может не печататься */
	ProductMark = 33,
}
