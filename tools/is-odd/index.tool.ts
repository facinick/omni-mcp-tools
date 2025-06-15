import { z } from "zod";
import { McpServerSingleton } from "../../mcp-server";
import { isOdd } from "./index";

const server = McpServerSingleton.getServer();

server.tool(
	"is-odd",
	"Determines if a given number is odd or even",
	{
		value: z.number().describe("The number to check"),
	},
	{
		title: "Check if a number is odd",
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false,
	},
	async ({ value }) => ({
		content: [{ type: "text", text: `Is odd: ${isOdd(value)}` }],
	}),
);
