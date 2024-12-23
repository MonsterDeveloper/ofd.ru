import { fromPartial } from "@total-typescript/shoehorn"
import { describe, expect, it } from "vitest"
import { FERMA_TEST_OPTIONS } from "./constants"
import { Ferma } from "./ferma"

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
