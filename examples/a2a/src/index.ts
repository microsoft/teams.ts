import http from 'node:http';

import {
  DefaultRequestHandler,
  InMemoryTaskStore,
} from '@a2a-js/sdk/server';
import {
  agentCardHandler,
  jsonRpcHandler,
  UserBuilder,
} from '@a2a-js/sdk/server/express';
import express from 'express';
import { AzureOpenAI } from 'openai';

import { App, ExpressAdapter } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { A2APeerClient } from './a2a-client';
import { HandoffAgentExecutor } from './a2a-server';
import { Agent } from './agent';
import { buildAgentCard, Config } from './types';

const logger = new ConsoleLogger('@examples/a2a', { level: 'info' });

async function main(): Promise<void> {
  const config: Config = {
    name: required('BOT_NAME'),
    description: required('BOT_DESCRIPTION'),
    selfUrl: required('BOT_SELF_URL'),
    peerName: required('PEER_NAME'),
    peerUrl: required('PEER_URL'),
  };

  const openAi = new AzureOpenAI({
    endpoint: required('AZURE_OPENAI_ENDPOINT'),
    apiKey: required('AZURE_OPENAI_API_KEY'),
    deployment: required('AZURE_OPENAI_MODEL_DEPLOYMENT_NAME'),
    apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-10-21',
  });

  const expressApp = express();

  // Teams.ts mounts /api/messages on this express app via the adapter.
  const app = new App({
    logger,
    httpServerAdapter: new ExpressAdapter(expressApp),
  });

  const a2aClient = new A2APeerClient(config, logger.child('a2a-client'));

  const agent = new Agent({
    client: openAi,
    deploymentName: required('AZURE_OPENAI_MODEL_DEPLOYMENT_NAME'),
    config,
    a2aClient,
    log: logger.child('agent'),
  });

  // A2A request handler. The agent card is served at /.well-known/agent-card.json
  // (the protocol's well-known path) and JSON-RPC handoffs land at /a2a.
  const agentCard = buildAgentCard(config);
  const a2aHandler = new DefaultRequestHandler(
    agentCard,
    new InMemoryTaskStore(),
    new HandoffAgentExecutor(app, agent, config, logger.child('a2a-server'))
  );
  expressApp.use(
    '/.well-known/agent-card.json',
    agentCardHandler({ agentCardProvider: a2aHandler })
  );
  expressApp.use(
    '/a2a',
    jsonRpcHandler({
      requestHandler: a2aHandler,
      userBuilder: UserBuilder.noAuthentication,
    })
  );

  app.on('message', async ({ activity, send }) => {
    const { aadObjectId } = activity.from;
    const { tenantId } = activity.conversation;
    const { serviceUrl } = activity;

    if (!aadObjectId || !tenantId || !serviceUrl) {
      logger.warn(
        'Skipping turn: activity missing identity required for handoff ' +
        `(aadObjectId=${!!aadObjectId}, tenantId=${!!tenantId}, serviceUrl=${!!serviceUrl}).`
      );
      await send('I can\'t process this message — it\'s missing the identity context this sample needs for cross-bot handoff.');
      return;
    }

    const reply = await agent.run(
      activity.conversation.id,
      {
        aadObjectId,
        userName: activity.from.name ?? 'User',
        tenantId,
        serviceUrl,
      },
      activity.stripMentionsText().text ?? ''
    );

    if (reply) {
      await send(reply);
    }
  });

  // Initialize teams.ts (registers /api/messages on the express app) without
  // starting an internal http server — we own the lifecycle.
  await app.initialize();

  const port = Number(process.env.PORT) || 3978;
  const server = http.createServer(expressApp);
  await new Promise<void>((resolve, reject) => {
    server.listen(port, () => resolve());
    server.once('error', reject);
  });

  logger.info(`${config.name} listening on http://localhost:${port}`);
  logger.info('  Teams endpoint:    POST /api/messages');
  logger.info('  A2A endpoint:      POST /a2a');
  logger.info('  A2A agent card:    GET  /.well-known/agent-card.json');
  logger.info(`  Peer:              ${config.peerName} @ ${config.peerUrl}`);
}

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required (set it in your .env file).`);
  return value;
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
