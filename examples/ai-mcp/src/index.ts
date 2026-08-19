import Anthropic from '@anthropic-ai/sdk';
import { AzureOpenAI } from 'openai';

import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { Agent, IAgentRunner } from './agent';
import { AnthropicAgent } from './anthropic-agent';
import { registerHandlers } from './handlers';
import { McpToolSet } from './mcp-tools';

const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'https://learn.microsoft.com/api/mcp';

const logger = new ConsoleLogger('@examples/ai-mcp', { level: 'info' });

async function main(): Promise<void> {
  const mcpTools = await McpToolSet.create(MCP_SERVER_URL, logger.child('mcp'));
  const agent = createAgent(mcpTools);

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

function createAgent(mcpTools: McpToolSet): IAgentRunner {
  const provider = process.env.AI_PROVIDER || 'azure-openai';

  if (provider === 'anthropic') {
    const client = new Anthropic({
      apiKey: required('ANTHROPIC_API_KEY'),
    });
    return new AnthropicAgent({
      client,
      model: required('ANTHROPIC_MODEL'),
      maxTokens: optionalNumber('ANTHROPIC_MAX_TOKENS'),
      mcpTools,
      log: logger.child('agent/anthropic'),
    });
  }

  if (provider === 'azure-openai') {
    const endpoint = required('AZURE_OPENAI_ENDPOINT');
    const apiKey = required('AZURE_OPENAI_API_KEY');
    const deployment = required('AZURE_OPENAI_MODEL_DEPLOYMENT_NAME');
    const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';
    const client = new AzureOpenAI({ endpoint, apiKey, deployment, apiVersion });

    return new Agent({
      client,
      deploymentName: deployment,
      mcpTools,
      log: logger.child('agent/azure-openai'),
    });
  }

  throw new Error(`Unsupported AI_PROVIDER "${provider}". Use "azure-openai" or "anthropic".`);
}

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required (set it in .env).`);
  return value;
}

function optionalNumber(name: string): number | undefined {
  const value = process.env[name];
  if (!value) return undefined;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${name} must be a positive number.`);
  }
  return parsed;
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
