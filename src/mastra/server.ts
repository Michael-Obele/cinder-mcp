import { MCPServer } from "@mastra/mcp";
import { scrapeTool } from "./tools/scrape";
import { searchTool } from "./tools/search";
import { crawlTool, crawlStatusTool } from "./tools/crawl";

export const cinderMcpServer = new MCPServer({
  name: "cinder-mcp",
  version: "1.0.0",
  description: `A high-performance web research and data extraction server.

Usage Guidance:
- Start with 'cinder_search' for broad discovery when you don't have a URL.
- Use 'cinder_scrape' for single-page extraction when you have a specific URL.
- Use 'cinder_crawl' for domain mapping (returns a job ID).
- Use 'cinder_get_crawl_status' ONLY with a valid ID from 'cinder_crawl'.`,
  tools: {
    scrapeTool,
    searchTool,
    crawlTool,
    crawlStatusTool,
  },
});
