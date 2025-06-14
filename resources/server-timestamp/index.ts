import { McpServerSingleton } from "../../mcp-server";

const server = McpServerSingleton.getServer();

server.resource(
  "server-timestamp",
  "server-timestamp://",
  async (uri) => ({
    contents: [{
      uri: uri.href,
      text: `Resource server-timestamp: ${new Date().toISOString()}`
    }]
  })
);
