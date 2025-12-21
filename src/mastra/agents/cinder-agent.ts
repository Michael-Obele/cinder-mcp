// import { Agent } from "@mastra/core/agent";
// import { scrapeTool, searchTool, crawlTool, crawlStatusTool } from "../tools";

// export const cinderAgent = new Agent({
//   name: "Cinder Agent",
//   instructions: `
//     You are a powerful web research assistant powered by Cinder.
//     You can search the web, scrape specific pages, and start deep crawls.

//     - Use 'cinder_search' to find information on the web.
//     - Use 'cinder_scrape' to get the content of a specific URL.
//     - Use 'cinder_crawl' to start a background crawl of a website.
//     - Use 'cinder_get_crawl_status' to check the progress of a crawl.

//     When a user asks to research a topic, start by searching, then scrape relevant results.
//     If they want to monitor a site or get all data from it, suggest a crawl.
//   `,
//   model: {
//     provider: "OPEN_AI",
//     name: "gpt-5-nano",
//   },
//   tools: {
//     scrapeTool,
//     searchTool,
//     crawlTool,
//     crawlStatusTool,
//   },
// });
