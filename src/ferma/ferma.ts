import { FermaAuthedFetcher, FermaFetcher } from "./fetcher"
import type { CreateReceiptRequest } from "./types"

/**
 * Ferma®
 *
 * Версия 2.66 от 27.06.2024
 *
 * @see https://ofd.ru/razrabotchikam/ferma
 */
export class Ferma {
	private authedFetcher: FermaAuthedFetcher

	/**
	 * Конструктор класса
	 *
	 * Значения параметров можно получить в личном кабинете клиента в разделе Ferma®, после покупки услуг сервиса Ferma® или узнать у вашего менеджера.
	 *
	 */
	constructor({
		login,
		password,
		baseUrl,
	}: {
		/** Логин для доступа к API */
		login: string
		/** Пароль API */
		password: string
		/**
		 * Базовый URL API.
		 *
		 * Для тестового API укажите `FERMA_TEST_OPTIONS.baseUrl`
		 *
		 * @default `https://ferma.ofd.ru/api`
		 */
		baseUrl?: string
	}) {
		this.authedFetcher = new FermaAuthedFetcher(
			new FermaFetcher(baseUrl),
			login,
			password,
		)
	}

	/**
	 * Запрос на формирование фискальных документов
	 * @param data Данные для формирования документа
	 * @returns ID документа
	 *
	 * @see https://ofd.ru/razrabotchikam/ferma#%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81_%D0%BD%D0%B0_%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%84%D0%B8%D1%81%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2
	 */
	async createReceipt(data: CreateReceiptRequest) {
		const {
			Data: { ReceiptId },
		} = await this.authedFetcher.fetch<{ ReceiptId: string }>(
			"/kkt/cloud/receipt",
			{
				method: "POST",
				body: JSON.stringify({
					Request: data,
				}),
			},
		)

		return ReceiptId
	}
}