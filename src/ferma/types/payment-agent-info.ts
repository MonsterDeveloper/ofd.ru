import type { AgentType } from "./agent-type"

/** Данные платёжного агента */
export interface PaymentAgentInfo {
	/** Тип (признак) платежного агента */
	AgentType?: AgentType

	/** Телефон оператора по переводу денежных средств */
	TransferAgentPhone?: string

	/** Имя агента */
	TransferAgentName?: string

	/** Адрес агента */
	TransferAgentAddress?: string

	/** ИНН агента */
	TransferAgentINN?: string

	/** Операция платежного агента */
	PaymentAgentOperation?: string

	/** Телефон платежного агента */
	PaymentAgentPhone?: string

	/** Телефон потребителя */
	ReceiverPhone?: string

	/** ИНН поставщика */
	SupplierInn?: string

	/** Наименование поставщика */
	SupplierName?: string

	/** Телефон поставщика */
	SupplierPhone?: string
}
