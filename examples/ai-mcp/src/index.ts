import { AzureOpenAI } from 'openai';

import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { Agent } from './agent';
import { registerHandlers } from './handlers';
import { McpToolSet } from './mcp-tools';

const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'https://learn.microsoft.com/api/mcp';

const logger = new ConsoleLogger('@examples/ai-mcp', { level: 'info' });

async function main(): Promise<void> {
  const endpoint = required('AZURE_OPENAI_ENDPOINT');
  const apiKey = required('AZURE_OPENAI_API_KEY');
  const deployment = required('AZURE_OPENAI_MODEL_DEPLOYMENT_NAME');
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';

  const client = new AzureOpenAI({ endpoint, apiKey, deployment, apiVersion });

  const mcpTools = await McpToolSet.create(MCP_SERVER_URL, logger.child('mcp'));
  const agent = new Agent({
    client,
    deploymentName: deployment,
    mcpTools,
    log: logger.child('agent'),
  });

  const app = new App({
    logger,
    plugins: [],
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

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required (set it in .env).`);
  return value;
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
