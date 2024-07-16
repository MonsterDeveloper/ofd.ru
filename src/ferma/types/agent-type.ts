/** Тип (признак) платежного агента */
export enum AgentType {
	/** Банковский платежный агент */
	BankPaymentAgent = "BANK_PAYMENT_AGENT",
	/** Банковский платежный субагент */
	BankPaymentSubagent = "BANK_PAYMENT_SUBAGENT",
	/** Платежный агент */
	PaymentAgent = "PAYMENT_AGENT",
	/** Платежный субагент */
	PaymentSubagent = "PAYMENT_SUBAGENT",
	/** Поверенный */
	Confidant = "CONFIDANT",
	/** Комиссионер */
	Commissioner = "COMMISSIONER",
	/** Агент */
	Agent = "AGENT",
}
