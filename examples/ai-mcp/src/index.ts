import { DefaultAzureCredential, getBearerTokenProvider } from '@azure/identity';

import { AzureOpenAI } from 'openai';

import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

import { Agent } from './agent';
import { registerHandlers } from './handlers';
import { McpToolSet } from './mcp-tools';

const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'https://learn.microsoft.com/api/mcp';
const AZURE_OPENAI_SCOPE = 'https://cognitiveservices.azure.com/.default';

const logger = new ConsoleLogger('@examples/ai-mcp', { level: 'info' });

async function main(): Promise<void> {
  const endpoint = required('AZURE_OPENAI_ENDPOINT');
  const deployment = required('AZURE_OPENAI_MODEL_DEPLOYMENT_NAME');
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';

  // Auth: prefer the API key if provided; otherwise fall back to AAD via
  // DefaultAzureCredential (az login / managed identity / env vars).
  const client = buildAzureOpenAI({ endpoint, deployment, apiVersion });

  const mcpTools = await McpToolSet.create(MCP_SERVER_URL, logger.child('mcp'));
  const agent = new Agent({
    client,
    deploymentName: deployment,
    mcpTools,
    log: logger.child('agent'),
  });

  const app = new App({
    logger,
    plugins: [new DevtoolsPlugin()],
  });

  registerHandlers(app, agent, logger.child('handlers'));

  const shutdown = async () => {
    logger.info('Shutting down — closing MCP client.');
    await mcpTools.close().catch((err) => logger.warn(`MCP close failed: ${err}`));
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  await app.start(Number(process.env.PORT) || 3978);
}

function buildAzureOpenAI(args: {
  endpoint: string;
  deployment: string;
  apiVersion: string;
}): AzureOpenAI {
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  if (apiKey) {
    return new AzureOpenAI({
      endpoint: args.endpoint,
      apiKey,
      deployment: args.deployment,
      apiVersion: args.apiVersion,
    });
  }

  const tokenProvider = getBearerTokenProvider(new DefaultAzureCredential(), AZURE_OPENAI_SCOPE);
  return new AzureOpenAI({
    endpoint: args.endpoint,
    azureADTokenProvider: tokenProvider,
    deployment: args.deployment,
    apiVersion: args.apiVersion,
  });
}

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required (set it in .env).`);
  return value;
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
