import type { AgentType } from "./agent-type"
import type { CheckMcMode } from "./check-mc-mode"
import type { CorrectionInfo } from "./correction-info"
import type { FoivId } from "./foiv-id"
import type { IdDocumentType } from "./id-document-type"
import type { IndustryItemRequisite } from "./industry-item-requisite"
import type { PaymentAgentInfo } from "./payment-agent-info"
import type { PaymentType } from "./payment-type"
import type { ReceiptItem } from "./receipt-item"
import type { ReceiptPaymentType } from "./receipt-payment-type"
import type { CorrectionReceiptType, RegularReceiptType } from "./receipt-type"
import type { TaxationSystem } from "./taxation-system"

interface BaseCreateReceiptRequest {
	/** ИНН компании */
	Inn: string

	/**
	 * Идентификатор ФД в вашей информационной системе.
	 *
	 * Использование идентификатора предотвращает формирование дублей чеков
	 *
	 * **Важно!** Изменяйте идентификатор для перепробития неуспешных чеков в Ferma® (`StatusCode`: `3`)
	 */
	InvoiceId: string

	/**
	 * Интервал повтора проверки КМ в честном знаке (в секундах).
	 *
	 * Минимум `1`, максимум `1800`.
	 */
	McCheckRetryPeriodSec?: number

	/**
	 * URL адрес для отправки уведомления о статусе ФД
	 *
	 * Если поле заполнено корректно, то после обработки документа (успешной или неуспешной фискализации в ККТ: статус `CONFIRMED` или `KKT_ERROR`), ответ будет отправлен POST запросом по URL указанному в данном поле. Корректность заполненного поля определяется по регулярному выражению:`^http(s?)\:\/\/[0-9a-zA-Zа-яА-Я]([-.\w]*[0-9a-zA-Zа-яА-Я])*(:(0-9)*)*(\/?)([a-zA-Z0-9а-яА-Я\-\.\?\,\'\/\\\+&=%\$#_]*)?$\\`.
	 */
	CallbackUrl?: string

	/** Информация о кассире */
	Cashier?: {
		/** ФИО кассира */
		Name?: string
		/** ИНН кассира */
		Inn?: string
	}

	/** Содержимое клиентского чека */
	CustomerReceipt: {
		/**
		 * Параметр проверки кода маркировки.
		 *
		 * Если вы в запросе не указали параметр CheckMcMode, чек пробьётся при любом результате проверки кода маркировки в ЦРПТ.
		 * */
		CheckMcMode?: CheckMcMode

		/**
		 * Система налогообложения.
		 *
		 * Внимание! Список применения значений систем налогообложения формируется на этапе регистрации кассы. Чтобы изменить список допустимых значений, необходимо выполнить перерегистрацию кассы.
		 */
		TaxationSystem: TaxationSystem

		/** Адрес электронной почты клиента */
		Email?: string

		/** Контактный телефон клиента */
		Phone?: string

		/**
		 * Признак предмета расчёта для всего чека
		 *
		 * Если в данном поле значение клиентом не указано, то используется значение по умолчанию, которое устанавливается по умолчанию при заведении учетной записи в информационной системе Ferma®.
		 */
		PaymentType: ReceiptPaymentType

		/**
		 * Использование ФА в сервисе Ferma®.
		 *
		 * Если используется касса ФА в сервисе Ferma® необходимо установить значение true. Если используется касса ФС необходимо установить значение false.
		 * Касса ФА может применятся для:
		 *
		 * – вендингового аппарата, при совершении расчетов за товары или услуги;
		 *
		 * – совершения расчетов за проезд в автоматизированном режиме (через валидатор) или совершения расчетов через терминал кондуктора.
		 */
		KktFA: boolean

		/** Номер автоматического устройства */
		AutomatNumber?: string

		/** Место осуществления расчетов */
		BillAddress: string

		/** Дополнительный реквизит пользователя с учетом особенностей сферы деятельности, в которой осуществляются расчеты */
		CustomUserProperty?: {
			/** Наименование дополнительного реквизита */
			Name: string
			/** Значение дополнительного реквизита */
			Value: string
		}

		/**
		 * Данные платежного агента .
		 *
		 * Для касс с ФФД 1.2 параметр должен передаваться только в отдельные позиции и не может быть передан в структуре всего чека.
		 *
		 * Для касс с ФФД 1.05-1.1 параметр может передаваться как на отдельные позиции, так и в структуре всего чека.
		 */
		PaymentAgentInfo?: PaymentAgentInfo

		/** Данные о покупателе */
		ClientInfo?: {
			/**
			 * ФИО или наименование организации, если клиент юр. лицо.
			 *
			 * Не более 256 символов в поле.
			 */
			Name?: string

			/**
			 * ИНН покупателя.
			 *
			 * Длина 10-12 цифр.
			 */
			Inn?: string

			/**
			 * Дата рождения покупателя (клиента).
			 *
			 * В формате `ДД.ММ.ГГ`, где ДД — день, ММ — месяц, ГГ — год.
			 */
			Birthday?: string

			/** Гражданство покупателя (клиента) */
			Citizenship?: string

			/** Код вида документа, удостоверяющего личность */
			IdDocType?: IdDocumentType

			/** Данные документа, удостоверяющего личность покупателя (клиента) */
			IdDocData?: string

			/** Адрес покупателя (клиента) */
			Address?: string
		}

		/** Отраслевой реквизит чека */
		IndustryItemRequisite?: IndustryItemRequisite

		/** Операционный реквизит чека */
		OperationRequisite?: {
			/** Идентификатор операции */
			Id?: string

			/** Данные операции */
			Details?: string

			/** Дата и время задается в формате unix timestamp */
			DateTime?: string
		}

		/** Суммы по типам оплат */
		PaymentItems: {
			/** Тип оплаты */
			PaymentType: PaymentType

			/** Сумма по типу в рублях */
			Sum: number
		}[]

		/**
		 * Дополнительный реквизит чека (БСО).
		 *
		 * Применяется в составе кассового чека (БСО). Максимальная длина - 16 символов.
		 */
		AdditionalReceiptProp?: string

		/** Товарные позиции, приобретаемые клиентом */
		Items: ReceiptItem[]
	}
}

type CreateRegularReceiptRequest = BaseCreateReceiptRequest & {
	/** Тип ФД */
	Type: RegularReceiptType
}

type CreateCorrectionReceiptRequest = BaseCreateReceiptRequest & {
	/** Тип ФД */
	Type: CorrectionReceiptType
	CustomerReceipt: {
		CorrectionInfo: CorrectionInfo
	}
}

/**
 * Параметры запроса на формирования фискального документа
 *
 * @see https://ofd.ru/razrabotchikam/ferma#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2_items_%D1%82%D0%B5%D0%B3_1059
 */
export type CreateReceiptRequest =
	| CreateRegularReceiptRequest
	| CreateCorrectionReceiptRequest
