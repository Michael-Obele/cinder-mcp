# Cinder MCP

A [Mastra](https://mastra.ai)-powered Model Context Protocol (MCP) server that provides powerful web research capabilities including searching, scraping, and crawling.

## Features

This MCP server exposes the following tools:

- **Search**: `cinder_search` - Search the web using Cinder's search capabilities.
- **Scrape**: `cinder_scrape` - scrape content from a URL with smart, static, or dynamic modes.
- **Crawl**: `cinder_crawl` - Start background crawl jobs for deep web indexing.
- **Crawl Status**: `cinder_get_crawl_status` - Monitor the progress of crawl jobs.

## Usage Guidance

This server includes built-in instructions for AI models (Mastra MCPServer `instructions`). When implementing a client or writing custom prompts:

- **Entry Point**: Always encourage models to start with `cinder_search` to find relevant URLs.
- **Deep Dives**: Use `cinder_scrape` for single-page content extraction once a URL is known.
- **Site Mapping**: Use `cinder_crawl` for multi-page domain exploration.
- **Job Recovery**: Warn models not to guess crawl IDs and only use IDs returned by `cinder_crawl`.

## Prerequisites

- [Bun](https://bun.com) v1.0.0 or higher
- Node.js v22.13.0 or higher
- Access to a running Cinder API instance (defaults to `http://localhost:8080`)

## Configuration

The server can be configured using environment variables. Create a `.env` file in the root directory:

```bash
# URL of the Cinder backend API
CINDER_API_URL=http://localhost:8080
```

## Installation

Install dependencies using Bun:

```bash
bun install
```

## Development

Start the development server with hot-reloading:

```bash
bun run dev
```

This will start the Mastra server (usually on port 4111) and provide a Swagger UI for testing tools at `/swagger-ui`.

## Deployment

To deploy the MCP server to a production environment:

1.  **Build the project:**

    ```bash
    bun run build
    ```

    This creates a standalone server in the `.mastra/output` directory.

2.  **Start the production server:**

    ```bash
    bun run start
    ```

    Or run directly with Node.js:

    ```bash
    node .mastra/output/index.mjs
    ```

The built server is self-contained and can be deployed to any Node.js-compatible environment, such as a VPS, Docker container, or cloud platform (AWS, Google Cloud, DigitalOcean, etc.).

### Deploying to a custom host

Since the build output is a standard Node.js application, you can deploy it anywhere. Ensure you set the `CINDER_API_URL` environment variable in your production environment.

## Project Structure

- `src/mastra/tools`: Contains the tool definitions (crawl, scrape, search).
- `src/mastra/server.ts`: Configures the MCP server instance.
- `src/mastra/index.ts`: Main entry point for the Mastra application.
