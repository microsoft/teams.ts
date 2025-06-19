import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

import { ValueOrFactory } from './mcp-client-types';

/**
 * Creates an SSE client transport with the given URL and headers
 */
export async function buildSSEClientTransport(
  url: string,
  headers: ValueOrFactory<Record<string, string>> | undefined
): Promise<SSEClientTransport> {
  const resolvedHeaders = typeof headers === 'function' ? await headers() : headers;
  // We need to include headers like this because of
  // https://github.com/modelcontextprotocol/typescript-sdk/issues/118
  return new SSEClientTransport(new URL(url), {
    requestInit: {
      headers: {
        ...resolvedHeaders,
      },
    },
    eventSourceInit: {
      fetch(input: Request | URL | string, init?: RequestInit) {
        const headers = new Headers({
          ...resolvedHeaders,
          ...init?.headers,
        });
        return fetch(input, {
          ...init,
          headers,
        });
      },
    },
  });
}

export async function buildStreamableHttpClientTransport(
  url: string,
  headers: ValueOrFactory<Record<string, string>> | undefined
): Promise<StreamableHTTPClientTransport> {
  const resolvedHeaders = typeof headers === 'function' ? await headers() : headers;
  return new StreamableHTTPClientTransport(new URL(url), {
    requestInit: {
      headers: {
        ...resolvedHeaders,
      },
    },
  });
}