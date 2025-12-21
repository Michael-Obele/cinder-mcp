import { MCPServer } from "@mastra/mcp";
import { scrapeTool } from "./tools/scrape";
import { searchTool } from "./tools/search";
import { crawlTool, crawlStatusTool } from "./tools/crawl";

export const cinderMcpServer = new MCPServer({
  name: "cinder-mcp",
  version: "1.0.0",
  tools: {
    scrapeTool,
    searchTool,
    crawlTool,
    crawlStatusTool,
  },
});
