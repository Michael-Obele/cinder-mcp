import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const CINDER_API_URL = process.env.CINDER_API_URL || "http://localhost:8080";

export const crawlTool = createTool({
  id: "cinder_crawl",
  description:
    "Start a recursive background crawl of a website. Best for mapping entire sites or exploring multiple pages from a starting URL. Returns a job ID that must be used with 'cinder_get_crawl_status' to retrieve results.",
  inputSchema: z.object({
    url: z.url().describe("The starting URL to crawl from"),
    render: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "Whether to render pages with a browser (handles JavaScript-heavy sites)"
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
  description:
    "Retrieve the status and results of a crawl job. IMPORTANT: Use ONLY with a job ID returned by 'cinder_crawl'. Do NOT call this tool unless you have already successfully started a crawl and received a valid ID.",
  inputSchema: z.object({
    id: z.string().describe("The unique Crawl ID returned by 'cinder_crawl'"),
  }),
  execute: async ({ context }) => {
    const response = await fetch(`${CINDER_API_URL}/v1/crawl/${context.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  },
});
