import { fileURLToPath } from "node:url"
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
	build: {
		target: "esnext",
		minify: false,
		sourcemap: true,
		lib: {
			entry: [fileURLToPath(new URL("src/index.ts", import.meta.url))],
			name: "ofd.ru",
			formats: ["es"],
		},
	},
	plugins: [
		tsconfigPaths(),
		dts({
			entryRoot: "src",
			rollupTypes: true,
		}),
	],
	test: {
		setupFiles: ["./vitest.setup.ts"],
		coverage: {
			reporter: ["json", "json-summary", "html"],
			all: true,
			exclude: [
				"dist/**",
				"mocks/**",
				"vite.config.ts",
				"**/index.ts", // re-exports
				"**/*.test.ts",
			],
			// only watermark functions and branches
			watermarks: {
				functions: [100, 100],
				lines: [0, 0],
				statements: [0, 0],
				branches: [100, 100],
			},
		},
	},
})
