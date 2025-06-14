declare module "bun" {
  interface Env {
    PORT: string;
    MCP_SERVER_NAME: string;
    MCP_SERVER_VERSION: string;
    LOG_LEVEL: "debug" | "info" | "warn" | "error";
  }
}