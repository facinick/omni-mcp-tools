import { z } from "zod";
import { McpServerSingleton } from "../../mcp-server";
import { isNumber } from "./index";

const server = McpServerSingleton.getServer();

server.tool(
  // name
  "is-number",
  // description
  "Determines if a given value of any type is a number",
  // paramsSchema
  {
    value: z.any().describe("The value to check if it's a number"),
  },
  // tool annotations
  {
    title: "Check if a value is a number",
    readOnlyHint: true,
    idempotentHint: true,
    openWorldHint: false
  },
  // callback
  async ({ value }) => ({
    content: [{ type: "text", text: `Is number: ${isNumber(value)}` }]
  })
);
