import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

let server: McpServer | null = null;

export namespace McpServerSingleton {
	export function getServer(): McpServer {
		if (!server) {
			server = new McpServer({
				name: process.env.MCP_SERVER_NAME,
				version: process.env.MCP_SERVER_VERSION,
				logLevel: process.env.LOG_LEVEL as "debug" | "info" | "warn" | "error",
			});
		}
		return server;
	}
}
