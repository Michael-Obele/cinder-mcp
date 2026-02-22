import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const CINDER_API_URL = process.env.CINDER_API_URL || "http://localhost:8080";

export const searchTool = createTool({
  id: "cinder_search",
  description:
    "Find unknown URLs or broad information across the web. ALWAYS use this as your first step when you don't have a specific URL to analyze.",
  inputSchema: z.object({
    query: z.string().describe("The search query (e.g., 'latest AI news')"),
  }),
  execute: async ({ context }) => {
    const response = await fetch(`${CINDER_API_URL}/v1/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(context),
    });
    return await response.json();
  },
});
