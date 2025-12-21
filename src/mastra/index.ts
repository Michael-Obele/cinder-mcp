import { fileURLToPath } from "url";
import { Mastra } from "@mastra/core/mastra";
import { cinderMcpServer } from "./server";

export const mastra = new Mastra({
  // agents: { cinderAgent },
  mcpServers: {
    cinder: cinderMcpServer,
  },
  observability: {
    // Enables DefaultExporter and CloudExporter for AI tracing
    default: { enabled: true },
  },
});

// // If this file is run directly, start the MCP server in stdio mode
// const isMain = process.argv[1] === fileURLToPath(import.meta.url);
// if (isMain) {
//   cinderMcpServer.startStdio().catch(console.error);
// }
