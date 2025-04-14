# Spark: MCP Client (Model Context Protocol)

<p>
    <a href="https://www.npmjs.com/package/@microsoft/spark.mcpclient" target="_blank">
        <img src="https://img.shields.io/npm/v/@microsoft/spark.mcpclient" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/spark.mcpclient?activeTab=code" target="_blank">
        <img src="https://img.shields.io/bundlephobia/min/@microsoft/spark.mcpclient" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/spark.mcpclient?activeTab=dependencies" target="_blank">
        <img src="https://img.shields.io/librariesio/release/npm/@microsoft/spark.mcpclient" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/spark.mcpclient" target="_blank">
        <img src="https://img.shields.io/npm/dw/@microsoft/spark.mcpclient" />
    </a>
    <a href="https://microsoft.github.io/spark.js" target="_blank">
        <img src="https://img.shields.io/badge/📖 docs-open-blue" />
    </a>
</p>

High level MCP Client Plugin which allows connecting to various sse servers and consume exposed tools.

<a href="https://microsoft.github.io/spark.js/2.getting-started/1.create-application.html" target="_blank">
    <img src="https://img.shields.io/badge/📖 Getting Started-blue?style=for-the-badge" />
</a>

## Install

```bash
npm install @microsoft/spark.mcpclient
```

## Overview

The MCP Client Plugin enables seamless integration with Model Context Protocol (MCP) servers through SSE (Server-Sent Events). It allows you to connect to various MCP servers and consume their exposed tools within your Spark.js applications.

## Usage

```typescript
import { ChatPrompt } from '@microsoft/spark.ai';
import { McpClientPlugin } from '@microsoft/spark.mcpclient';

const prompt = new ChatPrompt(
    {
        instructions: 'You are a helpful assistant.',
        model: yourModel,
    },
    [new McpClientPlugin()]
).usePlugin('mcpClient', { url: 'http://your-mcp-server/mcp' });
```

## Features

- 🔌 Automatic tool discovery from MCP servers
- 💾 Optional caching of tool parameters (if you'd like to avoid the discovery call or only pass in a subset of tools)
