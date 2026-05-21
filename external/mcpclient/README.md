# Teams: MCP Client

> ⚠️ **DEPRECATED** — `@microsoft/teams.mcpclient` is no longer recommended. Use [`@modelcontextprotocol/sdk`](https://www.npmjs.com/package/@modelcontextprotocol/sdk) directly with a dedicated AI framework like the [`openai`](https://www.npmjs.com/package/openai) SDK. See [`examples/ai-mcp`](../../examples/ai-mcp) for the new pattern.

<p>
    <a href="https://www.npmjs.com/package/@microsoft/teams.mcpclient" target="_blank">
        <img src="https://img.shields.io/npm/v/@microsoft/teams.mcpclient/latest" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.mcpclient?activeTab=code" target="_blank">
        <img src="https://img.shields.io/bundlephobia/min/@microsoft/teams.mcpclient" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.mcpclient?activeTab=dependencies" target="_blank">
        <img src="https://img.shields.io/librariesio/release/npm/@microsoft/teams.mcpclient" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.mcpclient" target="_blank">
        <img src="https://img.shields.io/npm/dw/@microsoft/teams.mcpclient" />
    </a>
    <a href="https://microsoft.github.io/teams-sdk" target="_blank">
        <img src="https://img.shields.io/badge/📖 docs-open-blue" />
    </a>
</p>

High level MCP Client Plugin which allows connecting to various sse servers and consume exposed tools.

<a href="https://microsoft.github.io/teams-sdk" target="_blank">
    <img src="https://img.shields.io/badge/📖 Getting Started-blue?style=for-the-badge" />
</a>

## Install

```bash
npm install @microsoft/teams.mcpclient
```

## Overview

The MCP Client Plugin enables seamless integration with Model Context Protocol (MCP) servers through SSE (Server-Sent Events). It allows you to connect to various MCP servers and consume their exposed tools within your Teams.js applications.

## Usage

```typescript
import { ChatPrompt } from "@microsoft/teams.ai";
import { McpClientPlugin } from "@microsoft/teams.mcpclient";

const prompt = new ChatPrompt(
    {
        instructions: "You are a helpful assistant.",
        model: yourModel,
    },
    [new McpClientPlugin()],
).usePlugin("mcpClient", { url: "http://your-mcp-server/mcp" });
```

## Features

- 🔌 Automatic tool discovery from MCP servers
- 💾 Optional caching of tool parameters (if you'd like to avoid the discovery call or only pass in a subset of tools)
