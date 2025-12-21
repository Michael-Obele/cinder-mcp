import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const CINDER_API_URL = process.env.CINDER_API_URL || "http://localhost:8080";

export const crawlTool = createTool({
  id: "cinder_crawl",
  description: "Start a background crawl job for a URL",
  inputSchema: z.object({
    url: z.url().describe("The URL to start crawling from"),
    render: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "Whether to render pages with a browser (slower but handles JS)"
      ),
  }),
  execute: async ({ context }) => {
    const response = await fetch(`${CINDER_API_URL}/v1/crawl`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(context),
    });
    return await response.json();
  },
});

export const crawlStatusTool = createTool({
  id: "cinder_get_crawl_status",
  description: "Check the status and results of a crawl job",
  inputSchema: z.object({
    id: z.string().describe("The Crawl ID returned by cinder_crawl"),
  }),
  execute: async ({ context }) => {
    const response = await fetch(`${CINDER_API_URL}/v1/crawl/${context.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  },
});
