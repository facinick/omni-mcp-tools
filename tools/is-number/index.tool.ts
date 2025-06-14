import { z } from "zod";
import { McpServerSingleton } from "../../mcp-server";
import { isNumber } from "./index";

const server = McpServerSingleton.getServer();

server.tool(
  "is-number",
  { value: z.any() },
  async ({ value }) => ({
    content: [{ type: "text", text: `Is number: ${isNumber(value)}` }]
  })
);
