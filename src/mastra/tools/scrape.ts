import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const CINDER_API_URL = process.env.CINDER_API_URL || "http://localhost:8080";

export const scrapeTool = createTool({
  id: "cinder_scrape",
  description:
    "Extract content from a specific, known URL immediately. Best for single pages when you already have the link. DO NOT use if you need broad information - use 'cinder_search' instead.",
  inputSchema: z.object({
    url: z.url().describe("The specific URL to scrape"),
    mode: z
      .enum(["smart", "static", "dynamic"])
      .optional()
      .default("smart")
      .describe(
        "Scraping mode: 'smart' (auto), 'static' (fast), 'dynamic' (browser rendering)"
      ),
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
