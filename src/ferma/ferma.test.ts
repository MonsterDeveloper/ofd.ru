import { describe, it, expect } from "vitest"
import { Ferma } from "./ferma"
import { FERMA_TEST_OPTIONS } from "./constants"
import { fromPartial } from "@total-typescript/shoehorn"

const { login, password } = FERMA_TEST_OPTIONS.ffd12

describe("Ferma", () => {
	it("creates a reciept", async () => {
		const ferma = new Ferma({
			login,
			password,
		})

		const receiptId = await ferma.createReceipt(
			fromPartial({
				InvoiceId: "success",
			}),
		)

		expect(receiptId).toBe("success")
	})
})
