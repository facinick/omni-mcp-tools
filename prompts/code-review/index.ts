import { z } from "zod";
import { McpServerSingleton } from "../../mcp-server";

const server = McpServerSingleton.getServer();

server.prompt(
  "review-code",
  { code: z.string() },
  ({ code }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `Please review this code:\n\n${code}`
      }
    }]
  })
);