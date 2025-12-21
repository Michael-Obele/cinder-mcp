import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const CINDER_API_URL = process.env.CINDER_API_URL || "http://localhost:8080";

export const scrapeTool = createTool({
  id: "cinder_scrape",
  description: "Scrape content from a URL",
  inputSchema: z.object({
    url: z.url().describe("The URL to scrape"),
    mode: z.enum(["smart", "static", "dynamic"]).optional().default("smart"),
  }),
  execute: async ({ context }) => {
    const response = await fetch(`${CINDER_API_URL}/v1/scrape`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(context),
    });
    return await response.json();
  },
});
