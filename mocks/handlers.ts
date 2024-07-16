import { http, HttpResponse } from "msw"
import { composeErrorResponse, composeSuccessResponse, fermaURL } from "./utils"
import { FERMA_TEST_OPTIONS } from "@/ferma/constants"

export const mswHandlers = [
	http.get(fermaURL("/"), () =>
		HttpResponse.json(composeSuccessResponse({ hello: "world" })),
	),

	http.get(fermaURL("/error"), () =>
		HttpResponse.json(composeErrorResponse("Some Ferma error", 123), {
			status: 500,
		}),
	),

	http.get(fermaURL("/error/invalid-json"), () =>
		HttpResponse.text("invalid json", {
			status: 200,
		}),
	),

	http.get(fermaURL("/error/network"), () => HttpResponse.error()),

	http.post(fermaURL("/Authorization/CreateAuthToken"), async ({ request }) => {
		const data = await request.json()

		if (
			data &&
			typeof data === "object" &&
			"Login" in data &&
			"Password" in data &&
			data.Login === FERMA_TEST_OPTIONS.ffd12.login &&
			data.Password === FERMA_TEST_OPTIONS.ffd12.password
		) {
			return HttpResponse.json(
				composeSuccessResponse({
					AuthToken: String(Math.floor(Math.random() * 900) + 100),
					ExpirationDateUtc: new Date(
						Date.now() + 1000 * 60 * 60, // 1 hour
					).toISOString(),
				}),
			)
		}
	}),

	http.post(fermaURL("/kkt/cloud/receipt"), async ({ request }) => {
		const searchParams = new URL(request.url).searchParams

		if (
			!searchParams.has("AuthToken") ||
			// biome-ignore lint/style/noNonNullAssertion: It's fine in tests
			!/^\d{3}$/.test(searchParams.get("AuthToken")!)
		) {
			return HttpResponse.json(composeErrorResponse("Invalid AuthToken", 123), {
				status: 403,
			})
		}

		const data = await request.json()

		if (
			data &&
			typeof data === "object" &&
			"Request" in data &&
			data.Request &&
			typeof data.Request === "object" &&
			"InvoiceId" in data.Request &&
			data.Request.InvoiceId === "success"
		) {
			return HttpResponse.json(composeSuccessResponse({ ReceiptId: "success" }))
		}

		return HttpResponse.json(composeErrorResponse("Invalid data", 123), {
			status: 400,
		})
	}),
]
