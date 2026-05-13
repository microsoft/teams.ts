import { DefaultAzureCredential } from '@azure/identity';

import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

import { Agent } from './agent';
import { registerHandlers } from './handlers';

const logger = new ConsoleLogger('@examples/ai-mcp', { level: 'info' });

async function main() {
  const projectEndpoint = required('FOUNDRY_PROJECT_ENDPOINT');
  const deploymentName = required('FOUNDRY_MODEL_NAME');

  const agent = await Agent.create({
    projectEndpoint,
    credential: new DefaultAzureCredential(),
    deploymentName,
    log: logger.child('agent'),
  });

  const app = new App({
    logger,
    plugins: [new DevtoolsPlugin()],
  });

  registerHandlers(app, agent, logger.child('handlers'));

  const shutdown = async () => {
    logger.info('Shutting down — deleting Foundry agent version.');
    await agent.cleanup();
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
