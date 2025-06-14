import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpServerSingleton } from "../../mcp-server";

const server = McpServerSingleton.getServer();

server.resource(
  "echo",
  new ResourceTemplate("echo://{message}", { list: undefined }),
  async (uri, { message }) => ({
    contents: [{
      uri: uri.href,
      text: `Resource echo: ${message}`
    }]
  })
);