/**
 * Опции для тестирования API
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5_api_ferma
 */
export const FERMA_TEST_OPTIONS = {
	/** Базовый тестовый URL */
	baseUrl: "https://ferma-test.ofd.ru/api",
	/** ИНН тестовой организации */
	inn: "3245001416",
	/** Данные для тестирования ФФД версии 1.1 */
	ffd11: {
		/** Логин */
		login: "fermatest1",
		/** Пароль */
		password: "Hjsf3321klsadfAA",
	},
	/** Данные для тестирования ФФД весрии 1.2 */
	ffd12: {
		/** Логин */
		login: "fermatest2",
		/** Пароль */
		password: "Go2999483Mb",
	},
} as const
