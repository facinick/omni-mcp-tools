import { z } from "zod";
import { McpServerSingleton } from "../../mcp-server";
import { isOdd } from "./index";

const server = McpServerSingleton.getServer();

server.tool(
  "is-odd",
  { value: z.number() },
  async ({ value }) => ({
    content: [{ type: "text", text: `Is odd: ${isOdd(value)}` }]
  })
);
